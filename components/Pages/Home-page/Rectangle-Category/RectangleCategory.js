import React from "react";
import './RectangleCategory.css';
import { Col, Container, Row } from 'react-bootstrap';

const RectangleCategory = () => {
    const rectanglecategorylist = [
        {
            name: "Through an agent"
        },
        {
            name: "Through a friend or relative"
        },
        {
            name: "Through an advertisement (google / insta / facebook)"
        },
        {
            name: "Through online search"
        },
    ];
    return (
        <section className="rectangle-sec pt-lg-5 pb-lg-5 pt-sm-0 pb-sm-2">
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={6} className="col-12">
                        <div className="rectangle-wrapp mt-5">
                            <p>Monthly Poll</p>
                            <h1>How did you find your franchise ?</h1>
                            <ul className="rectangle-list">
                                    {rectanglecategorylist.map((iteam,index) => (
                                    <li key={index}>{iteam.name}</li>
                               ))}
                            </ul>
                        </div>
                    </Col>
                        <Col lg={6} md={6} sm={6} className="col-12 rectangle-sec-svg d-flex align-items-center">
                        <img src="./homepage-img/Developer-Team.svg" className="rectangle-svg"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default RectangleCategory;