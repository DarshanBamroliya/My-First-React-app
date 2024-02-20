import React from 'react';
import { Container} from 'react-bootstrap';
import Custominput from '../../../../widgets/custom_inputbar/Custom_input';
import './Training-detail.css';
import CustomButton from '../../../../widgets/custom_button/custom_button';
import Customdropdown from '../../../../widgets/custom_dropdown/Custom_dropdown';

const Trainingdetail = () => {
    const trainingconducted = ["A", "B", "C"];
    return(
        <Container id='traing-sec-container' className='mt-5'>
            <div className='traing-sec mx-2 p-3'>
                <CustomButton buttonText="Training Details" customClasses="traing-btn" />
                <Custominput type="text" placeholder="" heading="Do you provide training ?" />
                <Customdropdown heading="Where is the initial training conducted ?" options={trainingconducted} placeholder="Category" />
                <Custominput type="text" placeholder="" heading="How long is the initial traning programmed ?" />
            </div>
        </Container>
    )
}

export default Trainingdetail;