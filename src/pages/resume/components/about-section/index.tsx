import { Trans } from "react-i18next";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { AboutSectionProps } from "./types";

export function AboutSection({
  descriptionKey,
  expertiseTextKey,
  expertiseTitle,
  language,
  role,
  softSkills,
  softSkillsTitle,
  stats,
  title,
}: AboutSectionProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center xl:text-left">
        <h3 className="text-3xl font-bold text-dracula-cyan mb-4">{title}</h3>
        <p className="text-dracula-primary font-mono text-sm mb-6 uppercase tracking-widest">{role}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.value} className={cn("bg-background p-4 rounded-xl border", stat.borderClassName)}>
            <span className={cn("text-2xl font-bold", stat.textClassName)}>{stat.value}</span>
            <p className="text-[10px] uppercase text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="max-h-125 overflow-y-auto pr-4 custom-scrollbar space-y-6 text-sm md:text-base leading-relaxed text-balance">
        <p className="text-foreground">
          <Trans
            key={language}
            i18nKey={descriptionKey}
            components={{ 1: <strong className="text-dracula-orange" /> }}
          />
        </p>

        <div className="space-y-4">
          <h4 className="text-dracula-primary font-bold uppercase text-xs tracking-widest">{expertiseTitle}</h4>
          <p className="text-foreground text-sm">
            <Trans
              key={language}
              i18nKey={expertiseTextKey}
              components={{ 1: <strong className="text-dracula-orange" /> }}
            />
          </p>
        </div>

        <div className="bg-background p-6 rounded-2xl border border-border">
          <h4 className="text-dracula-primary font-bold uppercase text-xs tracking-widest mb-4">{softSkillsTitle}</h4>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((softSkill) => (
              <Badge key={softSkill} variant="draculaProps">
                {softSkill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
