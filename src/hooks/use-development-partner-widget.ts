import { useState } from "react";
import { useTranslate } from "./use-translate";

export function useDevelopmentPartnerWidget() {
  const { t } = useTranslate();

  const [isDevelopmentPartnerModalOpen, setIsDevelopmentPartnerModalOpen] = useState(false);

  function changeDevelopmentPartnerModalVisibility(nextVisibility: boolean) {
    setIsDevelopmentPartnerModalOpen(nextVisibility);
  }

  return {
    changeDevelopmentPartnerModalVisibility,
    isDevelopmentPartnerModalOpen,
    t,
  };
}
