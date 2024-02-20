import React from "react";
import { Container } from "react-bootstrap";
import "./Exclusive.css";

const Exclusive = () => {
    const ExclusiveList = [
        {
            color: "#FFFAF2",
            img: "./homepage-img/mba-chai.png",
            title: "MBA Chaiwala",
            description:
                "MBA Chaiwala's overexpansion strategy involved the rapid opening of numerous stores within a condensed timeframe.",
        },
        {
            color: "#FEFFE3",
            img: "./homepage-img/mba-chai.png",
            title: "MBA Chaiwala",
            description:
                "MBA Chaiwala's overexpansion strategy involved the rapid opening of numerous stores within a condensed timeframe.",
        },
        {
            color: "#F0F4FF",
            img: "./homepage-img/mba-chai.png",
            title: "MBA Chaiwala",
            description:
                "MBA Chaiwala's overexpansion strategy involved the rapid opening of numerous stores within a condensed timeframe.",
        },
        {
            color: "#FFF0F2",
            img: "./homepage-img/mba-chai.png",
            title: "MBA Chaiwala",
            description:
                "MBA Chaiwala's overexpansion strategy involved the rapid opening of numerous stores within a condensed timeframe.",
        },
        {
            color: "#F0FFF0",
            img: "./homepage-img/mba-chai.png",
            title: "MBA Chaiwala",
            description:
                "MBA Chaiwala's overexpansion strategy involved the rapid opening of numerous stores within a condensed timeframe.",
        },
        {
            color: "#ECF8FF",
            img: "./homepage-img/mba-chai.png",
            title: "MBA Chaiwala",
            description:
                "MBA Chaiwala's overexpansion strategy involved the rapid opening of numerous stores within a condensed timeframe.",
        },
        // Add more items as needed
    ];

    return (
        <section className="exclusive-deals-sec mt-5">
            <Container>
                <h1 className="deals-sec-hedding">Exclusive Deals</h1>
            </Container>
            <div className="panorama-slider">
                <div className="exclusive-swiper swiper">
                    <div className="swiper-wrapper mt-5 mb-5">
                        {ExclusiveList.map((item, index) => (
                            <div className="swiper-slide" key={index}>
                                <div
                                    className="d-flex exclusive-slider-txt"
                                    style={{ backgroundColor: item.color, padding: "20px" }}
                                >
                                    <img
                                        className="slide-image"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                    <h4 className="mt-3 mb-3">{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exclusive;