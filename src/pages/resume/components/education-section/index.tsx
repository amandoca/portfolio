import { ResumeItem } from "@/components";
import type { EducationSectionProps } from "./types";

export function EducationSection({ educationItems, title }: EducationSectionProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h3 className="text-3xl font-bold text-dracula-cyan">{title}</h3>
      <div className="border-l-2 border-dracula-green/30 pl-6 space-y-10">
        {educationItems.map((item) => (
          <ResumeItem
            key={`${item.date}-${item.title}`}
            date={item.date}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
