import "./testimonials.min.css";
import { RxAvatar } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const { t } = useTranslation();
  const reviews = t("testimonials.reviews", { returnObjects: true });

  return (
    <section id="testimonials">
      <h5>{t("testimonials.subtitle")}</h5>
      <h2>{t("testimonials.title")}</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {reviews.map(({ id, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__review-container">
                <div>
                  <RxAvatar className="client__review-icon" />
                </div>
                <div className="client__review-text">
                  <h4 className="client__review-name">{t("testimonials.clientName")}</h4>
                  <p>{review}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
