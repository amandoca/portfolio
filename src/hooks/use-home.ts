import { useState } from "react";
import { useTranslate } from "./use-translate";

export function useHome() {
  const { i18n, t } = useTranslate();

  const [isQaPartnerCardVisible, setIsQaPartnerCardVisible] = useState(false);

  function changeQaPartnerCardVisibility(nextVisibility: boolean) {
    setIsQaPartnerCardVisible(nextVisibility);
  }

  return {
    changeQaPartnerCardVisibility,
    i18n,
    isQaPartnerCardVisible,
    t,
  };
}
