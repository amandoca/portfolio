import type { ReactNode } from "react";

export interface ExperienceItem {
  activities: string[];
  bulletClassName: string;
  company: string;
  period: string;
  role: string;
  stack: string;
}

export interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  internationalExperience: ExperienceItem;
  internationalTitle: string;
  title: string;
  renderTimelineText: (item: string) => ReactNode;
}
