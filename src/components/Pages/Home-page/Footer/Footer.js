import React from "react";
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = ()=>{
    return(
        <footer className="footer-main ptlg-5 pb-5">
            <Container>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mt-4">
                        <div className="footer-brand d-flex">
                            <div className="footer-brand-icon">
                                <img src="./homepage-img/growth.png"/>
                            </div>
                            <div className="footer-brand-name">
                                <h1 className="text-center">Franchisewala</h1>
                            </div>
                        </div>
                        <div className="footer-social-invite mt-4">
                            <span>Follow On:</span>
                        </div>
                        <div className="footer-social-icon mt-3">
                            <a href="#" className="bi bi-instagram"></a>
                            <a href="#" className="bi bi-facebook"></a>
                            <a href="#" className="bi bi-twitter"></a>
                            <a href="#" className="bi bi-linkedin"></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-4 cmpny-main"> 
                        <div className="row">
                            <div className="col-6">
                                <div className="footer-cmpny-wrapp">
                                    <h1>COMPANY</h1>
                                    <p>Careers</p>
                                    <p>About Us</p>
                                    <p>For Partners</p>
                                    <p>Terms</p>
                                    <p>Annual Return</p>
                                    <p>Privacy Policy</p>
                                    <p>Contact Us</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="footer-explore-wrapp">
                                    <h1>EXPLORE</h1>
                                    <p>News</p>
                                    <p>Home Loans</p>
                                    <p>Sitemap</p>
                                    <p>International</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-12 mt-4">
                        <div className="footer-mobile-wrapp">
                            <h2>EXPERIENCE HOUSING APP ON MOBILE</h2>  
                        </div> 
                        <div className="footer-mobile d-flex mt-4">
                            <div className="footer-mobile-icon d-flex flex-column justify-content-center">
                                <img src="./homepage-img/ios.svg"/>
                                <img src="./homepage-img/android.svg"/>
                            </div>
                            <div className="footer-qr">
                                <img src="./homepage-img/qr-code.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;