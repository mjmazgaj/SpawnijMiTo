import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Dropdown from 'react-bootstrap/Dropdown';

import "./languageSwitch.css"

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const supportedLanguages = ["pl", "en", "de"];
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    const initialLanguage = supportedLanguages.includes(savedLanguage)
      ? savedLanguage
      : "en";
    i18n.changeLanguage(initialLanguage);
    setCurrentLanguage(initialLanguage);
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setCurrentLanguage(lng);
  };

  return (
    <>
      <Dropdown className="local-bootstrap">
        <Dropdown.Toggle variant="success">
          {currentLanguage.toUpperCase()}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={()=> changeLanguage("pl")}>PL</Dropdown.Item>
          <Dropdown.Item onClick={()=> changeLanguage("en")}>EN</Dropdown.Item>
          <Dropdown.Item onClick={()=> changeLanguage("de")}>DE</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default LanguageSwitch;
