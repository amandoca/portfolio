import { AnimatePresence, motion } from "motion/react";
import { useResume } from "@/hooks";
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  ResumeNavigation,
  SkillsSection,
} from "./components";

const Resume = () => {
  const {
    aboutDescriptionKey,
    aboutExpertiseTextKey,
    aboutStats,
    backEndSkills,
    educationItems,
    experiences,
    frontEndSkills,
    i18n,
    internationalExperience,
    libAndTechniques,
    navItems,
    renderTimelineText,
    showResumeSection,
    softSkills,
    t,
    view,
  } = useResume();

  return (
    <main className="flex flex-col justify-center items-center p-6 md:p-8 bg-background text-foreground min-h-screen transition-colors duration-500">
      <div className="flex flex-col xl:flex-row items-start gap-10 md:gap-20 max-w-6xl w-full">
        <ResumeNavigation
          navItems={navItems}
          titleHighlight={t("resume.title_highlight")}
          titleMain={t("resume.title_main")}
          view={view}
          onSelectSection={showResumeSection}
        />

        <div className="flex-1 w-full bg-card p-6 sm:p-8 rounded-xl border border-border min-h-125 transition-colors">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {view === "sobre-mim" && (
                <AboutSection
                  descriptionKey={aboutDescriptionKey}
                  expertiseTextKey={aboutExpertiseTextKey}
                  expertiseTitle={t("resume.about.expertise.title")}
                  language={i18n.language}
                  role={t("resume.about.role")}
                  softSkills={softSkills}
                  softSkillsTitle={t("resume.about.soft_skills.title")}
                  stats={aboutStats}
                  title={t("resume.about.title")}
                />
              )}

              {view === "experiencia" && (
                <ExperienceSection
                  experiences={experiences}
                  internationalExperience={internationalExperience}
                  internationalTitle={t("resume.experience.international.title")}
                  renderTimelineText={renderTimelineText}
                  title={t("resume.experience.title")}
                />
              )}

              {view === "habilidades" && (
                <SkillsSection
                  backendSkills={backEndSkills}
                  backendTitle={t("resume.skills.backend")}
                  ecosystemTitle={t("resume.skills.ecosystem")}
                  frontendSkills={frontEndSkills}
                  frontendTitle={t("resume.skills.frontend")}
                  libAndTechniques={libAndTechniques}
                  subtitle={t("resume.skills.subtitle")}
                  title={t("resume.skills.title")}
                />
              )}

              {view === "formacao" && (
                <EducationSection
                  educationItems={educationItems}
                  title={t("resume.education.title")}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Resume;
