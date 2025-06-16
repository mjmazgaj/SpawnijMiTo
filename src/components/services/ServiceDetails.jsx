import React, { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";

import "./services.css";

import countertopMainImage from "./images/countertop_main.jpg";
import countertopPalet1Image from "./images/countertop-palet_1.jpeg";
import countertopPalet2Image from "./images/countertop-palet_2.jpeg";
import countertopPalet3Image from "./images/countertop-palet_3.jpg";
import constructionMainImage from "./images/construction_main.jpg";

const ServiceDetails = () => {
  const { t } = useTranslation();

  return (
    <section id="service-details">
      <h2 className="service-details__details-title">
        {t(`service-details.title`)}
      </h2>
      <div className="service-details__desctiption-container">
        <img
          className="service-details__desctiption-image"
          src={countertopMainImage}
        />
        <div className="service-details__desctiption-text">
          <h3 className="service-details__desctiption-title">
            {t("service-details.countertopTitle")}
          </h3>
          <Trans i18nKey="service-details.countertopDescription" />
        </div>
      </div>
      <div className="service-details__desctiption-container">
        <div className="service-details__desctiption-image">
          <img src={countertopPalet1Image} />
          <img src={countertopPalet2Image} />
        </div>
        <div className="service-details__desctiption-text">
          <h3 className="service-details__desctiption-title">
            {t("service-details.woodCountertopTitle")}
          </h3>
          <Trans i18nKey="service-details.woodCountertopDescription" />
        </div>
      </div>
      <div className="service-details__desctiption-container">
        <img
          className="service-details__desctiption-image"
          src={countertopPalet3Image}
        />
        <div className="service-details__desctiption-text">
          <h3 className="service-details__desctiption-title">
            {t("service-details.laminateCountertopTitle")}
          </h3>
          <Trans i18nKey="service-details.laminateCountertopDescription" />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
