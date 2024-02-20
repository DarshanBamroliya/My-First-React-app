import React from "react";
import "./Custom_similarcompare.css";
import { Col } from "react-bootstrap";

const Customsimilarcompare = ({
  img,
  heading,
  price,
  showimg,
  showheading,
  cusclass,
  cusmain,
  showicon,
  showtxt
}) => {
  return (
    <div className={cusmain}>
      {showimg == true ? (
        <img src={img} alt="Product Image" className="py-2" />
      ) : (
        <div></div>
      )}
      {showheading == true ? <h4 className="my-2">{heading}</h4> : <div></div>}
      {showicon == true ? (
        <div className={cusclass}>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-half"></i>
        </div>
      ) : (
        <div></div>
      )}
      {showtxt == true ? <p className="py-2">{price}</p> : <div></div>}
    </div>
  );
};

export default Customsimilarcompare;
