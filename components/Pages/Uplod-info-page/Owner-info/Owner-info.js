import React from 'react';
import { Container} from 'react-bootstrap';
import Custominput from '../../../../widgets/custom_inputbar/Custom_input';
import './Owner-info.css';
import CustomButton from '../../../../widgets/custom_button/custom_button';
import Customdropdown from '../../../../widgets/custom_dropdown/Custom_dropdown';

const Ownerdetail = () => {
    const emailselect = ["A", "B", "C"];
    return(
        <Container id='owner-sec-container' className='mt-5'>
            <div className='owner-sec mx-2 p-3'>
                <CustomButton buttonText="Owner Information " customClasses="traing-btn" />
                <Custominput type="text" placeholder="" heading="Owner Full Name" />
                <Customdropdown heading="Email Address" options={emailselect} placeholder="Select" />
                <Custominput type="tel" placeholder="" heading="Mob No." />
            </div>
        </Container>
    )
}

export default Ownerdetail;