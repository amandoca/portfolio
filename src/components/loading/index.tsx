import { Spinner } from "@/components/ui";
import { useTranslate } from "@/hooks";

const LoadingPage = () => {
  const { t } = useTranslate();

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen gap-4"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <Spinner aria-hidden="true" />

      <p className="text-dracula-secondary text-sm">
        <span className="sr-only">{t("loading.sr_text")}</span>
        <span aria-hidden="true">
          {t("loading.visible_text")}
          <span className="loading-dot">.</span>
          <span className="loading-dot animation-delay-200">.</span>
          <span className="loading-dot animation-delay-400">.</span>
        </span>
      </p>
    </div>
  );
};

export default LoadingPage;
