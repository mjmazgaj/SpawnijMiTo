import "./footer.min.css";
import { FaFacebookF } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <a href="#" className="footer__logo">{t("footer.logo")}</a>
      <ul className="permalinks">
        <li><a href="#">{t("footer.home")}</a></li>
        <li><a href="#about">{t("footer.about")}</a></li>
        <li><a href="#services">{t("footer.services")}</a></li>
        <li><a href="#portfolio">{t("footer.portfolio")}</a></li>
        <li><a href="#testimonials">{t("footer.testimonials")}</a></li>
        <li><a href="#contact">{t("footer.contact")}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://m.facebook.com/profile.php?id=100094208785511&_rdr"><FaFacebookF /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bainar ET. {t("footer.copyright")}</small>
      </div>
    </footer>
  );
};

export default Footer;
