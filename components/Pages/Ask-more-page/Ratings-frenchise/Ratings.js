import React from "react";
import "./Ratings.css";
import { Col, Container, Row } from "react-bootstrap";
import Customsimilarcompare from "../../../../widgets/Custom_similarcompare/Custom_similarcompare";

const Ratings = () => {
  const ratingfeatures = [
    {
      img: "/Ask-more-detail-img/montly-rating.svg",
      title: "Monthly Business",
      rating: "4/5",
    },
    {
      img: "/Ask-more-detail-img/montly-rating.svg",
      title: "Monthly Business",
      rating: "4/5",
    },
    {
      img: "/Ask-more-detail-img/montly-rating.svg",
      title: "Monthly Business",
      rating: "4/5",
    },
    {
      img: "/Ask-more-detail-img/montly-rating.svg",
      title: "Monthly Business",
      rating: "4/5",
    },
  ];

  const ratingfaq = [
    {
      text: "Want basic things provide by franchise ? ",
      icon: "bi bi-plus",
    },
    {
      text: "After payment how much time will be taken to open the franchise ? ",
      icon: "bi bi-plus",
    },
    {
      text: "Want basic things provide by franchise ? ",
      icon: "bi bi-plus",
    },
  ];

  return (
    <div className="rating-contain">
      <Container>
        <div className="rating-detail py-5">
          <Container>
            <div className="d-flex justify-content-between">
              <h3>Ratings by features </h3>
              <div className="d-flex rating-icon">
                <Customsimilarcompare cusclass="rating-icon-main d-flex mx-2" />
                <span>4.0/5</span>
              </div>
            </div>

            <Row className="mt-4 mb-1">
              <Col lg={4}></Col>
              {ratingfaq.map((text, index) => (
                <div
                  key={index}
                  className="rating-faq-wrapp d-flex justify-content-between mt-3"
                >
                  <p>{text.text}</p>
                  <i className={text.icon} />
                </div>
              ))}
            </Row>
            <div className="rating-faq mt-5">
              <h4 className="my-4">FAQ</h4>
              {ratingfaq.map((text, index) => (
                <div key={index}>
                  <div
                    className="rating-faq-wrapp d-flex justify-content-between mt-3"
                  >
                    <p>{text.text}</p>
                    <i className={text.icon} />
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Ratings;
