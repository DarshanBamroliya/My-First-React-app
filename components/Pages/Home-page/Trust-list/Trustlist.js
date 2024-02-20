import React from "react";
import { Container } from "react-bootstrap";
import "./Trustlist.css";

const Trustlist = () => {
  const trustList = [
    {name: "Determine if franchising is right for your business."},
    {name: "Issue your franchise disclosure document."},
    {name: "Prepare your operations manual."},
    {name: "Register your trademarks."},
    {name: "Register and file your FDD."},
    {name: "Prepare your operations manual."},
    {name: "Create your franchise sales strategy and budget."}
  ];

  return (
    <Container>
      <div className="trust-main mt-lg-3 mt-5">
        <h1>Why trust franchisewale ?</h1>
        <ol className="trust-sec-list mt-5">
          {trustList.map((iteam,index) => (
            <li key={index}>{iteam.name}</li>
          ))}
          {/* <li>Determine if franchising is right for your business.</li>
                    <li>Issue your franchise disclosure document.</li>
                    <li>Prepare your operations manual.</li>
                    <li>Register your trademarks.</li>
                    <li>Establish your franchise company.</li>
                    <li>Register and file your FDD.</li>
                    <li>Create your franchise sales strategy and budget.</li> */}
        </ol>
      </div>
    </Container>
  );
};

export default Trustlist;
