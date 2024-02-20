import React from "react";
import "./Sub-category.css";
import { Col, Container, Row } from "react-bootstrap";
import Customsimilarcompare from "../../../widgets/Custom_similarcompare/Custom_similarcompare";

const Subcategory = () => {
    const subcategoryimg = [
        {
            img: "/Sub-category-img/Category2.jpg",
        },
        {
            img: "/Sub-category-img/Category3.jpg",
        },
        {
            img: "/Sub-category-img/Category1.jpg",
        },
    ];

    const cafeimg = [
        {
            img: "/Sub-category-img/Mba-chai.svg",
        },
        {
            img: "/Sub-category-img/chai-sutta.svg",
        },
        {
            img: "/Sub-category-img/tea-post.svg",
        },
        {
            img: "/Sub-category-img/jugadi-adda.svg",
        },
    ];

    return (
        <div className="sub-category">
            <Container>
                <div className="sub-category-heading">
                    <h1>Sub Category</h1>
                </div>
                <Row>
                    {subcategoryimg.map((item, index) => (
                        <Col sm={4} xs={12} key={index}>
                            <div className="sub-category-img-main">
                                <div className="sub-category-img my-2">
                                    <img src={item.img} alt={`Subcategory ${index}`} />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <div className="sub-category-cafe my-3">
                    <h2>Cafe Page</h2>
                </div>
                <Row>
                    {cafeimg.map((img, key) => (
                        <Col md={3} sm={6} xs={6} key={key}>
                            <Customsimilarcompare
                                showimg={true}
                                img={process.env.PUBLIC_URL + img.img}
                                cusmain="customsimilar-main text-center d-flex align-items-center justify-content-center my-3"
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Subcategory;
