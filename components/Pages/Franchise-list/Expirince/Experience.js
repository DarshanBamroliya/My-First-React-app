import React from "react";
import { Container } from "react-bootstrap";
// import Swiper from "swiper";
import { Pagination } from "swiper/modules";
// import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "./Experience.css";
import CustomSlider from "C:/Users/Darshan/Desktop/REACT/franchisewala/src/widgets/custom_slider/custom_slider.js";

const Experience = () => {

  const Experienceslider = [
    {
      img: "./frenchiseist-img/anant-sharma.svg",
      title: "Adv. Anant Sharma",
      text: "Franchising is a contractual relationship between a licensor and a licensee that allows the business owner to use the licensor's brand and method of doing business to distribute products or services to consumers. ",
    },
    {
      img: "./frenchiseist-img/anant-sharma.svg",
      title: "Adv. Anant Sharma",
      text: "Franchising is a contractual relationship between a licensor and a licensee that allows the business owner to use the licensor's brand and method of doing business to distribute products or services to consumers. ",
    },
    {
      img: "./frenchiseist-img/anant-sharma.svg",
      title: "Adv. Anant Sharma",
      text: "Franchising is a contractual relationship between a licensor and a licensee that allows the business owner to use the licensor's brand and method of doing business to distribute products or services to consumers. ",
    },
    {
      img: "./frenchiseist-img/anant-sharma.svg",
      title: "Adv. Anant Sharma",
      text: "Franchising is a contractual relationship between a licensor and a licensee that allows the business owner to use the licensor's brand and method of doing business to distribute products or services to consumers. ",
    },
    {
      img: "./frenchiseist-img/anant-sharma.svg",
      title: "Adv. Anant Sharma",
      text: "Franchising is a contractual relationship between a licensor and a licensee that allows the business owner to use the licensor's brand and method of doing business to distribute products or services to consumers. ",
    },
    {
      img: "./frenchiseist-img/anant-sharma.svg",
      title: "Adv. Anant Sharma",
      text: "Franchising is a contractual relationship between a licensor and a licensee that allows the business owner to use the licensor's brand and method of doing business to distribute products or services to consumers. ",
    },
  ];
  return (
    <section className="franchisor-main">
      <Container>
        <div className="franchisor-heading">
          <h1>Franchisor Experience</h1>
        </div>
      </Container>

      <div className="franchisor-bg">
        <div className="franchisor-swiper">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination]}
            className="franchisor-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1025: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1160: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <div className="swiper-wrapper">
                <div className="franchisor-items-slider">
                  {Experienceslider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CustomSlider
                                customClasses="franchisor-slide"
                                img={item.img}
                                sliderHeading={item.title}
                                sliderText={item.text}showslidertext={true}
                            />
                        </SwiperSlide>
                    ))}
                </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Experience;