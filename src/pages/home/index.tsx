import { Button } from "@/components/ui";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import profileImg from "/assets/amanda-profile.jpg";
import { ProfileImage } from "@/components";
import { useHomeTypewriter } from "@/hooks";
import { cn } from "@/lib/utils";

const Home = () => {
    const { t, visibleSegments } = useHomeTypewriter();

    return ( 
        <main className="flex flex-col items-center justify-center p-6 md:p-8 bg-background text-foreground min-h-screen transition-colors duration-500">
            <section aria-labelledby="hero-title">
                <div className="flex flex-col-reverse xl:flex-row items-center gap-10 md:gap-25">
                    <div className="flex flex-col justify-center w-full xl:w-[640px] text-center xl:text-left">
                        <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            {t("home.greeting")} <br />
                            <span className="text-dracula-secondary">Amanda</span>
                        </h1>
                        <h2 className="min-h-24 max-w-2xl whitespace-pre-line text-lg md:text-xl text-muted-foreground leading-relaxed italic mx-auto md:mx-0">
                            {visibleSegments.map((visibleSegment, visibleSegmentIndex) => (
                                <span
                                    key={visibleSegmentIndex}
                                    className={cn(visibleSegment.isHighlighted && "font-bold text-dracula-primary")}
                                >
                                    {visibleSegment.text}
                                </span>
                            ))}
                            <span className="inline-block align-middle w-1 h-[1.1em] bg-current animate-terminal-blink" aria-hidden="true"/>
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 xl:justify-start">
                            <div className="flex gap-4">
                                <Button asChild className="bg-transparent rounded-full w-12 h-12 border-2 border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-background transition-all">
                                    <a href="https://www.linkedin.com/in/amandalopesdesouza/" target="_blank" rel="noopener noreferrer" aria-label={t("home.aria.linkedin")}>
                                        <LinkedInLogoIcon className="w-6 h-6" aria-hidden="true"/>
                                    </a>
                                </Button>
                                <Button asChild className="bg-transparent rounded-full w-12 h-12 border-2 border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-background transition-all">
                                    <a href="https://github.com/amandoca" target="_blank" rel="noopener noreferrer" aria-label={t("home.aria.github")}>
                                        <GitHubLogoIcon className="w-6 h-6" aria-hidden="true"/>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="shrink-0 scale-110 mt-6 md:scale-130">
                        <ProfileImage src={profileImg} alt="Amanda" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
