import React from "react";
import "./Custom_input.css";

const Custominput = ({ type, placeholder, heading }) => {
    return (
       <div className="d-flex flex-column">
          {heading !== '' ? <h2 className="custom-input-heading">{heading}</h2> : null}
          <input className="custom-input-bar" type={type} placeholder={placeholder}></input>
       </div>
    );
};

export default Custominput;