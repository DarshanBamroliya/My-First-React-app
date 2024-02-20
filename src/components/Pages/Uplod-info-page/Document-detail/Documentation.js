import React from 'react';
import { Container} from 'react-bootstrap';
import './Documentation.css';
import CustomButton from '../../../../widgets/custom_button/custom_button';
import Customdropdown from '../../../../widgets/custom_dropdown/Custom_dropdown';

const Documentation = () => {
    const franchiseagreement = ["Yes", "No"];
    return(
        <Container id='owner-sec-container' className='my-5'>
            <div className='owner-sec mx-2 p-3'>
                <CustomButton buttonText="Owner Information " customClasses="traing-btn" />
                <Customdropdown heading="Do you have a franchise agreement ?" options={franchiseagreement} placeholder="Select" />
                <Customdropdown heading="Do you have operations flowchart" options={franchiseagreement} placeholder="Select" />
            </div>
        </Container>
    )
}

export default Documentation;