import "./about.min.css";
import ME from "../../assets/about.jpg";
import { GrProjects } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import { RiPriceTag3Line } from "react-icons/ri";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h5>{t("about.subTitle")}</h5>
      <h2>{t("about.title")}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-description">
            <GrProjects className="about__icon" />
            <h5>{t("about.descriptionheader")}</h5>
            <small>{t("about.description1")}</small>
            <small>{t("about.description2")}</small>
            <small>{t("about.description3")}</small>
            <small>{t("about.description4")}</small>
          </div>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GrLocation className="about__icon" />
              <h5>{t("about.descriptionAreaHeader")}</h5>
              <small>{t("about.descriptionAreaText")}</small>
            </article>
            <article className="about__card">
              <RiPriceTag3Line className="about__icon" />
              <h5>{t("about.descriptionOrderHeader")}</h5>
              <small>{t("about.descriptionOrderText1")}</small>
              <small>{t("about.descriptionOrderText2")}</small>
              <small>{t("about.descriptionOrderText3")}</small>
            </article>
            <article className="about__card about__card-description">
              <GrProjects className="about__icon" />
              <h5>{t("about.descriptionProjectsHeader")}</h5>
              <small>{t("about.descriptionProjectsText1")}</small>
              <small>{t("about.descriptionProjectsText2")}</small>
              <small>{t("about.descriptionProjectsText3")}</small>
            </article>
          </div>

          <p>{t("about.descriptionText")}</p>
          <p>{t("about.descriptionText2")}</p>
          <a href="#contact" className="btn btn-primary">
            {t("about.contact")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
