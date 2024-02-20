import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'C:/Users/Darshan/Desktop/REACT/portfolio/node_modules/swiper/swiper-bundle.min.css';
import "./custom_slider.css";

const CustomSlider = ({ franchisesData, headingName, headingTxt }) => {
  return (
    <section className="high-category-sec mt-5 mb-5">
      <div className="container">
        <div className="high-category-main">
        <h1>{headingName}</h1>
          <p>{headingTxt}</p>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper mt-5"
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
          1025: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1160: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          1300: {
            slidesPerView: 3.5,
            spaceBetween: 50,
          },
        }}
      >
        {franchisesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="high-category-wrapp">
              <img src={item.imageSrc} alt={item.name} />
              <div className="mb-3">
                <h2>{item.name}</h2>
                <p>{item.priceRange}</p>
                <div className="high-category-rate d-flex align-items-center">
                  <div className="high-category-star-icon">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <span className="mx-3">{item.rating}/5</span>
                  <span>({item.totalReviews} total reviews)</span>
                </div>
                <p className="high-category-text">Total franchise - {item.totalFranchise}</p>
                <p className="high-category-text">HQ - {item.headquarters}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomSlider;
