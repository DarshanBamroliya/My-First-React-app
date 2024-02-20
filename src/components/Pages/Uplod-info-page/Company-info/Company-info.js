import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Custominput from '../../../../widgets/custom_inputbar/Custom_input';
import './Company-info.css';
import CustomButton from '../../../../widgets/custom_button/custom_button';
import Customdropdown from '../../../../widgets/custom_dropdown/Custom_dropdown';

const Companyinfo = () => {
    const state = ["A", "B", "C"];
    const city = ["A", "B", "C"];
    const pincode = ["A", "B", "C"];
    const Categoryoptions = ["A", "B", "C"];
    const contactperson = ["A", "B", "C"];

    return (
        <Container id='company-info-container'>
            <div className='company-info-heading my-5'>
                <h1>Upload information Page</h1>
            </div>
            <div className='company-info-sec mx-2 p-3'>
                <CustomButton buttonText="Confidential Information" customClasses="company-info-btn" />
                <Custominput type="text" placeholder="Enter Name" heading="Company Name:-" />
                <Row>
                    <Col md={4}>
                        <Customdropdown heading="State" options={state} placeholder="Select" />
                    </Col>
                    <Col md={4}>
                        <Customdropdown heading="City" options={city} placeholder="Select" />
                    </Col>
                    <Col md={4}>
                        <Customdropdown heading="Pincode" options={pincode} placeholder="Select" />
                    </Col>
                </Row>
                <Custominput type="email" placeholder="Email Address" heading="Corporate office country" />
                <Custominput type="tel" placeholder="Mob No. 1" heading="Speed Required ?" />
                <Custominput type="tel" placeholder="Mob No. 2" heading="Mob No." />
                <Customdropdown heading="Company Register Email Address" options={Categoryoptions} placeholder="Category" />
                <Customdropdown heading="Contact Person Name" options={contactperson} placeholder="Select" />
                <Custominput type="text" placeholder="GST No." heading="GST No." />
                <Custominput type="text" placeholder="PAN No.." heading="PAN No." />
            </div>
        </Container>
    );
}

export default Companyinfo;
