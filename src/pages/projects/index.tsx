import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { ProjectCard } from "@/components";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useProjects } from '@/hooks';

const Projects = () => {
    const { projects, t } = useProjects();

    return (
        <section
            className="min-h-screen bg-background py-10 px-4 overflow-hidden"
            aria-labelledby="projects-title"
        >
            <div className="max-w-7xl mx-auto">
                <h1
                    id="projects-title"
                    className="text-4xl font-bold mb-6 text-center text-foreground"
                >
                    {t("projects.title_main")}{" "}
                    <span className="text-dracula-secondary">
                        {t("projects.title_highlight")}
                    </span>
                </h1>

                <div className="relative pb-16">
                    <Swiper
                        modules={[Navigation, A11y]}
                        slidesPerView={1}
                        spaceBetween={50}
                        simulateTouch={false}
                        navigation={{
                            prevEl: ".projects-carousel-button-prev",
                            nextEl: ".projects-carousel-button-next",
                        }}
                        a11y={{
                            prevSlideMessage: t("projects.carousel.prev"),
                            nextSlideMessage: t("projects.carousel.next"),
                            firstSlideMessage: t("projects.carousel.first"),
                            lastSlideMessage: t("projects.carousel.last"),
                        }}
                        role="region"
                        aria-roledescription={t("projects.carousel.role_description")}
                        aria-label={t("projects.carousel.aria_label")}
                        className="w-full custom-swiper"
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id} className="flex justify-center items-center px-2">
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        type="button"
                        className="projects-carousel-button-prev absolute bottom-0 left-1/2 z-10 flex h-11 w-11 -translate-x-14 cursor-pointer items-center justify-center rounded-full border border-dracula-cyan/60 bg-background/95 text-dracula-cyan transition-colors hover:bg-dracula-cyan hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dracula-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label={t("projects.carousel.prev")}
                    >
                        <ChevronLeft aria-hidden="true" className="h-6 w-6" />
                    </button>

                    <button
                        type="button"
                        className="projects-carousel-button-next absolute bottom-0 left-1/2 z-10 flex h-11 w-11 translate-x-3 cursor-pointer items-center justify-center rounded-full border border-dracula-cyan/60 bg-background/95 text-dracula-cyan transition-colors hover:bg-dracula-cyan hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dracula-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label={t("projects.carousel.next")}
                    >
                        <ChevronRight aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;
