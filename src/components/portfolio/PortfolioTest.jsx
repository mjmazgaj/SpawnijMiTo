import React, { useState, useEffect } from "react";
import "./portfolio.min.css";

const Portfolio = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const importAll = (r) => r.keys().map(r);

      const images = importAll(require.context("../../assets/products", true, /image\.jpg$/));
      const titles = importAll(require.context("../../assets/products", true, /title\.txt$/));
      const descriptions = importAll(require.context("../../assets/products", true, /description\.txt$/));

      const productsData = await Promise.all(
        images.map(async (image, index) => {
          const title = await fetch(titles[index]).then((res) => res.text());
          const description = await fetch(descriptions[index]).then((res) => res.text());

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
  }, []);

  return (
    <section id="portfolio">
      <h5>Obejrzyj nasze</h5>
      <h2>Realizacje</h2>

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
