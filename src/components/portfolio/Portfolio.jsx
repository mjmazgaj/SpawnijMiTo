import React, { useState, useEffect } from "react";
import "./portfolio.min.css";

import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const importAll = (r) => r.keys().map(r);

      const images = importAll(require.context("../../assets/portfolio", true, /.jpg$/));

      const productsData = await Promise.all(
        images.map(async (image, index) => {
          const title = t(`portfolio.item${index+1}.title`);
          const description = t(`portfolio.item${index+1}.description`);

          return {
            id: index + 1,
            image,
            title,
            description,
          };
        })
      );

      setProducts(productsData);
    };

    fetchProducts();
  }, [t]);

  return (
    <section id="portfolio">
      <h5>{t("portfolio.portfolioSubTitle")}</h5>
      <h2>{t("portfolio.portfolioTitle")}</h2>
      <div className="container portfolio__container">
        {products.map(({ id, image, title, description }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
