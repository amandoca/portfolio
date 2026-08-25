import { NavLink } from "react-router";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useMobileNav } from "@/hooks";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import { Button } from "@/components/ui";

const MobileNav: React.FC = () => {
  const { closeMenu, getMobileNavLinkClassName, isOpen, setIsOpen, t } = useMobileNav();

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            className="text-dracula-cyan p-2 outline-none cursor-pointer hover:opacity-80 transition-opacity"
            aria-label={t("navbar.aria_menu_open")}
          >
            <HamburgerMenuIcon className="w-8 h-8" />
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="bg-background border-border text-foreground w-[70%]"
        >
          <SheetHeader>
            <SheetTitle className="text-dracula-cyan font-jetbrains tracking-widest text-left border-b border-border pb-4 mt-4">
              {t("navbar.menu")}
            </SheetTitle>
            <SheetDescription className="sr-only">
              {t("navbar.menu_description")}
            </SheetDescription>
          </SheetHeader>
          
          <ul className="flex flex-col gap-8 mt-10">
            <li>
              <NavLink 
                to="/" 
                onClick={closeMenu} 
                className={getMobileNavLinkClassName}
                aria-label={t("navbar.aria_home")}
              >
                {t("navbar.home")}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/resume" 
                onClick={closeMenu} 
                className={getMobileNavLinkClassName}
                aria-label={t("navbar.aria_resume")}
              >
                {t("navbar.resume")}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                onClick={closeMenu} 
                className={getMobileNavLinkClassName}
                aria-label={t("navbar.aria_projects")}
              >
                {t("navbar.projects")}
              </NavLink>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
