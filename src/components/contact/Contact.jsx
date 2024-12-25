import "./contact.min.css";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xxqnnwp",
      "template_gjyvcdt",
      form.current,
      "iqIYAX7TowFBAgJm3"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>{t("contact.interested")}</h5>
      <h2>{t("contact.title")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaFacebookF className="contact__option-icon" />
            <h4>{t("contact.facebook")}</h4>
            <h5>{t("contact.facebookName")}</h5>
            <a href="https://www.facebook.com/people/Spawnijmito/100094208785511/" target="_blank">
              {t("contact.facebookLink")}
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>{t("contact.email")}</h4>
            <h5>{t("contact.emailAddress")}</h5>
            <a href="mailto:spawnijmito@gmail.com" target="_blank">
              {t("contact.emailLink")}
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>{t("contact.messenger")}</h4>
            <h5>{t("contact.messengerName")}</h5>
            <a href="https://m.me/114186255065733" target="_blank">
              {t("contact.messengerLink")}
            </a>
          </article>
          <article className="contact__option">
            <IoCallOutline className="contact__option-icon" />
            <h4>{t("contact.phone")}</h4>
            <h5>{t("contact.phoneNumber")}</h5>
            <a href="tel:731854334">{t("contact.phoneLink")}</a>
          </article>
        </div>
        <div>
          <h4>{t("contact.formTitle")}</h4>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder={t("contact.formNamePlaceholder")}
              required
            />
            <input
              type="tel"
              name="telephone"
              placeholder={t("contact.formPhonePlaceholder")}
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder={t("contact.formMessagePlaceholder")}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              {t("contact.formSubmit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
