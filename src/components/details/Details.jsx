import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./details.css";

const Details = () => {
  const { t } = useTranslation();
  const { folderId } = useParams();
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState([]);
  useEffect(() => {
    const fetchImages = () => {
      try {
        const context = require.context(
          "../../assets/portfolio",
          true,
          /Gallery\/.*\.jpg$/
        );

        const allPaths = context
          .keys()
          .filter((key) => key.includes(`${folderId}/Gallery`));

        const loadedImages = allPaths
          .filter((key) => !key.endsWith("main.jpg"))
          .map(context);

        const mainImage = allPaths.find((key) => key.endsWith("main.jpg"));

        const loadedMainImage = mainImage ? context(mainImage) : null;

        setImages(loadedImages);
        setMainImage(loadedMainImage);
      } catch (error) {
        console.error(`Błąd ładowania obrazów z folderu ${folderId}:`, error);
        setImages([]);
        setMainImage(null);
      }
    };

    fetchImages();
  }, [folderId]);

  return (
    <section id="details">
      <h2 className="details__details-title">
        {t(`portfolio.${folderId}.title`)}
      </h2>
      <div className="details__desctiption-container">
        <img className="details__desctiption-image" src={mainImage} />
        <div className="details__desctiption-text">
          <h3 className="details__desctiption-title">
            {t("portfolio.description")}
          </h3>
          <p>{t(`portfolio.${folderId}.description`)}</p>
        </div>
      </div>
      {images && images.length > 0 && (
        <div className="details__gallery-container">
          <h3 className="details__gallery-title">{t("portfolio.gallery")}</h3>
          <div className="details__gallery-images">
            {images.map((img, idx) => (
              <div className="details__gallery-item" key={idx}>
                <img src={img} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
