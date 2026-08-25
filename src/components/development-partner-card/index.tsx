import { Gamepad2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { useDevelopmentPartner } from "@/hooks";

const DevelopmentPartnerCard = () => {
  const { fetchRandomDevelopmentPartner, hasRequestError, isLoadingDevelopmentPartner, developmentPartner, t } = useDevelopmentPartner();

  return (
    <section className="w-full" aria-labelledby="development-partner-title">
      <div className="grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-[0.9fr_1fr]">
        <div className="flex flex-col justify-center gap-6 bg-background/40 p-6 sm:p-8 lg:p-10">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-dracula-green">
              {t("development_partner.eyebrow")}
            </p>
            <h2 id="development-partner-title" className="text-2xl font-bold text-dracula-cyan sm:text-3xl">
              {t("development_partner.title")}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("development_partner.description")}
            </p>
          </div>

          <Button
            type="button"
            className="w-fit rounded-lg border border-dracula-green bg-transparent px-5 font-bold text-dracula-green hover:bg-dracula-green hover:text-background"
            disabled={isLoadingDevelopmentPartner}
            onClick={fetchRandomDevelopmentPartner}
          >
            {isLoadingDevelopmentPartner && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
            {isLoadingDevelopmentPartner ? t("development_partner.loading") : t("development_partner.button")}
          </Button>

          {hasRequestError && (
            <p className="rounded-md border border-dracula-red/50 bg-dracula-red/10 px-4 py-3 text-sm text-dracula-red">
              {t("development_partner.error")}
            </p>
          )}
        </div>

        <div className="relative min-h-88 overflow-hidden bg-dracula-current/25 p-5 sm:p-6">
          <div className="relative flex h-full flex-col justify-between rounded-xl border border-border bg-background/70 p-5">
            {developmentPartner ? (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-dracula-primary">
                      {t("development_partner.result_label")}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">{developmentPartner.name}</h3>
                  </div>
                  <span className="rounded-full bg-dracula-cyan/15 px-3 py-1 text-xs font-bold text-dracula-cyan">
                    #{developmentPartner.id}
                  </span>
                </div>

                <div className="my-4 flex justify-center">
                  <img
                    src={developmentPartner.imageUrl}
                    alt={t("development_partner.image_alt", { name: developmentPartner.name })}
                    className="h-36 w-36 object-contain sm:h-44 sm:w-44"
                    loading="lazy"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {developmentPartner.skills.map((developmentPartnerSkill) => (
                    <div key={developmentPartnerSkill.label}>
                      <div className="mb-1 flex items-center justify-between gap-3 text-xs">
                        <span className="text-muted-foreground">{developmentPartnerSkill.label}</span>
                        <span className="font-bold text-dracula-green">{developmentPartnerSkill.value}</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-dracula-green to-dracula-cyan" style={{ width: developmentPartnerSkill.progressWidth }} />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-5 grid h-20 w-20 place-items-center rounded-2xl border border-dracula-primary/35 bg-dracula-primary/10 text-dracula-primary">
                    <Gamepad2 className="h-12 w-12" aria-hidden="true" />
                  </div>
                <h3 className="text-xl font-bold text-foreground">{t("development_partner.empty_title")}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {t("development_partner.empty_description")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentPartnerCard;
