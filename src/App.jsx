import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Nav />
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </I18nextProvider>
    </>
  );
};

export default App;
