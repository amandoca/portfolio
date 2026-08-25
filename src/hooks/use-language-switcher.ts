import { languageOptions } from "@/i18n";
import { useTranslate } from "./use-translate";

export function useLanguageSwitcher() {
  const { i18n } = useTranslate();

  const currentLanguage = i18n.language.split("-")[0];
  const availableLanguages = languageOptions.map((languageOption) => languageOption.code);

  function changeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  return {
    availableLanguages,
    changeLanguage,
    currentLanguage,
  };
}
