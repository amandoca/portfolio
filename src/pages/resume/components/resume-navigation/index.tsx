import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { ResumeNavigationProps } from "./types";

export function ResumeNavigation({
  navItems,
  titleHighlight,
  titleMain,
  view,
  onSelectSection,
}: ResumeNavigationProps) {
  return (
    <div className="flex flex-col gap-4 w-full xl:w-1/3">
      <h1 className="text-3xl font-bold mb-6 text-center xl:text-left">
        {titleMain} <span className="text-dracula-secondary">{titleHighlight}</span>
      </h1>

      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Button
            key={item.id}
            onClick={() => onSelectSection(item.id)}
            aria-label={`Visualizar a seção ${item.label}`}
            className={cn(
              "group h-16 justify-between text-lg border-2 transition-all font-bold cursor-pointer",
              view === item.id
                ? "border-dracula-cyan text-dracula-cyan bg-card hover:bg-card hover:text-dracula-cyan hover:border-dracula-cyan/50"
                : "border-border text-muted-foreground bg-transparent hover:text-dracula-cyan hover:border-dracula-cyan/50",
            )}
          >
            <span className="flex items-center gap-4">
              <span className="text-dracula-primary group-hover:text-dracula-cyan transition-colors">{item.icon}</span>
              {item.label}
            </span>
            {view === item.id && <ChevronRight className="w-5 h-5" />}
          </Button>
        ))}
      </div>
    </div>
  );
}
