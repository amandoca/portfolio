import { NavLink } from "react-router";
import { motion } from "motion/react";
import { useTranslate } from "@/hooks";
import { cn } from "@/lib/utils";
import { LanguageSwitcher, MobileNav } from "../";

const Header = () => {
  const { t } = useTranslate();

  const baseLink = "transition-all duration-300 hover:text-dracula-cyan text-sm tracking-widest uppercase transition-colors";
  const activeLink = "text-dracula-secondary md:border-b-2 md:border-dracula-secondary md:pb-1 font-bold";

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <nav aria-label={t("navbar.aria_nav")} className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-12">
    
         <NavLink to="/" aria-label={t("navbar.aria_home")}>
            <motion.img 
                src="/assets/LOGO.png" 
                alt={`Amanda - ${t("navbar.aria_home")}`}
                loading="lazy"
                className="w-16 h-16 object-contain dark:brightness-110 transition-all"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            />
        </NavLink>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <NavLink to="/" aria-label={t("navbar.aria_home")} className={({ isActive }) => cn(baseLink, isActive && activeLink)}>
              {t("navbar.home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" aria-label={t("navbar.aria_resume")} className={({ isActive }) => cn(baseLink, isActive && activeLink)}>
              {t("navbar.resume")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" aria-label={t("navbar.aria_projects")} className={({ isActive }) => cn(baseLink, isActive && activeLink)}>
              {t("navbar.projects")}
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
