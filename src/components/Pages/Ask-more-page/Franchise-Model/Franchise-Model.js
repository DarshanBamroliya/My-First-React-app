import React from "react";
import "./Franchise-Model.css";
import { Col, Container, Row } from "react-bootstrap";

const FranchiseModel = () => {
  const FranchiseModeldetail = [
    {
      name: "",
      Small: "Small",
      Kisok: "Kisok",
      Large: "Large",
    },
    {
      name: "Franchise fees",
      Small: "50 - 55 L",
      Kisok: "60 - 70 L",
      Large: "50 - 55 L",
    },
    {
      name: "Required space",
      Small: "500 - 59 ft.",
      Kisok: "800 sq. ft.",
      Large: "500 - 59 ft.",
    },
    {
      name: "Ave. monthly businesse",
      Small: "4.00 L",
      Kisok: "8 L - 9 L",
      Large: "4.00 L",
    },
    {
      name: "360 marketing",
      Small: "Local level",
      Kisok: "Medium level",
      Large: "Multi level",
    },
    {
      name: "ROI covered time",
      Small: "20 month",
      Kisok: "24 month",
      Large: "36 month",
    },
    {
      name: "Explanation location",
      Small: "DetailsL",
      Kisok: "Details",
      Large: "Details",
    },
  ];
  return (
    <div className="model-content my-5">
      <Container>
        <div className="model-main py-5 px-5">
          <div className="model-heading d-flex justify-content-between align-items-center">
            <h2>Franchise Model</h2>
            <span>(When company have more than 2-3 type franchise)</span>
          </div>
          <div className="model-table-content">
            <Container>
              <div className="px-1 mt-5 model-table-main">
                {FranchiseModeldetail.map((item, index) => (
                  <div id="model-table-content" key={index}>
                    <div className="d-flex justify-content-between">
                      <div className="model-table-list">
                        <div >
                        <p className="model-table-list-name">{item.name}</p>
                        </div>
                      </div>
                      <div className="model-table-detail d-flex justify-content-around align-items-center">
                        <div className=" w-100 model-table-detail-boder">
                          <p>{item.Small}</p>
                        </div>
                        <div className="w-100 model-table-detail-boder">
                          <p>{item.Kisok}</p>
                        </div>
                        <div className="w-100">
                          <p>{item.Large}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FranchiseModel;
