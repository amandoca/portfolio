import { FaGithub } from "react-icons/fa";
import { ArrowRight, Braces } from "lucide-react"; 
import { motion } from "motion/react";
import { Badge } from "@/components/ui";
import { useTranslate, type ProjectProps } from "@/hooks";

export const ProjectCard = ({ project }: {project: ProjectProps} ) => {
    const { t } = useTranslate();
    const repositoryNameParts = project.githubUrl.split("/").filter(Boolean);
    const repositoryName = repositoryNameParts[repositoryNameParts.length - 1];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
             className="flex flex-col md:flex-row w-full bg-card shadow-2xl rounded-3xl overflow-hidden border border-border transition-all duration-300 hover:border-dracula-primary/40 p-4 sm:p-8 md:p-12 lg:p-16 gap-6 sm:gap-8 md:gap-16 min-h-fit md:min-h-150"
        > 
            <div
                className="group order-1 md:order-2 w-full md:w-1/2 h-55 sm:h-75 md:h-auto relative overflow-hidden rounded-2xl shadow-inner bg-dracula-current/40 border border-border"
                aria-label={t("projects.preview", { title: project.title })}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(146,215,232,0.18),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(184,166,255,0.16),transparent_28%),radial-gradient(circle_at_50%_85%,rgba(143,214,168,0.14),transparent_34%)]" />
                <div className="absolute inset-4 sm:inset-8 rounded-xl border border-dracula-primary/25 bg-background/55 backdrop-blur-sm p-4 sm:p-5 flex flex-col justify-between transition-transform duration-700 group-hover:scale-[1.02]">
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-dracula-red" />
                        <span className="h-3 w-3 rounded-full bg-dracula-orange" />
                        <span className="h-3 w-3 rounded-full bg-dracula-green" />
                    </div>
                    <div>
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-dracula-cyan mb-3">
                            github.com/amandoca/
                        </p>
                        <div className="flex items-center gap-3 text-foreground">
                            <Braces className="h-7 w-7 shrink-0 text-dracula-primary" aria-hidden="true" />
                            <p className="min-w-0 text-sm xs:text-base sm:text-2xl font-bold break-all leading-tight">
                                {repositoryName}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 opacity-80">
                        {project.tags.slice(0, 6).map((tag) => (
                            <span key={tag} className="h-2 rounded-full bg-dracula-primary/50" />
                        ))}
                    </div>
                </div>
                {project.liveUrl !== "" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hidden lg:block">
                        <div className="absolute inset-0 bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-dracula-cyan text-xl font-bold p-6 text-center tracking-widest uppercase">
                                {t("projects.accessProject")}
                            </p>
                        </div>
                    </a>
                )}
            </div>

            <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col">
                <div className="flex-1">
                    <h2 className="select-text text-2xl sm:text-3xl lg:text-4xl font-bold text-dracula-cyan mb-4">
                        {project.title}
                    </h2>
                     <div className="flex items-center gap-2 mb-6">
                        <Badge variant={project.status} className="text-[10px] uppercase tracking-wider">
                            {t(`projects.status.${project.status}`)}
                        </Badge>
                        {project.isPrivate && (
                            <Badge variant="draculaProps" className="text-[10px] uppercase tracking-wider">
                                {t("projects.private")}
                            </Badge>
                        )}
                    </div>
                    <p className="select-text text-sm sm:text-base mb-6 leading-relaxed max-w-prose">
                        {project.description}
                    </p>
                    
                    <div className="mb-8">
                        <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold mb-3 block">
                            {t("projects.usedTech")}
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <Badge key={tag} variant="draculaProps" className="select-text">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className=" w-fit flex items-center gap-3 px-6 py-3 bg-dracula-card font-bold rounded-lg transition-all border text-dracula-green border-dracula-green hover:bg-dracula-green hover:text-card active:scale-95 shadow-md text-sm sm:text-base"
                        aria-label={t("projects.viewGithub", { title: project.title })}
                    >
                        <FaGithub className="text-xl" /> {t("projects.github")}
                    </a>
                    
                    {project.liveUrl !== "" && (
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-fit flex items-center gap-3 px-6 py-3 bg-dracula-card font-bold rounded-lg transition-all border text-dracula-green border-dracula-green hover:bg-dracula-green hover:text-card active:scale-95 shadow-md text-sm sm:text-base"
                            aria-label={t("projects.accessLive", { title: project.title })}
                        >
                            {t("projects.liveDeploy")}<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
