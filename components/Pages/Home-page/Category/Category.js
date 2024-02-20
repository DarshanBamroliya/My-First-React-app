import React from "react";
import { Container, Row } from "react-bootstrap";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "C:/Users/Darshan/Desktop/REACT/franchisewala/node_modules/swiper/swiper.css";
import "swiper/css/pagination";
import "./Category.css";

const Category = () => {
    const categorysaider = [
        {
            title: "Food",
            description:
                "Provides clarity to all stakeholders including enforcement agencies",
            img: "./catagoey-img/food-vector.svg",
        },
        {
            title: "Food",
            description:
                "Provides clarity to all stakeholders including enforcement agencies",
            img: "./catagoey-img/autonomous-car.svg",
        },
        {
            title: "Food",
            description:
                "Provides clarity to all stakeholders including enforcement agencies",
            img: "./catagoey-img/star.svg",
        },
        {
            title: "Food",
            description:
                "Provides clarity to all stakeholders including enforcement agencies",
                img: "./catagoey-img/computer.svg",
        },
        {
            title: "Food",
            description:
                "Provides clarity to all stakeholders including enforcement agencies",
                img: "./catagoey-img/fitness.svg",
        },
        {
            title: "Food",
            description:
                "Provides clarity to all stakeholders including enforcement agencies",
                img: "./catagoey-img/education.svg",
        },
        {
            title: "Food",
            description:
                "Provides clarity to all stakeholders including enforcement agencies",
                img: "./catagoey-img/business.svg",
        },
        {
            title: "Food",
            description:
                "Provides clarity to all stakeholders including enforcement agencies",
                img: "./catagoey-img/food-vector.svg",
        },
        {
            title: "Food",
            description:
                "Provides clarity to all stakeholders including enforcement agencies",
                img: "./catagoey-img/food-vector.svg",
        },
    ];
    return (
        <section className="category-sec ">
            <Container className="pt-5 pb-md-5">
                <div className="category-main pt-lg-5">
                    <Row className=" pt-md-4">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 category-txt">
                            <h2>Category on Franchisewale.in</h2>
                            <p>
                                A franchise is a business whereby the owner licenses its
                                operations—along with its products,branding, and knowledge in
                                exchange for a franchise fee.
                            </p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 category-btn">
                            <button>
                                All Categories<i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </Row>
                </div>
            </Container>
            <Container className="category-bg">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="category-swipern"
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
                    <div className="category-swipern swiper">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            {categorysaider.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="category-items-slider">
                                        <div className="category-slide">
                                            <div className="category-slide-img-main"> 
                                                <img src={item.img} className="category-slide-img" />
                                            </div>
                                            <h3 className="mt-5">{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Swiper>
            </Container>
        </section>
    );
};

export default Category;
