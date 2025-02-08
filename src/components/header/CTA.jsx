import "./header.css"
import LanguageSwitch from "../languageSwitch/LanguageSwitch";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div className="cta">
        <a href="#portfolio" className="btn">{t("cta.portfolio")}</a>
        <a href="#contact" className="btn btn-primary">{t("cta.contact")}</a>
        <LanguageSwitch/>
    </div>
  )
}

export default CTA