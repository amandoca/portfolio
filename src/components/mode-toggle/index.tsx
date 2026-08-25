import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui"
import { useModeToggle } from "@/hooks"

export function ModeToggle() {
  const { ariaLabel, isDarkTheme, title, toggleTheme } = useModeToggle()

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      aria-label={ariaLabel}
      aria-pressed={isDarkTheme}
      title={title}
      className="cursor-pointer"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" aria-hidden="true"/>
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" aria-hidden="true"/>
    </Button>
  )
}
