import { AnimatePresence, motion } from "motion/react";
import { FaMugHot } from "react-icons/fa";
import { useCoffeeWidget } from "@/hooks";

const CoffeeWidget = () => {
  const { buttonLabel, isMessageVisible, message, showRandomCoffeeMessage } = useCoffeeWidget();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isMessageVisible && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative max-w-64 rounded-md border border-dracula-secondary/50 bg-dracula-current/95 px-4 py-3 text-sm leading-relaxed text-foreground shadow-[0_0_18px_rgba(255,121,198,0.2)] backdrop-blur-md"
            role="status"
          >
            {message}
            <span className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 border-b border-r border-dracula-secondary/50 bg-dracula-current" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-dracula-secondary/60 bg-dracula-current/95 text-dracula-green shadow-[0_0_14px_rgba(80,250,123,0.18)] backdrop-blur-md transition-colors hover:border-dracula-green hover:bg-dracula-green/15 hover:shadow-[0_0_24px_rgba(80,250,123,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dracula-green focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={buttonLabel}
        onClick={showRandomCoffeeMessage}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.92, rotate: -4 }}
        transition={{ type: "spring", stiffness: 420, damping: 18 }}
      >
        <span className="absolute -top-4 left-1/2 h-4 w-6 -translate-x-1/2 opacity-50 transition-opacity group-hover:opacity-100" aria-hidden="true">
          <span className="coffee-steam left-0" />
          <span className="coffee-steam left-2 animation-delay-200" />
          <span className="coffee-steam left-4 animation-delay-400" />
        </span>

        <span className="absolute inset-2 rounded-full bg-background/90 transition-colors group-hover:bg-background" aria-hidden="true" />
        <motion.span
          className="relative flex h-9 w-9 items-center justify-center rounded-full bg-dracula-orange/10 text-dracula-orange transition-colors group-hover:bg-dracula-orange/20 group-hover:text-dracula-orange"
          aria-hidden="true"
          animate={isMessageVisible ? { rotate: [0, -8, 8, 0] } : { rotate: 0 }}
          transition={{ duration: 0.35 }}
        >
          <FaMugHot className="h-5 w-5" />
        </motion.span>
      </motion.button>
    </div>
  );
};

export default CoffeeWidget;
