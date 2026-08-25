import { useTheme } from "./use-theme";
import { useTranslate } from "./use-translate";

export function useModeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslate();

  const isDarkTheme = theme === "dark";
  const ariaLabel = theme === "light" ? t("theme.activate_dark") : t("theme.activate_light");

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
  }

  return {
    ariaLabel,
    isDarkTheme,
    title: t("theme.toggle"),
    toggleTheme,
  };
}
