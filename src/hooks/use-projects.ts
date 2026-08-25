import { useTranslate } from "./use-translate";

export interface ProjectProps {
  id: number;
  title: string;
  status: "completed" | "in-progress" | "maintenance";
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  isPrivate: boolean;
}

export function useProjects() {
  const { t } = useTranslate();

  const projects = t("projects.list", { returnObjects: true }) as ProjectProps[];

  return {
    projects,
    t,
  };
}
