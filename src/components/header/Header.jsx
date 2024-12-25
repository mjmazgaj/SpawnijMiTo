import "./header.min.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <HeaderSocial />
      <CTA />

      <div className="container header__container">
        <div className="header__logo">
          <h1 className="header__logo-first-line">{t("header.logoFirstLine")}</h1>
          <h1 className="header__logo-second-line">{t("header.logoSecondLine")}</h1>
        </div>
        <h5 className="text-light">{t("header.subtitle")}</h5>
      </div>
    </header>
  );
};

export default Header;
