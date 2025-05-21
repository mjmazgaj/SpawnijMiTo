import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <Nav />
        <Contact />
        <Footer />
      </I18nextProvider>
    </>
  );
};

export default App;
