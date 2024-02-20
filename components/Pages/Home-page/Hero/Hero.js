import React from "react";
import './Hero.css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Hero = () => {

    const imgpath = [
        {
            img: "./homepage-img/hero-slider.png",
        },
        {
            img: "./homepage-img/hero-slider.png",
        },
        {
            img: "./homepage-img/hero-slider.png",
        },
    ];

    return (
        <div className="hero-swiper swiper">
            <Swiper navigation={true} modules={[Navigation]} className="swiper-wrapper">
                {imgpath.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide"><img src={item.img} alt={`Slide ${index}`} /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Hero;
