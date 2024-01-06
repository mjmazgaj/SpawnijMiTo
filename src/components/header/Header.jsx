import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>Name Name</h1>
        <h5 className="text-light">Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>

      <HeaderSocial />
    </header>
  );
};

export default Header;
