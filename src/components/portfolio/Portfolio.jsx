import "./portfolio.css";
import IMG1 from "../../assets/portfolio/portfolio1.jpg";
import IMG2 from "../../assets/portfolio/portfolio2.jpg";
import IMG3 from "../../assets/portfolio/portfolio3.jpg";
import IMG4 from "../../assets/portfolio/portfolio4.jpg";
import IMG5 from "../../assets/portfolio/portfolio5.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Stolik Hi-fi",
    description: "Stalowa konstrukcja z profilu 40x40 i 40x30 malowana proszkowo na kolor czarny mat drobna struktura. Blaty dębowe grubości 30 mm z niskimi kolcami i podkładkami w kolorze złotym."
  },
  {
    id: 2,
    image: IMG2,
    title: "Regał pod sprzęt audio",
    description: "Blaty wykonane z drewna dębowego, olejowane na kolor bezbarwny. Konstrukcja malowana proszkowo kolor czarny mat drobna struktura. Kolce koloru czarnego z czarnymi podkładkami"
  },
  {
    id: 3,
    image: IMG3,
    title: "Kolce antywibracyjne",
    description: "W większości naszych produktów stosujemy kolce antywibracyjne, które redukują przenoszenie drgań pomiędzy podłożem a urządzeniami."
  },
  {
    id: 4,
    image: IMG4,
    title: "Szafka Rtv w stylu industrialnym",
    description: "Prawie 50 letni foszt dębowy olejowoskowany.Ubytki, sęki wypełnione czarna szpachlą do drewna. Nogi wykonane z profilu zamkniętego i siatki ciągnionej zabezpieczone lakierem bezbarwnym."
  },
  {
    id: 5,
    image: IMG5,
    title: "Fotel industrialny",
    description: "Prosta lekka konstrukcja, nowoczesny design, grube poduchy plamoodporne, konstrukcja malowana proszkowo"
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Obejrzyj nasze</h5>
      <h2>Realizacje</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, description}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
