import React from "react";
import "./Similar-compare.css";
import { Row, Container, Col } from "react-bootstrap";
import Customsimilarcompare from "../../../../widgets/Custom_similarcompare/Custom_similarcompare";

const Similarcompare = () => {
    const Similardetail = [
        {
            img: "/Ask-more-detail-img/Mba-chai.svg",
            heading: "MBA Chai wala",
            price: "Rs. 5 to 25 L",
        },
        {
            img: "/Ask-more-detail-img/chai-sutta.svg",
            heading: "Chai Sutta Bar",
            price: "Rs. 6 to 29 L",
        },
        {
            img: "/Ask-more-detail-img/tea-post.svg",
            heading: "TeaPost",
            price: "Rs. 5 to 25 L",
        },
        {
            img: "/Ask-more-detail-img/jugadi-adda.svg",
            heading: "Jugadi",
            price: "Rs. 5 to 25 L",
        },
    ];
    const Tabledetail = [
        {
            title: "Required Space",
            detail: "500 - 1000 sq. ft.",
        },
        {
            title: "Avg. Monthly Business",
            detail: "5 lakh",
        },
        {
            title: "ROI Covered Time",
            detail: "24 Month",
        },
        {
            title: "360 Marketing",
            detail: "Yes",
            subdetail: "Scrolling  ->",
        },
        {
            title: "Training",
            detail: "Yes (4 days)",
        },
        {
            title: "Profit Sharing",
            detail: "After 3 years",
        },
        {
            title: "Total Franchise",
            detail: "110",
            subdetail: "98",
            subdetail1: "55",
            subdetail2: "60",
        },
        {
            title: "Franchise Services",
            detail: "Verygood",
        },
    ];

    return (
        <div className="similar-main my-5">
            <Container>
                <div className="similar-wrapp">
                    <div className="similar-add-post">
                        <h1 className="mb-5">Similar franchise to compare</h1>
                        <Row>
                            {Similardetail.map((item, index) => (
                                <Col lg={3} md={6} key={index}>
                                    <Customsimilarcompare
                                        showimg={true}
                                        showheading={true}
                                        showicon={true}
                                        showtxt={true}
                                        key={index}
                                        img={process.env.PUBLIC_URL + item.img}
                                        heading={item.heading}
                                        price={item.price}
                                        cusmain="customsimilar-main text-center"
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className="py-5">
                        {Tabledetail.map((detail, detailIndex) => (
                            <div key={detailIndex} className="similar-table-main">
                                <Row>
                                    <Col lg={3} md={4} xs={4} className="similar-table-col">
                                        <div className="similar-table d-flex">
                                            <span>{detail.title}</span>
                                        </div>
                                    </Col>
                                    <Col
                                        lg={9}
                                        md={8}
                                        xs={8}
                                        className="similar-table-col similar-table-detail"
                                    >
                                        <div className="px-3 w-100">
                                            <div className="d-flex justify-content-between">
                                                <p>{detail.detail}</p>
                                                {detail.subdetail && <p>{detail.subdetail}</p>}
                                                {detail.subdetail1 && <p>{detail.subdetail1}</p>}
                                                {detail.subdetail2 && <p>{detail.subdetail2}</p>}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Similarcompare;
