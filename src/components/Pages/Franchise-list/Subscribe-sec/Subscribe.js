import React from "react";
import './Subscribe.css';
import { Container } from 'react-bootstrap';

const Subscribe = () => {
    const subscribelist = [
        {
            name: "Top position in franchise listing"
        },
        {
            name: "360 visual experience"
        },
        {
            name: "Assist relationship manager"
        },
        {
            name: "Verified and filtered contacts"
        },
    ]
    return(
        <Container className=" mt-md-5 mb-5">
            <div className="subscribe-heading">
                <h1>Subscribe to our exclusive package now</h1>
                <div className="container mt-5">
                    <ul className="subscribe-checklist">
                        {subscribelist.map((iteam,index) => (
                                    <li key={index}>{iteam.name}</li>
                               ))                            
                        }
                    </ul> 
                </div>
            </div>
        </Container>
    )
}

export default Subscribe;