import type { ReactNode } from "react";

export interface SkillItem {
  color: string;
  icon: ReactNode;
  name: string;
}

export interface SkillsSectionProps {
  backendSkills: SkillItem[];
  backendTitle: string;
  ecosystemTitle: string;
  frontendSkills: SkillItem[];
  frontendTitle: string;
  libAndTechniques: string[];
  subtitle: string;
  title: string;
}
