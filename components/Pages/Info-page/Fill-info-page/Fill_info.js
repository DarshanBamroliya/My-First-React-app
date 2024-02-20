import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Custominput from '../../../../widgets/custom_inputbar/Custom_input';
import './Fill_info.css';
import CustomButton from '../../../../widgets/custom_button/custom_button';
import Customdropdown from '../../../../widgets/custom_dropdown/Custom_dropdown';

const Fillinfo = () => {
    const genderOptions = ["Male", "Female", "Other"];
    const [dob, setDOB] = useState(null);
    const occupation = ["A", "B", "C"];
    const Categoryoptions = ["A", "B", "C"];
    const Propertyoptions = ["A", "B", "C"];
    const franchiseoptions = ["A", "B", "C"];
    const franchisemodeoptions = ["A", "B", "C"];
    const franchisespreadoptions = ["A", "B", "C"];
    const franchiseopen = ["A", "B", "C"];
    const partner = ["A", "B", "C"];

    const handleDateChange = (event) => {
        setDOB(event.target.value);
    };

    return (
        <Container id='fill-info-container'>
            <div className='fill-info-heading my-5'>
                <h1>Fill Information Page</h1>
            </div>
            <div className='fill-info-sec mx-2 p-3'>
                <CustomButton buttonText="Confidential Information" customClasses="fill-info-btn" />
                <Custominput type="text" placeholder="Enter Name" heading="Full Name:-" />
                <Row>
                    <Col md={4}>
                        <Customdropdown heading="Gender" options={genderOptions} placeholder="Select Gender" />
                    </Col>
                    <Col md={4}>
                        <Custominput
                            type="date"
                            value={dob}
                            onChange={handleDateChange}
                            heading="DOB"
                        />
                    </Col>
                    <Col md={4}>
                        <Customdropdown heading="OCCUPATION" options={occupation} placeholder="Select Occupation" />
                    </Col>
                </Row>
                <Custominput type="email" placeholder="Email Address" heading="Email:-" />
                <Custominput type="tel" placeholder="Mob No. 1" heading="Mob No. 1" />
                <Custominput type="tel" placeholder="Mob No. 2" heading="Mob No. 2" />
                <Customdropdown heading="Your Interested in frenchise ?" options={Categoryoptions} placeholder="Category" />
                <Customdropdown heading="Property" options={Propertyoptions} placeholder="Property" />
                <Customdropdown heading="How soon would you like to select your franchise ?" options={franchiseoptions} placeholder="Select" />
                <Customdropdown heading="How much time would you invested in franchise mode ?" options={franchisemodeoptions} placeholder="Select" />
                <Customdropdown heading="How much invested would you be able to spread ?" options={franchisespreadoptions} placeholder="Select" />
                <Customdropdown heading="I want to open franchise ? " options={franchiseopen} placeholder="Select" />
                <Row>
                    <Col md={6}>
                        <Custominput type="text" placeholder="State" heading="State" />
                    </Col>
                    <Col md={6}>
                        <Custominput type="text" placeholder="City" heading="City" />
                    </Col>
                </Row>
                <Customdropdown heading="Do you have any partner ?" options={partner} placeholder="Select" />


            </div>
        </Container>
    );
}

export default Fillinfo;
