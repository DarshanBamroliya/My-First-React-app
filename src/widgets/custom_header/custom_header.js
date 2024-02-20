import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./custom_header.css";
import { Container } from "react-bootstrap";

const CustomHeader = ({
    brandname,
    showsearchbar,
    showhomeicon,
    showpost,
    showloginicon,
}) => {
    function toggleSearch() {
        var searchInput = document.getElementById("searchInput");

        // Toggle the display property based on a condition
        if (
            searchInput.style.display === "none" ||
            searchInput.style.display === ""
        ) {
            searchInput.style.display = "block";
        } else {
            searchInput.style.display = "none";
        }
    }

    const openSidebarHandler = () => {
        document.getElementById("leftSidebar").style.left = "0";
    };

    return (
        <header className="header-main pt-md-3 pt-3 pb-3">
            <Container className="header-wrapp d-flex justify-content-between align-items-center">
                <div className="nav-brand d-flex align-items-center">
                    <div className="brand-icon">
                        <img src="./homepage-img/growth.png" />
                    </div>
                    <div className="brand-name">
                        <h1 className="text-center">Franchisewala</h1>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    {showsearchbar && (
                        <div className="search-bar d-flex justify-content-end align-items-center">
                            <input
                                className="form-control me-2"
                                type="search"
                                id="searchInput"
                                placeholder={`search ${brandname}`}
                                aria-label="Search"
                            />
                            <button
                                className="search-btn"
                                id="searchBtn()"
                                onClick={toggleSearch}
                            >
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    )}
                    {showhomeicon && (
                        <div className="home-btn d-md-block d-none">
                            <Link to="/">Home</Link>
                        </div>
                    )}
                    <div className="menu-btn d-flex">
                        <img
                            src="./homepage-img/menu.svg"
                            id="openBtn"
                            onClick={openSidebarHandler}
                            alt="Menu"
                        />
                    </div>
                    {showloginicon && (
                        <div className="login-btn d-md-block d-none">
                            <Link to="/Login">
                                <i className="bi bi-person-circle"></i>
                            </Link>
                        </div>
                    )}
                    {showpost && (
                        <div className="d-md-block d-none">
                            <Link to="/Fill-information-page" className="Post-Franchise">
                                Post Franchise
                                <span>Free</span>
                            </Link>
                        </div>
                    )}
                </div>
            </Container>
        </header>
    );
};

export default CustomHeader;
