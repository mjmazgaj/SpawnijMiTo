import "./header.css"
import LanguageSwitch from "../languageSwitch/LanguageSwitch";


const CTA = () => {
  return (
    <div className="cta">
        <a href="#portfolio" className="btn">Realizacje</a>
        <a href="#contact" className="btn btn-primary">Kontakt</a>
        <LanguageSwitch/>
    </div>
  )
}

export default CTA