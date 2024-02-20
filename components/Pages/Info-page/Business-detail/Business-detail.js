import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Custominput from '../../../../widgets/custom_inputbar/Custom_input';
import './Business-detail.css';
import CustomButton from '../../../../widgets/custom_button/custom_button';

const Businessdetail = () => {
    return(
        <Container id='business-sec-container' className='my-5'>
            <div className='business-sec mx-2 p-3'>
                <CustomButton buttonText="Business Suitability" customClasses="business-btn" />
                <Custominput type="text" placeholder="" heading="Is franchise oppertuinity suitable for woman ?" />
                <Custominput type="text" placeholder="" heading="Total Investment ?" />
                <Custominput type="text" placeholder="" heading="Speed Required ?" />
                <Custominput type="text" placeholder="" heading="Reverse Covering Time Period ?" />
                <Row>
                    <h2 className='business-photo-heading'>Photos</h2>
                    <Col md={4}>
                        <Custominput type="text" placeholder="Upload" heading="" />
                    </Col>
                    <Col md={4}>
                        <Custominput type="text" placeholder="Upload" heading="" />
                    </Col>
                    <Col md={4}>
                        <Custominput type="text" placeholder="Upload" heading="" />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Businessdetail;