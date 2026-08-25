export interface AboutStatItem {
  borderClassName: string;
  label: string;
  textClassName: string;
  value: string;
}

export interface AboutSectionProps {
  descriptionKey: string;
  expertiseTextKey: string;
  expertiseTitle: string;
  language: string;
  role: string;
  softSkills: string[];
  softSkillsTitle: string;
  stats: AboutStatItem[];
  title: string;
}
