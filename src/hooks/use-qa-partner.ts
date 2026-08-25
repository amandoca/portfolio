import { useState } from "react";
import { useTranslate } from "./use-translate";

const FIRST_GENERATION_POKEMON_TOTAL = 151;

interface PokeApiStatResponse {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokeApiPokemonResponse {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: PokeApiStatResponse[];
}

interface QaPartnerSkill {
  label: string;
  progressWidth: string;
  value: number;
}

interface QaPartner {
  id: number;
  imageUrl: string;
  name: string;
  skills: QaPartnerSkill[];
}

function getRandomClassicPokemonId() {
  return Math.floor(Math.random() * FIRST_GENERATION_POKEMON_TOTAL) + 1;
}

function formatPokemonName(pokemonName: string) {
  return pokemonName
    .split("-")
    .map((pokemonNamePart) => pokemonNamePart.charAt(0).toUpperCase() + pokemonNamePart.slice(1))
    .join(" ");
}

function getQaSkillTranslationKeyByStatName(statName: string) {
  if (statName === "hp") {
    return "qa_partner.skills.energy";
  }

  if (statName === "attack") {
    return "qa_partner.skills.debugging";
  }

  if (statName === "defense") {
    return "qa_partner.skills.resilience";
  }

  if (statName === "special-attack") {
    return "qa_partner.skills.creativity";
  }

  if (statName === "special-defense") {
    return "qa_partner.skills.attention";
  }

  return "qa_partner.skills.agility";
}

function getQaSkillProgressWidth(statValue: number) {
  if (statValue > 100) {
    return "100%";
  }

  return `${statValue}%`;
}

export function useQaPartner() {
  const { t } = useTranslate();

  const [hasRequestError, setHasRequestError] = useState(false);
  const [isLoadingQaPartner, setIsLoadingQaPartner] = useState(false);
  const [qaPartner, setQaPartner] = useState<QaPartner>();

  function transformPokemonResponseToQaPartner(pokemonResponse: PokeApiPokemonResponse) {
    const qaPartnerSkills = pokemonResponse.stats.map((pokemonStat) => ({
      label: t(getQaSkillTranslationKeyByStatName(pokemonStat.stat.name)),
      progressWidth: getQaSkillProgressWidth(pokemonStat.base_stat),
      value: pokemonStat.base_stat,
    }));

    return {
      id: pokemonResponse.id,
      imageUrl: pokemonResponse.sprites.other["official-artwork"].front_default,
      name: formatPokemonName(pokemonResponse.name),
      skills: qaPartnerSkills,
    };
  }

  async function fetchRandomQaPartner() {
    setHasRequestError(false);
    setIsLoadingQaPartner(true);

    try {
      // Sorteia um Pokémon clássico para manter a brincadeira reconhecível.
      const pokemonId = getRandomClassicPokemonId();
      const pokemonApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

      if (!pokemonApiResponse.ok) {
        throw new Error("PokeAPI request failed");
      }

      const pokemonResponse: PokeApiPokemonResponse = await pokemonApiResponse.json();
      const nextQaPartner = transformPokemonResponseToQaPartner(pokemonResponse);

      setQaPartner(nextQaPartner);
    } catch {
      setHasRequestError(true);
    } finally {
      setIsLoadingQaPartner(false);
    }
  }

  return {
    fetchRandomQaPartner,
    hasRequestError,
    isLoadingQaPartner,
    qaPartner,
    t,
  };
}
