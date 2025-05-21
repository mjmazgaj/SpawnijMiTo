import { useState, useEffect } from "react";
import "./portfolio.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FaCircleRight } from "react-icons/fa6";

const Portfolio = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClick = (folderId) => {
    window.scrollTo(0, 0);
    navigate(`/gallery/${folderId}`);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const importAll = (r) =>
        r
          .keys()
          .filter((key) => key.endsWith("/square.jpg"))
          .map((key) => ({
            image: r(key),
            path: key,
          }));

      const context = require.context(
        "../../assets/portfolio",
        true,
        /square\.jpg$/
      );
      const imagesWithPaths = importAll(context);

      const productsData = await Promise.all(
        imagesWithPaths.map(async ({ image, path }, index) => {
          const folderName = path.split("/")[1];

          const title = t(`portfolio.${folderName}.title`);
          const description = t(`portfolio.${folderName}.shortDescription`);

          return {
            id: index + 1,
            image,
            title,
            description,
            key: folderName,
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
        {products.map(({ id, key, image, title, description }) => (
          <article id={id} key={key} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div
              className="portfolio__item-details"
              onClick={() => handleClick(key)}
            >
              <p>{t("portfolio.checkDetailsText")}</p>
              <FaCircleRight size={20} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
