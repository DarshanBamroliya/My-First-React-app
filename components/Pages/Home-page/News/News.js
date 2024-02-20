import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./News.css";
import CustomSlider from "C:/Users/Darshan/Desktop/REACT/franchisewala/src/widgets/custom_slider/custom_slider.js";
import { Container } from "react-bootstrap";

const TopNews = () => {
    const Topnews = [
        {
            img: "./homepage-img/apple-store.jpg",
            title: "Apple Store Franchise",
            description:
                "Apple's First Store In India Opens In Mumbai Apple opened its first official store in Mumbai, India. Located at the Jio World Drive mall in the Bandra Kurla Complex area, the store is the first of the two outlets Apple to open in India.",
            date: "20 Jan 23",
            viewicon: "\uF33E",
            view: "50M views",
        },
        {
            img: "./homepage-img/apple-store.jpg",
            title: "Apple Store Franchise",
            description:
                "Apple's First Store In India Opens In Mumbai Apple opened its first official store in Mumbai, India. Located at the Jio World Drive mall in the Bandra Kurla Complex area, the store is the first of the two outlets Apple to open in India.",
            date: "20 Jan 23",
            viewicon: "\uF33E",
            view: "50M views",
        },
        {
            img: "./homepage-img/apple-store.jpg",
            title: "Apple Store Franchise",
            description:
                "Apple's First Store In India Opens In Mumbai Apple opened its first official store in Mumbai, India. Located at the Jio World Drive mall in the Bandra Kurla Complex area, the store is the first of the two outlets Apple to open in India.",
            date: "20 Jan 23",
            viewicon: "\uF33E",
            view: "50M views",
        },
        {
            img: "./homepage-img/apple-store.jpg",
            title: "Apple Store Franchise",
            description:
                "Apple's First Store In India Opens In Mumbai Apple opened its first official store in Mumbai, India. Located at the Jio World Drive mall in the Bandra Kurla Complex area, the store is the first of the two outlets Apple to open in India.",
            date: "20 Jan 23",
            viewicon: "\uF33E",
            view: "50M views",
        },
        {
            img: "./homepage-img/apple-store.jpg",
            title: "Apple Store Franchise",
            description:
                "Apple's First Store In India Opens In Mumbai Apple opened its first official store in Mumbai, India. Located at the Jio World Drive mall in the Bandra Kurla Complex area, the store is the first of the two outlets Apple to open in India.",
            date: "20 Jan 23",
            viewicon: "\uF33E",
            view: "50M views",
        },
        {
            img: "./homepage-img/apple-store.jpg",
            title: "Apple Store Franchise",
            description:
                "Apple's First Store In India Opens In Mumbai Apple opened its first official store in Mumbai, India. Located at the Jio World Drive mall in the Bandra Kurla Complex area, the store is the first of the two outlets Apple to open in India.",
            date: "20 Jan 23",
            viewicon: "\uF33E",
            view: "50M views",
        },
    ];

    return (
        <section className="top-news mt-5 mb-5">
            <Container>
                <div className="top-news-main">
                    <h1>Top Articles & News</h1>
                    <p>
                        The latest franchise news is available here, updated every business
                        day. Click to read the franchise news articles and franchise
                        information.
                    </p>
                </div>
            </Container>

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
                    {Topnews.map((news, index) => (
                        <SwiperSlide key={index}>
                            <CustomSlider
                                customClasses="top-news-wrapp"
                                img={news.img}
                                sliderHeading={news.title}
                                sliderText={news.description}showslidertext={true}
                                customClass="d-flex justify-content-between"showslider={true}
                                sliderData={news.date}
                                viewIcon="bi bi-eye-fill"
                                sliderIcontxt={news.view}
                            />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </section>
    );
};

export default TopNews;
