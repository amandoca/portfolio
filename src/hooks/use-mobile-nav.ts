import { useState } from "react";
import { useTranslate } from "./use-translate";

export interface MobileNavLinkStyleProps {
  isActive: boolean;
}

export function useMobileNav() {
  const { t } = useTranslate();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function getMobileNavLinkClassName({ isActive }: MobileNavLinkStyleProps): string {
    if (isActive) {
      return "text-2xl text-dracula-secondary font-bold border-l-4 border-dracula-secondary pl-4 transition-all";
    }

    return "text-2xl text-foreground hover:text-dracula-cyan pl-4 transition-all";
  }

  return {
    closeMenu,
    getMobileNavLinkClassName,
    isOpen,
    setIsOpen,
    t,
  };
}
