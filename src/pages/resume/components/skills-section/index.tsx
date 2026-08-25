import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { SkillItem, SkillsSectionProps } from "./types";

function SkillGrid({ skills }: { skills: SkillItem[] }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center group ml-4">
          <div className="text-4xl md:text-5xl p-4 bg-dracula-current/20 rounded-xl border border-white/5 group-hover:border-dracula-orange/50 transition-all duration-300 mb-2">
            <div className={cn("transition-colors duration-300", skill.color)}>{skill.icon}</div>
          </div>

          <span className="text-[10px] font-bold uppercase text-center opacity-80 group-hover:opacity-100 group-hover:text-dracula-orange transition-all">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export function SkillsSection({
  backendSkills,
  backendTitle,
  ecosystemTitle,
  frontendSkills,
  frontendTitle,
  libAndTechniques,
  subtitle,
  title,
}: SkillsSectionProps) {
  return (
    <div className="flex flex-col h-full space-y-6 animate-in fade-in duration-500">
      <div className="text-center xl:text-left">
        <h3 className="text-3xl font-bold text-dracula-cyan">{title}</h3>
        <p className="text-white/60 text-sm mt-2">{subtitle}</p>
      </div>

      <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar space-y-10">
        <section>
          <h4 className="text-dracula-orange font-mono text-xs uppercase tracking-widest mb-6 border-l-2 border-dracula-orange pl-3">
            {frontendTitle}
          </h4>
          <SkillGrid skills={frontendSkills} />
        </section>

        <section>
          <h4 className="text-dracula-orange font-mono text-xs uppercase tracking-widest mb-6 border-l-2 border-dracula-orange pl-3">
            {backendTitle}
          </h4>
          <SkillGrid skills={backendSkills} />
        </section>

        <section className="bg-dracula-current/10 p-6 rounded-2xl border border-white/5">
          <h4 className="text-dracula-secondary font-mono text-xs uppercase tracking-widest mb-6 text-center">
            {ecosystemTitle}
          </h4>

          <div className="flex flex-wrap justify-center gap-3">
            {libAndTechniques.map((tag) => (
              <Badge
                key={tag}
                variant="draculaProps"
                className="px-4 py-1.5 bg-dracula-bg text-[10px] md:text-[11px] font-bold cursor-default"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
