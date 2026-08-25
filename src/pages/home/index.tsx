import { Button } from "@/components/ui";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import profileImg from "/assets/amanda-profile.jpg";
import { ProfileImage, QaPartnerCard } from "@/components";
import { Trans } from "react-i18next";
import { Gamepad2, X } from "lucide-react";
import { useHome } from "@/hooks";

const Home = () => {
    const { changeQaPartnerCardVisibility, i18n, isQaPartnerCardVisible, t } = useHome();

    return ( 
        <main className="flex flex-col items-center justify-center p-6 md:p-8 bg-background text-foreground min-h-screen transition-colors duration-500">
            <section aria-labelledby="hero-title">
                <div className="flex flex-col-reverse xl:flex-row items-center gap-10 md:gap-25">
                    <div className="flex flex-col justify-center flex-1 text-center xl:text-left">
                        <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            {t("home.greeting")} <br />
                            <span className="text-dracula-secondary">Amanda</span>
                        </h1>
                        <h2 className="text-lg md:text-xl text-muted-foreground leading-relaxed italic text-balance max-w-2xl mx-auto md:mx-0">
                            <Trans 
                                key={i18n.language}
                                i18nKey="home.description" 
                                components={{ 1: <strong className="text-dracula-primary" /> }}
                            />
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
                                <Dialog.Root open={isQaPartnerCardVisible} onOpenChange={changeQaPartnerCardVisibility}>
                                    <Dialog.Trigger asChild>
                                        <Button
                                            type="button"
                                            className="bg-transparent rounded-full w-12 h-12 border-2 border-dracula-cyan text-dracula-cyan hover:bg-dracula-cyan hover:text-background transition-all"
                                            aria-label={t("qa_partner.toggle_button_aria")}
                                        >
                                            <Gamepad2 className="w-6 h-6" aria-hidden="true" />
                                        </Button>
                                    </Dialog.Trigger>
                                    <Dialog.Portal>
                                        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
                                        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100vw-2rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl bg-[#15151b] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.7)] outline-none ring-1 ring-white/10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 sm:p-5">
                                            <Dialog.Title className="sr-only">{t("qa_partner.title")}</Dialog.Title>
                                            <Dialog.Description className="sr-only">{t("qa_partner.description")}</Dialog.Description>
                                            <QaPartnerCard />
                                            <Dialog.Close className="absolute right-5 top-5 z-10 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-[#24242c] text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dracula-cyan">
                                                <X className="h-5 w-5" aria-hidden="true" />
                                                <span className="sr-only">{t("qa_partner.close_button")}</span>
                                            </Dialog.Close>
                                        </Dialog.Content>
                                    </Dialog.Portal>
                                </Dialog.Root>
                            </div>
                        </div>
                    </div>
                    <div className="scale-110 mt-6 md:scale-130">
                        <ProfileImage src={profileImg} alt="Amanda" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
