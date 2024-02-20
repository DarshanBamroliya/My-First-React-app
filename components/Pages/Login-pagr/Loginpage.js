import React from "react";
import "./Loginpage.css";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../../../widgets/custom_button/custom_button";

const Loginpage = () => {
  return (
    <section className="login-page">
      <Container className="login-page-main">
        <Row className="h-100">
          <Col md={6} className="d-none d-md-block ">
            <div className="login-hero-main d-flex align-items-end h-100">
              <div className="login-hero">
                <img src="./Login-page-img/hero-main.svg" />
              </div>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="d-flex justify-content-center">
            <div className="login-hero-main-box">
              <div className="login-hero-box">
                <div className="login-hero-box-detail d-flex justify-content-center flex-column align-items-center">
                  <h4>Get Started With Your Phone No.</h4>
                  <hr className="login-hero-box-hr" />
                </div>
                <div className="login-hero-box-num d-flex mt-5">
                  <p>+91</p>
                  <input
                    type="tel"
                    placeholder="Enter Your Phone No."
                    className="mx-3"
                  />
                </div>
                <div className="login-hero-box-btn-main mt-5">
                  <CustomButton
                    buttonText="Contiune"
                    customClasses="login-hero-box-btn"
                  />
                  <span className=" d-flex justify-content-between mt-4">
                    <hr />
                    or connect with
                    <hr />
                  </span>
                </div>
                <div className="login-hero-box-icon my-4">
                  <img src="./Login-page-img/Google.svg"/>
                </div>
                <hr className="login-hero-box-icon-hr mt-5"/>
                <div className="login-hero-box-txt">
                  <p>Selected wrong profile?<span>Go back</span></p>
                </div>
              </div>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Loginpage;
