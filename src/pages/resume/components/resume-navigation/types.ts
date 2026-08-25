import type { ViewOption, ResumeNavigationItem } from "@/hooks";

export interface ResumeNavigationProps {
  navItems: ResumeNavigationItem[];
  titleHighlight: string;
  titleMain: string;
  view: ViewOption;
  onSelectSection: (sectionId: ViewOption) => void;
}
