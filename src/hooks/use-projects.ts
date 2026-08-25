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
  repositoryName: string;
}

interface ProjectTranslation {
  description: string;
  githubUrl: string;
  id: number;
  isPrivate: boolean;
  liveUrl: string;
  status: "completed" | "in-progress" | "maintenance";
  tags: string[];
  title: string;
}

function getRepositoryNameFromGithubUrl(githubUrl: string) {
  const repositoryNameParts = githubUrl.split("/").filter(Boolean);

  return repositoryNameParts[repositoryNameParts.length - 1];
}

export function useProjects() {
  const { t } = useTranslate();

  const translatedProjects = t("projects.list", { returnObjects: true }) as ProjectTranslation[];
  const projects = translatedProjects.map((project) => ({
    ...project,
    repositoryName: getRepositoryNameFromGithubUrl(project.githubUrl),
  }));

  return {
    projects,
    t,
  };
}
