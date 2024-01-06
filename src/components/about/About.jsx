import "./about.css";
import ME from "../../assets/about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Dowiedz się więcej o</h5>
      <h2>SpawnijMiTo</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-description">
            <FiUsers className="about__icon" />
            <h5>Projekty</h5>
            <small>niepowtarzalne</small>
            <small>loft</small>
            <small>industrial</small>
            <small>stoliki Hi-fi</small>
          </div>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Obszar działania</h5>
              <small>Cała Polska</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Zamówienia</h5>
              <small>produkt rzemieślniczy</small>
              <small>wycena inwidualna</small>
              <small>wysoki standard</small>
            </article>
            <article className="about__card about__card-description">
              <FiUsers className="about__icon" />
              <h5>Projekty</h5>
              <small>loft</small>
              <small>industrial</small>
              <small>stoliki Hi-fi</small>
            </article>
          </div>

          <p>
            Jesteśmy polskim producentem mebli industrialnych, Loft, oraz
            stolików typu Hi-fi.
          </p>
          <p>Wymyśl swoją konstrukcje, a my zajmiemy się resztą!</p>
          <a href="#contact" className="btn btn-primary">
            Napisz do nas
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
