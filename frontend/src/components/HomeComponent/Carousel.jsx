import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../assets/css/Carousel.css";

import carouselimage1 from "../../assets/carouselimages/carouselimg1.png";
import carouselimage2 from "../../assets/carouselimages/carouselimg2.png";
import carouselimage3 from "../../assets/carouselimages/carouselimg3.png";

const CarouselData = [
  {
    image: carouselimage1,
    heading:"Transform ",
    text: "with cutting-edge technology and tailored IT services.",
  },
  {
    image: carouselimage2,
    heading:"modern ",

    text: "Secure, scalable, and cost-effective cloud solutions .",
  },
  {
    image: carouselimage3,
    text: "Keep your data safe with advanced security measures and proactive monitoring.",
    heading:"modern ",

  },
  {
    image: carouselimage1,
    heading:"Transform ",
    text: "with cutting-edge technology and tailored IT services.",
  },
  {
    image: carouselimage2,
    heading:"modern ",

    text: "Secure, scalable, and cost-effective cloud solutions .",
  },
  {
    image: carouselimage3,
    text: "Keep your data safe with advanced security measures and proactive monitoring.",
    heading:"modern ",

  }
];
export default function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-minicontainer">
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          threshold={8}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="custom-swiper"
        >
          {CarouselData.map((item, index) => (
            <SwiperSlide key={index} className="carousel-slide">
              <div className="carousel-div">
                <div className={`carousel-colorvidiv color-${index + 1}`}>
                  <div className="imgdiv">
                    <img
                      src={item.image}
                      alt={`Slide ${index + 1}`}
                      className="carousel-image"
                    />
                  </div>
                  <div className="textdiv">
                  <h5 className="carousel-heading">{item.heading}</h5>
                    <p className="carousel-text">{item.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

