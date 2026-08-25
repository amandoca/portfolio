import { Gamepad2, LoaderCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui";
import { useQaPartner } from "@/hooks";

const QaPartnerCard = () => {
  const { fetchRandomQaPartner, hasRequestError, isLoadingQaPartner, qaPartner, t } = useQaPartner();

  return (
    <section className="w-full" aria-labelledby="qa-partner-title">
      <div className="grid overflow-hidden rounded-2xl bg-[#1d1d25] shadow-2xl md:grid-cols-[0.9fr_1fr]">
        <div className="flex flex-col justify-center gap-6 bg-[#202027] p-6 sm:p-8 lg:p-10">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-dracula-green">
              {t("qa_partner.eyebrow")}
            </p>
            <h2 id="qa-partner-title" className="text-2xl font-bold text-dracula-cyan sm:text-3xl">
              {t("qa_partner.title")}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("qa_partner.description")}
            </p>
          </div>

          <Button
            type="button"
            className="w-fit rounded-xl bg-dracula-green px-5 font-bold text-background hover:bg-dracula-green hover:text-background"
            disabled={isLoadingQaPartner}
            onClick={fetchRandomQaPartner}
          >
            {isLoadingQaPartner && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
            {isLoadingQaPartner ? t("qa_partner.loading") : t("qa_partner.button")}
          </Button>

          {hasRequestError && (
            <p className="rounded-md border border-dracula-red/50 bg-dracula-red/10 px-4 py-3 text-sm text-dracula-red">
              {t("qa_partner.error")}
            </p>
          )}
        </div>

        <div className="relative min-h-88 overflow-hidden bg-[#181820] p-5 sm:p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(184,166,255,0.14),transparent_32%),radial-gradient(circle_at_90%_85%,rgba(146,215,232,0.12),transparent_36%)]" />
          <div className="relative flex h-full flex-col justify-between rounded-2xl bg-[#101016] p-5 shadow-inner ring-1 ring-white/10">
            {qaPartner ? (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-dracula-primary">
                      {t("qa_partner.result_label")}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">{qaPartner.name}</h3>
                  </div>
                  <span className="rounded-full bg-dracula-cyan/15 px-3 py-1 text-xs font-bold text-dracula-cyan">
                    #{qaPartner.id}
                  </span>
                </div>

                <div className="my-4 flex justify-center">
                  <img
                    src={qaPartner.imageUrl}
                    alt={t("qa_partner.image_alt", { name: qaPartner.name })}
                    className="h-36 w-36 object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.35)] sm:h-44 sm:w-44"
                    loading="lazy"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {qaPartner.skills.map((qaPartnerSkill) => (
                    <div key={qaPartnerSkill.label}>
                      <div className="mb-1 flex items-center justify-between gap-3 text-xs">
                        <span className="text-muted-foreground">{qaPartnerSkill.label}</span>
                        <span className="font-bold text-dracula-green">{qaPartnerSkill.value}</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-dracula-green to-dracula-cyan" style={{ width: qaPartnerSkill.progressWidth }} />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-5 grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-dracula-primary/25 to-dracula-cyan/20 text-dracula-primary shadow-[0_16px_35px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
                  <Gamepad2 className="h-12 w-12" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t("qa_partner.empty_title")}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {t("qa_partner.empty_description")}
                </p>
                <div className="mt-6 flex gap-2" aria-hidden="true">
                  <span className="rounded-full bg-dracula-green/15 p-2 text-dracula-green"><ShieldCheck className="h-4 w-4" /></span>
                  <span className="rounded-full bg-dracula-primary/15 p-2 text-dracula-primary"><Sparkles className="h-4 w-4" /></span>
                  <span className="rounded-full bg-dracula-cyan/15 p-2 text-dracula-cyan"><Gamepad2 className="h-4 w-4" /></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QaPartnerCard;
