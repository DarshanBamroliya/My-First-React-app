import React from "react";
import "./Productasp.css";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../../../../widgets/custom_button/custom_button";

const Productasp = () => {
    return (
        <div id="product-asp">
            <Container>
                <div className="product-asp-main">
                    <Row >
                        <Col lg={8} xl={8} xxl={8} className="col-12">
                            <div className="product-asp-wrapp">
                                <div className="product-asp-heading">
                                    <ul>
                                        <li className="product-asp-list">
                                            <h2>Why MBA Chai Wala - CEO/MD</h2>
                                            <p>Auis has good</p>
                                            <span>Read more</span>
                                        </li>
                                        <li className="product-asp-list">
                                            <h2>Established Date</h2>
                                            <p>4th June 2018</p>
                                        </li>
                                        <li className="product-asp-list">
                                            <h2>First franchise outlet</h2>
                                            <p>2nd Dec 2018, Ahmedabad</p>
                                        </li>
                                        <li className="product-asp-list">
                                            <h2>Total outlet in india</h2>
                                            <p>110 outlet</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} xl={4} xxl={4} className="col-12">
                            <div className="usp-btn">
                                <CustomButton
                                    buttonText="USP"
                                    customClasses="product-asp-btn"
                                />
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center">
                        <CustomButton
                            buttonText="Ask for more details"
                            customClasses="product-asp-btn-main"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Productasp;
