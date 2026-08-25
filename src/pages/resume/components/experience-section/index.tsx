import { cn } from "@/lib/utils";
import type { ExperienceItem, ExperienceSectionProps } from "./types";

function ExperienceCard({ experience, renderText }: { experience: ExperienceItem; renderText?: (item: string) => React.ReactNode }) {
  return (
    <div className="relative">
      <div className={cn("absolute w-3 h-3 rounded-full -left-[1.95rem] top-1.5", experience.bulletClassName)} />

      <span className="text-dracula-primary text-sm font-mono">{experience.period}</span>
      <h4 className="text-xl font-bold text-foreground">{experience.role}</h4>
      <p className="text-dracula-secondary font-semibold text-sm">{experience.company}</p>
      <p className="text-xs md:text-sm text-muted-foreground mt-1 mb-4 italic">{experience.stack}</p>

      <ul className="space-y-3 text-sm text-foreground/90 dark:text-foreground/80 leading-relaxed">
        {experience.activities.map((activity) => (
          <li key={activity} className="flex items-start gap-2">
            <span className="text-dracula-green">▹</span>
            <span>{renderText ? renderText(activity) : activity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ExperienceSection({
  experiences,
  internationalExperience,
  internationalTitle,
  renderTimelineText,
  title,
}: ExperienceSectionProps) {
  return (
    <div className="flex flex-col h-full space-y-6 animate-in fade-in duration-500">
      <h3 className="text-3xl font-bold text-dracula-cyan">{title}</h3>

      <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
        <div className="border-l-2 border-dracula-green/30 pl-6 space-y-10">
          {experiences.map((experience) => (
            <ExperienceCard key={`${experience.period}-${experience.role}`} experience={experience} />
          ))}
        </div>

        <div className="mt-12">
          <h4 className="text-2xl font-bold text-dracula-cyan mb-6">{internationalTitle}</h4>

          <div className="border-l-2 border-dracula-secondary/40 pl-6">
            <ExperienceCard experience={internationalExperience} renderText={renderTimelineText} />
          </div>
        </div>
      </div>
    </div>
  );
}
