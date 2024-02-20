import React from "react";
import "./lern_more.css";
import { Container } from "react-bootstrap";
import CustomButton from "../../../widgets/custom_button/custom_button";

const Lernmore = () => {
  const Lernmoredetail = [
    {
      deta: "Buy platinum packages",
    },
    {
      deta: "Get upto 30 assured contact details of franchises seekeres",
    },
    {
      deta: "97% visibility on franchisewale.in",
    },
  ];

  return (
    <div className="lern-sec">
      <Container>
        <div className="lern-sec-main p-5">
          <div className="lern-heading">
            <h1>Learn More</h1>
            <p>Upgrade to paid plan</p>
          </div>
          <ol className="lern-list my-5">
            {Lernmoredetail.map((item, index) => (
              <div className="lern-list-txt" key={index}>
                <li>{item.deta}</li>
              </div>
            ))}
          </ol>
          <div className="text-center">
            <CustomButton customClasses="lern-btn" buttonText="Upgrade Now" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Lernmore;
