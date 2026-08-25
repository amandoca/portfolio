import { motion } from "motion/react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useLanguageSwitcher } from "@/hooks";

const LanguageSwitcher = () => {
  const { availableLanguages, changeLanguage, currentLanguage } = useLanguageSwitcher();

  return (
    <div className="flex items-center gap-1 bg-dracula-current/20 p-1 rounded-lg border border-dracula-current/30">
      {availableLanguages.map((language) => (
        <Button
          key={language}
          onClick={() => changeLanguage(language)}
          className={cn(
            "relative px-3 py-1 text-xs font-bold uppercase transition-colors duration-300 rounded-md cursor-pointer",
            currentLanguage === language
              ? "text-dracula-bg"
              : "text-dracula-text hover:text-dracula-primary",
          )}
        >
          {currentLanguage === language && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-dracula-primary rounded-md -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {language}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
