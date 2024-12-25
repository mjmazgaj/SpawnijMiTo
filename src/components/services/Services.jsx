import "./services.min.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="services">
      <h5>{t("services.subtitle")}</h5>
      <h2>{t("services.title")}</h2>

      <div className="container experience__container">
        <div className="experiance__item">
          <div className="experience__content">
            <div className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
              </div>
              <div>
                <h4>{t("services.project")}</h4>
                <small className="text-light">{t("services.projectDescription")}</small>
              </div>
            </div>
            <div className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
              </div>
              <div>
                <h4>{t("services.tables")}</h4>
                <small className="text-light">{t("services.tablesDescription")}</small>
              </div>
            </div>
            <div className="experience__details">
              <div>
                <BsPatchCheckFill className="experience__details-icon" />
              </div>
              <div>
                <h4>{t("services.structure")}</h4>
                <small className="text-light">{t("services.structureDescription")}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
