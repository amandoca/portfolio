import * as Dialog from "@radix-ui/react-dialog";
import { Gamepad2, X } from "lucide-react";
import { Button } from "@/components/ui";
import { useDevelopmentPartnerWidget } from "@/hooks";
import { DevelopmentPartnerCard } from "@/components";

const DevelopmentPartnerWidget = () => {
  const { changeDevelopmentPartnerModalVisibility, isDevelopmentPartnerModalOpen, t } = useDevelopmentPartnerWidget();

  return (
    <Dialog.Root open={isDevelopmentPartnerModalOpen} onOpenChange={changeDevelopmentPartnerModalVisibility}>
      <Dialog.Trigger asChild>
        <Button
          type="button"
          className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full border border-dracula-cyan/70 bg-background/95 text-dracula-cyan shadow-[0_10px_28px_rgba(0,0,0,0.38)] backdrop-blur-md transition-colors hover:bg-dracula-cyan hover:text-background focus-visible:ring-2 focus-visible:ring-dracula-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={t("development_partner.toggle_button_aria")}
        >
          <Gamepad2 className="h-7 w-7" aria-hidden="true" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100vw-2rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-card p-4 pt-12 shadow-[0_18px_70px_rgba(0,0,0,0.62)] outline-none ring-1 ring-border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 sm:p-5 sm:pt-12">
          <Dialog.Title className="sr-only">{t("development_partner.title")}</Dialog.Title>
          <Dialog.Description className="sr-only">{t("development_partner.description")}</Dialog.Description>
          <DevelopmentPartnerCard />
          <Dialog.Close className="absolute right-4 top-4 z-10 grid h-8 w-8 cursor-pointer place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-dracula-cyan hover:text-dracula-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dracula-cyan">
            <X className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">{t("development_partner.close_button")}</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DevelopmentPartnerWidget;
