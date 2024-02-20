import React from "react";
import "./Productceobox.css";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../../../../widgets/custom_button/custom_button";

const Productceobox = () => {
    return (
        <Container>
            <Row className=" align-items-center product-detail-main">
                <Col lg={6} xl={6} xxl={6} className="col-12">
                    <div className="product-detail-wrapp">
                        <div className="product-detail-heading">
                            <h2>MBA Chai Wala - CEO/MD</h2>
                            <p>76 buyers integrated</p>
                        </div>
                        <div className="product-detail-txt">
                            <p>
                                The CEO and Founder of MBA Chai Wala is Prafull Billore. In
                                Ahmedabad, he opened for business on July 25, 2017. He started
                                his tea shop with INR.
                            </p>
                            <CustomButton
                                buttonText="Contact Now"
                                customClasses="product-btn"
                            />
                        </div>
                    </div>
                </Col>
                <Col className="col-6">
                    <div className="product-detail-img">
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Productceobox;
