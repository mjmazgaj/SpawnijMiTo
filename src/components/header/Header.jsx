import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <CTA />
      
      <div className="container header__container">
        <div className="header__logo">
          <h1 className="header__logo-first-line">SPAWNIJ</h1>
          <h1 className="header__logo-second-line">MiTo</h1>
        </div>
        <h5 className="text-light">Producent mebli loftowych</h5>
      </div>

      <HeaderSocial />
    </header>
  );
};

export default Header;
