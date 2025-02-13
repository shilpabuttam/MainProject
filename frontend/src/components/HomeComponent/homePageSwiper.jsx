import "../../assets/css/homepageswiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import swiperimage1 from "../../assets/images/swiperimg1.png";
import swiperimage2 from "../../assets/images/swiperimg2.png";
import swiperimage3 from "../../assets/images/swiperimg3.png";
import swiperimage4 from "../../assets/images/swiperimg4.png";
import swiperimage5 from "../../assets/images/swiperimg5.png";
import swiperimage6 from "../../assets/images/swiperimg6.png";

const swiperData = [
  { image: swiperimage1, text: "Transform your business with cutting-edge technology and tailored IT services." },
  { image: swiperimage2, text: "Secure, scalable, and cost-effective cloud solutions for modern enterprises." },
  { image: swiperimage3, text: "Keep your data safe with advanced security measures and proactive monitoring." },
  { image: swiperimage4, text: "Custom-built applications to enhance efficiency and drive innovation." },
  { image: swiperimage5, text: "Leverage AI-driven solutions for smarter business operations and growth." },
  { image: swiperimage6, text: "Expert guidance and round-the-clock support for seamless IT management." },
];

export default function Homepageswiper() {
  return (
    <div className="home-swiperdiv">
      <div className="home-miniswiperdiv">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            "@0.00": { slidesPerView: 1, spaceBetween: 10 },
            "@0.75": { slidesPerView: 2, spaceBetween: 20 },
            "@1.00": { slidesPerView: 3, spaceBetween: 40 },
            "@1.50": { slidesPerView: 4, spaceBetween: 50 },
          }}
        >
          {swiperData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="home-swiperslidediv">
                <div className="home-swiperimagediv">
                  <img className="home-swiperimage" src={item.image} alt={"slide"+index} />
                </div>
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}