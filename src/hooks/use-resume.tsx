import { useState, type ReactNode } from "react";
import { BriefcaseBusiness, Code2, GraduationCap, UserRound } from "lucide-react";
import { LibAndTechniques } from "@/data/libAndTechniques";
import { BackEndSkills, FrontEndSkills } from "@/data/skills";
import { useTranslate } from "./use-translate";

export type ViewOption = "sobre-mim" | "experiencia" | "habilidades" | "formacao";

export interface ResumeNavigationItem {
  id: ViewOption;
  label: string;
  icon: ReactNode;
}

const aboutDescriptionKey = "resume.about.description.p1";
const aboutExpertiseTextKey = "resume.about.expertise.text";

export function useResume() {
  const { i18n, t } = useTranslate();

  const [view, setView] = useState<ViewOption>("sobre-mim");

  const navItems: ResumeNavigationItem[] = [
    { id: "sobre-mim", label: t("resume.nav.about"), icon: <UserRound className="h-5 w-5" /> },
    { id: "experiencia", label: t("resume.nav.experience"), icon: <BriefcaseBusiness className="h-5 w-5" /> },
    { id: "habilidades", label: t("resume.nav.skills"), icon: <Code2 className="h-5 w-5" /> },
    { id: "formacao", label: t("resume.nav.education"), icon: <GraduationCap className="h-5 w-5" /> },
  ];

  function showResumeSection(sectionId: ViewOption) {
    setView(sectionId);
  }

  function renderTimelineText(item: string) {
    const urlMatch = item.match(/https?:\/\/\S+/);

    if (!urlMatch) {
      return item;
    }

    const url = urlMatch[0];
    const label = item.replace(url, "").trim();

    return (
      <>
        {label}{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dracula-cyan underline underline-offset-4 hover:text-dracula-secondary"
        >
          acessar
        </a>
      </>
    );
  }

  const aboutStats = [
    {
      borderClassName: "border-dracula-green/70",
      label: t("resume.about.stats.productivity.label"),
      textClassName: "text-dracula-green",
      value: t("resume.about.stats.productivity.value"),
    },
    {
      borderClassName: "border-dracula-cyan/70",
      label: t("resume.about.stats.performance.label"),
      textClassName: "text-dracula-cyan",
      value: t("resume.about.stats.performance.value"),
    },
    {
      borderClassName: "border-dracula-primary",
      label: t("resume.about.stats.process.label"),
      textClassName: "text-dracula-primary",
      value: t("resume.about.stats.process.value"),
    },
  ];

  const experiences = [
    {
      activities: t("resume.experience.items.backend.activities", { returnObjects: true }) as string[],
      bulletClassName: "bg-dracula-green shadow-[0_0_8px_var(--dracula-green)]",
      company: t("resume.experience.items.backend.company"),
      period: t("resume.experience.items.backend.period"),
      role: t("resume.experience.items.backend.role"),
      stack: t("resume.experience.items.backend.stack"),
    },
    {
      activities: t("resume.experience.items.frontend.activities", { returnObjects: true }) as string[],
      bulletClassName: "bg-dracula-green/50",
      company: t("resume.experience.items.frontend.company"),
      period: t("resume.experience.items.frontend.period"),
      role: t("resume.experience.items.frontend.role"),
      stack: t("resume.experience.items.frontend.stack"),
    },
    {
      activities: t("resume.experience.items.support.activities", { returnObjects: true }) as string[],
      bulletClassName: "bg-dracula-green/30",
      company: t("resume.experience.items.support.company"),
      period: t("resume.experience.items.support.period"),
      role: t("resume.experience.items.support.role"),
      stack: t("resume.experience.items.support.stack"),
    },
  ];

  const internationalExperience = {
    activities: t("resume.experience.international.activities", { returnObjects: true }) as string[],
    bulletClassName: "bg-dracula-secondary shadow-[0_0_8px_var(--dracula-secondary)]",
    company: t("resume.experience.international.company"),
    period: t("resume.experience.international.period"),
    role: t("resume.experience.international.role"),
    stack: t("resume.experience.international.stack"),
  };

  const educationItems = t("resume.education.items", { returnObjects: true }) as {
    date: string;
    link: string;
    subtitle: string;
    title: string;
  }[];

  return {
    aboutDescriptionKey,
    aboutExpertiseTextKey,
    aboutStats,
    backEndSkills: BackEndSkills,
    educationItems,
    experiences,
    frontEndSkills: FrontEndSkills,
    i18n,
    internationalExperience,
    libAndTechniques: LibAndTechniques,
    navItems,
    renderTimelineText,
    showResumeSection,
    t,
    view,
  };
}
