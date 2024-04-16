import "./portfolio.min.css";
import IMG1 from "../../assets/portfolio/portfolio1.jpg";
import IMG2 from "../../assets/portfolio/portfolio2.jpg";
import IMG3 from "../../assets/portfolio/portfolio3.jpg";
import IMG4 from "../../assets/portfolio/portfolio4.jpg";
import IMG9 from "../../assets/portfolio/portfolio9.jpg";
import IMG10 from "../../assets/portfolio/portfolio10.jpg";
import IMG11 from "../../assets/portfolio/portfolio11.jpg";
import IMG12 from "../../assets/portfolio/portfolio12.jpg";
import IMG13 from "../../assets/portfolio/portfolio13.jpg";
import IMG14 from "../../assets/portfolio/portfolio14.jpg";
import IMG15 from "../../assets/portfolio/portfolio15.jpg";
import IMG16 from "../../assets/portfolio/portfolio16.jpg";
import IMG17 from "../../assets/portfolio/portfolio17.jpg";
import IMG18 from "../../assets/portfolio/portfolio18.jpg";
import IMG20 from "../../assets/portfolio/portfolio20.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Stolik Hi-fi",
    description: "Solidna stalowa konstrukcja wykonana z profili stalowych 40x40 i 40x30, pomalowana proszkowo na matowy czarny kolor o drobnej strukturze. Blaty z dębu o grubości 30 mm, wyposażone w niskie kolce oraz podkładki w kolorze złota."
  },
  {
    id: 2,
    image: IMG2,
    title: "Stolik Rtv XXL",
    description: "Blaty wykonane z drewna dębowego, olejowane na kolor bezbarwny. Konstrukcja malowana proszkowo, kolor czarny mat o drobnej strukturze. Kolce koloru czarnego z czarnymi podkładkami."
  },
  {
    id: 3,
    image: IMG3,
    title: "Stolik Hi-fi krótki",
    description: "Wykonany z malowanej proszkowo stali oraz blatów dębowych w naturalnym kolorze. Całość uzupełniona o czarne kolce i czarne podkładki."
  },
  {
    id: 4,
    image: IMG4,
    title: "Regał pod sprzęt audio",
    description: "Wykonane z drewna dębowego blaty, delikatnie olejowane na bezbarwny odcień. Konstrukcja malowana proszkowo na matowy czarny kolor o drobnej strukturze. Kolce w kolorze czarnym z czarnymi podkładkami."
  },
  {
    id: 9,
    image: IMG9,
    title: "Kolce antywibracyjne",
    description: "Przy tworzeniu naszych produktów wykorzystujemy kolce antywibracyjne, które redukują przenoszenie drgań pomiędzy podłożem a urządzeniami."
  },
  {
    id: 10,
    image: IMG10,
    title: "Szafka Rtv w stylu industrialnym",
    description: "Szafka wykonana z prawie 50-letniego drewna dębowego, pokrytego warstwą olejowoskową. Nogi wykonane z profilu zamkniętego i siatki ciągnionej, zabezpieczone lakierem bezbarwnym."
  },
  {
    id: 11,
    image: IMG11,
    title: "Standy Podstawki głośnikowe",
    description: "Standy z wzmocnioną konstrukcją wykonane z profilu 40x30 malowane proszkowo czarny mat drobna struktura."
  },
  {
    id: 12,
    image: IMG12,
    title: "Stolik audio poziomowy",
    description: "Stolik wykonany z Profilu 40x30 malowanego proszkowo kolor czarny mat. Półki wykonane z płyty laminowanej w kolorze czarny mat."
  },
  {
    id: 13,
    image: IMG13,
    title: "Standy",
    description: "Standy wykonane z profilu 40x20 oraz drewna dębowego grubości 30 mm w kolorze wiśniowym."
  },
  {
    id: 14,
    image: IMG14,
    title: "Standy Stalowe",
    description: "Standy wykonane z profilu 40x30 oraz blachy stalowej grubości 5 mm."
  },
  {
    id: 15,
    image: IMG15,
    title: "Biurko nowoczesne",
    description: "Rama stalowa wykonana z profilu 50x30. Malowana proszkowo na kolor czarny mat drobna struktura. Blat wykonany z płyty laminowanej w kolorze Złoty dąb Craft."
  },
  {
    id: 16,
    image: IMG16,
    title: "Szafka Rtv audio",
    description: "Tym razem szafka na sprzęt w połączeniu czarnej stali i blatów z płyty laminowanej kolor Dąb złoty Craft."
  },
  {
    id: 17,
    image: IMG17,
    title: "Szafka z Barkiem",
    description: "Całość wykonana z profilu 30x30 i siatki karbowanej malowana proszkowo kolor czarny mat. W całości wypełniony siatką i wzmocnioną podłogą. Drzwiczki otwierane do góry na siłownikach i przygotowany uchwyt pod kłódkę."
  },
  {
    id: 18,
    image: IMG18,
    title: "Szafka na buty i ubrania",
    description: "Szafka wykonana z profilu siatki oraz płyty laminowanej w kolorze Złoty Dąb Craft."
  },
  {
    id: 20,
    image: IMG20,
    title: "Fotel industrialny",
    description: "Fotel o prostej, lekkiej konstrukcji i nowoczesnym designie. Posiada grube, plamoodporne poduchy oraz konstrukcję malowaną proszkowo, zapewniającą trwałość i wygodę."
  }
]

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
