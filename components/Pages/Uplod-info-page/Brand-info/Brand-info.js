import React from 'react';
import { Container} from 'react-bootstrap';
import Custominput from '../../../../widgets/custom_inputbar/Custom_input';
import './Brand-info.css';
import CustomButton from '../../../../widgets/custom_button/custom_button';
import Customdropdown from '../../../../widgets/custom_dropdown/Custom_dropdown';

const Brandinfo = () => {
    const selectcategory = ["A", "B", "C"];
    const brandoperation = ["A", "B", "C"];
    const brandwebsite = ["A", "B", "C"];
    const brandstart = ["A", "B", "C"];
    const countryname = ["A", "B", "C"];
    const aboutbrand = ["A", "B", "C"];

    return(
        <Container id='brand-sec-container' className='mt-5'>
            <div className='brand-sec mx-2 p-3'>
                <CustomButton buttonText="Brand Information " customClasses="traing-btn" />
                <Customdropdown heading="Select Category" options={selectcategory} placeholder="Select" />
                <Custominput type="text" placeholder="" heading="Brand Name" />
                <Customdropdown heading="When did your brand start operation ?" options={brandoperation} placeholder="Select" />
                <Customdropdown heading="Brand Website" options={brandwebsite} placeholder="http:/" />
                <Customdropdown heading="When did your brand start franchise ?" options={brandstart} placeholder="Select" />
                <Customdropdown heading="How many franchises are operational in home country ?" options={countryname} placeholder="Select" />
                <Customdropdown heading="About brand c max 200 words ?" options={aboutbrand} placeholder="Select" />
                <Custominput type="tel" placeholder="" heading="How many company owned outlets in home country?" />
            </div>
        </Container>
    )
}

export default Brandinfo;