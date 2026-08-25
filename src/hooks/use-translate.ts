import { useTranslation } from "react-i18next";

export function useTranslate() {
  const { i18n, t } = useTranslation();

  return {
    i18n,
    t,
  };
}
