import { useTranslate } from "@/hooks";

const Footer = () => {

    const year = new Date().getFullYear();
    const { t } = useTranslate(); 

    return ( 
        <footer aria-label={t("footer.aria_label")} className="bg-dracula-bg text-dracula-text p-8 w-full text-center border-t border-dracula-current">
            <small className="text-sm text-dracula-text/60">
                © {year} Amanda Souza. {t("footer.rights")}
            </small>
        </footer> 
    );
}
 
export default Footer;
