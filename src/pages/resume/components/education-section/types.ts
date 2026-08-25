export interface EducationItem {
  date: string;
  link: string;
  subtitle: string;
  title: string;
}

export interface EducationSectionProps {
  educationItems: EducationItem[];
  title: string;
}
