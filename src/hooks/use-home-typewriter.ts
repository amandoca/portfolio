import { useEffect, useState } from "react";
import { useTranslate } from "./use-translate";

const TYPEWRITER_INTERVAL_IN_MS = 34;

export interface HomeTypewriterSegment {
  isHighlighted: boolean;
  text: string;
}

interface HomeTypewriterTranslatedSegment {
  highlight: boolean;
  text: string;
}

interface HomeTypewriterState {
  language: string;
  visibleCharactersCount: number;
}

function getCharactersCountFromSegments(segments: HomeTypewriterTranslatedSegment[]) {
  return segments.reduce((charactersCount, segment) => charactersCount + segment.text.length, 0);
}

function getVisibleSegments(segments: HomeTypewriterTranslatedSegment[], visibleCharactersCount: number) {
  let remainingCharactersCount = visibleCharactersCount;
  const visibleSegments: HomeTypewriterSegment[] = [];

  for (const segment of segments) {
    if (remainingCharactersCount <= 0) {
      break;
    }

    const visibleText = segment.text.slice(0, remainingCharactersCount);

    visibleSegments.push({
      isHighlighted: segment.highlight,
      text: visibleText,
    });

    remainingCharactersCount -= segment.text.length;
  }

  return visibleSegments;
}

export function useHomeTypewriter() {
  const { i18n, t } = useTranslate();

  const translatedSegments = t("home.typewriter_segments", { returnObjects: true }) as HomeTypewriterTranslatedSegment[];
  const totalCharactersCount = getCharactersCountFromSegments(translatedSegments);

  const [typewriterState, setTypewriterState] = useState<HomeTypewriterState>({
    language: i18n.language,
    visibleCharactersCount: 0,
  });

  useEffect(() => {
    if (typewriterState.language === i18n.language && typewriterState.visibleCharactersCount >= totalCharactersCount) {
      return;
    }

    // Mostra uma letra por vez para simular digitação.
    const typingTimeout = window.setTimeout(() => {
      setTypewriterState((currentTypewriterState) => {
        if (currentTypewriterState.language !== i18n.language) {
          return {
            language: i18n.language,
            visibleCharactersCount: 1,
          };
        }

        return {
          language: i18n.language,
          visibleCharactersCount: currentTypewriterState.visibleCharactersCount + 1,
        };
      });
    }, TYPEWRITER_INTERVAL_IN_MS);

    return () => {
      window.clearTimeout(typingTimeout);
    };
  }, [i18n.language, totalCharactersCount, typewriterState.language, typewriterState.visibleCharactersCount]);

  const visibleCharactersCount = typewriterState.language === i18n.language ? typewriterState.visibleCharactersCount : 0;

  return {
    t,
    visibleSegments: getVisibleSegments(translatedSegments, visibleCharactersCount),
  };
}
