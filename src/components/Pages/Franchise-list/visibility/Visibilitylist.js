import React from "react";
import "./Visibilitylist.css";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../../../../widgets/custom_button/custom_button";

const Visibilitylist = () => {
  return (
    <section className=" visibility-main mt-5 mb-5">
      <Container>
        <Row className=" justify-content-center">
          <div className="visibility-heading mt-5 mb-5">
            <h1>Check package wise visibility</h1>
          </div>
          <Col md={6} className="col-12">
            <div className="visibility-main-img d-flex justify-content-end mt-5">
              <img src="./frenchiseist-img/visibility.png" />
            </div>
          </Col>
          <Row className=" col-md-6 align-content-center justify-content-center">
            <Row className="">
              <Col xl={2} lg={1} mg={1}></Col>
              <Col xl={5} lg={7} mg={8}>
                <CustomButton
                  buttonText="Silver Plan"
                  customClasses="visibility-silver-plan"
                />
              </Col>
              <Col xl={5} lg={4} mg={3}></Col>
            </Row>
            <Row className=" mt-4">
              <Col  xl={5} lg={4} mg={4}></Col>
              <Col xl={5} lg={7} mg={8}>
                <CustomButton
                  buttonText="Gold Plan"
                  customClasses="visibility-silver-plan"
                />
              </Col>
              <Col xl={2} lg={1} mg={0} ></Col>
            </Row>
            <Row className=" mt-4">
              <Col  xl={3} lg={2} mg={2}></Col>
              <Col  xl={5} lg={7} mg={8}>
                <CustomButton
                  buttonText="Upgrade With Titanium Plan"
                  customClasses="visibility-silver-plan-main"
                />
              </Col>
              <Col  xl={4} lg={3} mg={2}></Col>
            </Row>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default Visibilitylist;