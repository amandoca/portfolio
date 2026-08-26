import { useEffect, useState } from "react";
import { FaLinux } from "react-icons/fa";
import { useTranslate } from "@/hooks";
import { cn } from "@/lib/utils";

const LOADING_EXIT_TRANSITION_START_IN_MS = 2200;

const LoadingPage = () => {
  const { t } = useTranslate();
  const terminalLines = t("loading.terminal_lines", { returnObjects: true }) as string[];
  const [isFinishingLoading, setIsFinishingLoading] = useState(false);

  useEffect(() => {
    const exitTransitionTimeout = window.setTimeout(() => {
      setIsFinishingLoading(true);
    }, LOADING_EXIT_TRANSITION_START_IN_MS);

    return () => {
      window.clearTimeout(exitTransitionTimeout);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex h-screen w-full items-center justify-center bg-background p-6 transition-opacity duration-500",
        isFinishingLoading && "opacity-0"
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="sr-only">{t("loading.sr_text")}</span>

      <div
        className={cn(
          "w-full max-w-xl overflow-hidden rounded-lg border border-border bg-[#2c001e] shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition-transform duration-500",
          isFinishingLoading && "scale-98"
        )}
        aria-hidden="true"
      >
        <div className="relative flex items-center border-b border-white/10 bg-[#3b0a2a] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>

          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
            <FaLinux className="h-4 w-4 text-white/80" aria-hidden="true" />
            <span className="whitespace-nowrap text-xs font-bold text-white/75">amanda@portfolio: ~</span>
          </div>
        </div>

        <div className="space-y-3 px-5 py-5 font-mono text-sm text-[#f7f7f7]">
          {terminalLines.map((terminalLine) => (
            <p key={terminalLine}>
              <span className="text-dracula-green">amanda@ubuntu</span>
              <span className="text-white">:</span>
              <span className="text-dracula-cyan">~/portfolio</span>
              <span className="text-white">$ </span>
              <span>{terminalLine}</span>
            </p>
          ))}

          <p>
            <span className="text-dracula-green">amanda@ubuntu</span>
            <span className="text-white">:</span>
            <span className="text-dracula-cyan">~/portfolio</span>
            <span className="text-white">$ </span>
            <span>{t("loading.visible_text")}</span>
            <span className="loading-dot">.</span>
            <span className="loading-dot animation-delay-200">.</span>
            <span className="loading-dot animation-delay-400">.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
