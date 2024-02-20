import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Trending.css";
import CustomButton from "../../../../widgets/custom_button/custom_button";

const Trending = () => {
  const TrendingData = [
    {
      img: "./homepage-img/small-business.svg",
      title: "High Revenue",
      description:
        "Franchise Industry Overview & Forecast The franchise industry is a rapidly growing sector in the United States, with an increasing number of people choosing franchising as a way to start their own business.",
    },
    {
      img: "./homepage-img/small-business.svg",
      title: "High Revenue",
      description:
        "Franchise Industry Overview & Forecast The franchise industry is a rapidly growing sector in the United States, with an increasing number of people choosing franchising as a way to start their own business.",
    },
    {
      img: "./homepage-img/small-business.svg",
      title: "High Revenue",
      description:
        "Franchise Industry Overview & Forecast The franchise industry is a rapidly growing sector in the United States, with an increasing number of people choosing franchising as a way to start their own business.",
    },
  ];

  return (
    <Container className="mt-lg-5 mb-5">
      <Row>
        <div className="trending-heading">
          <h1>Buy High trending franchise ?</h1>
        </div>

        {TrendingData.map((item, index) => (
          <Col lg={4} md={12}
            key={index}
            className="col-lg-4 col-md-12 d-flex justify-content-center"
          >
            <div className="trending-business-wrapp mt-5 mb-5">
              <img src={item.img} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </Col>
        ))}

        <div className="trending-btn-main mt-lg-5 mb-sm-3">
          <a href="#">
            <CustomButton
              buttonText="Callback to customer care"
              customClasses="trending-btn"
              iconClasses="bi bi-arrow-right-short"
            />
          </a>
        </div>
      </Row>
    </Container>
  );
};

export default Trending;
