import React from "react";
import "./custom_dropdown.css";
import Dropdown from 'react-bootstrap/Dropdown';

const Customdropdown = ({ heading, options, placeholder }) => {

    return (
        <Dropdown>
            <div className="d-flex flex-column">
                <h2 className="custom-input-heading">{heading}</h2>
                <select className="custom-dropdown" defaultValue="">
                    <option value="" disabled>{placeholder}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </Dropdown>
    );
};

export default Customdropdown;
