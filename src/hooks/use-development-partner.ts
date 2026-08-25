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

interface DevelopmentPartnerSkill {
  label: string;
  progressWidth: string;
  value: number;
}

interface DevelopmentPartner {
  id: number;
  imageUrl: string;
  name: string;
  skills: DevelopmentPartnerSkill[];
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

function getDevelopmentSkillTranslationKeyByStatName(statName: string) {
  if (statName === "hp") {
    return "development_partner.skills.energy";
  }

  if (statName === "attack") {
    return "development_partner.skills.debugging";
  }

  if (statName === "defense") {
    return "development_partner.skills.resilience";
  }

  if (statName === "special-attack") {
    return "development_partner.skills.creativity";
  }

  if (statName === "special-defense") {
    return "development_partner.skills.attention";
  }

  return "development_partner.skills.agility";
}

function getDevelopmentSkillProgressWidth(statValue: number) {
  if (statValue > 100) {
    return "100%";
  }

  return `${statValue}%`;
}

export function useDevelopmentPartner() {
  const { t } = useTranslate();

  const [hasRequestError, setHasRequestError] = useState(false);
  const [isLoadingDevelopmentPartner, setIsLoadingDevelopmentPartner] = useState(false);
  const [developmentPartner, setDevelopmentPartner] = useState<DevelopmentPartner>();

  function transformPokemonResponseToDevelopmentPartner(pokemonResponse: PokeApiPokemonResponse) {
    const developmentPartnerSkills = pokemonResponse.stats.map((pokemonStat) => ({
      label: t(getDevelopmentSkillTranslationKeyByStatName(pokemonStat.stat.name)),
      progressWidth: getDevelopmentSkillProgressWidth(pokemonStat.base_stat),
      value: pokemonStat.base_stat,
    }));

    return {
      id: pokemonResponse.id,
      imageUrl: pokemonResponse.sprites.other["official-artwork"].front_default,
      name: formatPokemonName(pokemonResponse.name),
      skills: developmentPartnerSkills,
    };
  }

  async function fetchRandomDevelopmentPartner() {
    setHasRequestError(false);
    setIsLoadingDevelopmentPartner(true);

    try {
      // Sorteia um Pokémon clássico para manter a brincadeira reconhecível.
      const pokemonId = getRandomClassicPokemonId();
      const pokemonApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

      if (!pokemonApiResponse.ok) {
        throw new Error("PokeAPI request failed");
      }

      const pokemonResponse: PokeApiPokemonResponse = await pokemonApiResponse.json();
      const nextDevelopmentPartner = transformPokemonResponseToDevelopmentPartner(pokemonResponse);

      setDevelopmentPartner(nextDevelopmentPartner);
    } catch {
      setHasRequestError(true);
    } finally {
      setIsLoadingDevelopmentPartner(false);
    }
  }

  return {
    fetchRandomDevelopmentPartner,
    hasRequestError,
    isLoadingDevelopmentPartner,
    developmentPartner,
    t,
  };
}
