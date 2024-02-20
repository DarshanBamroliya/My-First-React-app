import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import './Side-menu.css';
import { Link } from 'react-router-dom'

const Leftsidemenu = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (sidebarOpen) {
            document.getElementById("leftSidebar").style.left = "0";
        } else {
            document.getElementById("leftSidebar").style.left = "-500px";
        }
    }, [sidebarOpen]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const leftsidebar = [
        {
            name: "Franchise list",
            path: '/Frenchiselist',
        },
        {
            name: "Category Page",
            path: '/CategoryPage',
        },
        {
            name: "Product Details Page",
            path: '/Product-details-Page',
        },
        {
            name: "Fill Information Page",
            path: 'Fill-information-page'
        },
        {
            name: "upload information Page",
            path: '/upload-information-page'
        },
        {
            name: "Ask For More Details Page",
            path: '/Ask-For-More-Details-Page'
        },
        {
            name: "Learn More Dialog",
            path: '/Learn-More-Dialog'
        },
        {
            name: "Subcategory Page",
            path: '/Subcategory-Page'
        }
    ];

    return (
        <div className="left-sidebar" id="leftSidebar">
            <Container className=" left-sidebar-wrapp">
                <div className="nav-brand d-flex mt-3">
                    <div className="sidebar-brand-icon">
                        <img src="./homepage-img/growth.png" alt="sidebar icon" />
                    </div>
                    <div className="sidebar-brand-name">
                        <h1 className="text-center">Franchisewala</h1>
                    </div>
                </div>
                <div className="close-btn d-flex  justify-content-between">
                    <i className="bi bi-chevron-left" onClick={toggleSidebar}></i>
                    <div className="slider-home-btn d-flex align-items-center">
                        <div className="slider-btn-home">
                            <a href="/">Home</a>
                        </div>
                        <div className="slider-bi-person">
                            <a href="" className="bi bi-person-circle"></a>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="left-sidebar-pages">
                <div className="left-sidebar-main">
                    <div className="left-sidebar-name">
                        <span>My Franchisewale</span>
                    </div>
                </div>
                <div className="left-sidebar-items">
                    {leftsidebar.map((item, index) => (
                        <div key={index} className="container left-sidebar-items-name  mt-1">
                            <Link to={item.path} className="d-flex justify-content-between align-items-center">
                                {item.name}
                                <i className="bi bi-chevron-right"></i>
                            </Link>
                        </div>
                    ))}
                    <div className="left-sidebar-visit-main d-flex align-items-center justify-content-between mt-3 mb-2">
                        <div className="left-sidebar-visit-wrapp">
                            <i className="bi bi-question-circle-fill"></i>
                            <span>Visit Help Center</span>
                        </div>
                        <div className="left-sidebar-visit-btn">
                            <i className="bi bi-chevron-right"></i>
                        </div>
                    </div>
                    <div className="left-sidebar-visit-main d-flex align-items-center mt-3 mb-2">
                        <div className="left-sidebar-translate-wrapp">
                            <img src="./homepage-img/translator-icon.svg" alt="translator icon" />
                            <span>Preferred Language</span>
                        </div>
                    </div>
                    <div className="left-sidebar-app-info d-flex align-items-center justify-content-between mt-3 mb-2">
                        <div className="left-sidebar-app-info-txt">
                            <p>Download Franchisewale App</p>
                            <div className="d-flex left-sidebar-app-img">
                                <img src="./homepage-img/ios.svg" alt="ios logo" />
                                <img src="./homepage-img/android.svg" alt="android logo" />
                            </div>
                        </div>
                        <div className="left-sidebar-app-qr">
                            <img src="./homepage-img/qr-code.svg" alt="qr code" />
                        </div>
                    </div>
                    <div className="left-sidebar-social d-flex mt-3 mb-3">
                        <div className="left-sidebar-social-main d-flex justify-content-between">
                            <span>Follow On</span>
                            <div className="left-sidebar-social-icon d-flex">
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leftsidemenu;
