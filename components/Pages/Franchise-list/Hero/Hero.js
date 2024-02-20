import React from 'react'
import './Hero.css'
import { Col, Container, Row } from 'react-bootstrap';

const Herofrenchiselist = () => {
    return(
        <section className="hero-main">
        <Container className=" hero-wrapp">
            <Row className="hero-main-content align-items-center">	
                <Col  lg={6} xl={6} md={6} className=" d-md-block d-sm-none hero-img-main">
                    <div className="hero-img">
                        <img src="./frenchiseist-img/hero-main.svg"/>
                    </div>
                </Col>
                <Col lg={6} xl={6} md={6} sm={12} className="d-flex justify-content-center align-items-center">
                    <div className="hero-box">
                        <div className="hero-box-txt d-flex justify-content-between">
                            <div>
                                <span>Let’s get you started</span>
                                <hr className='hero-box-hr-1'/> 
                                <hr className='hero-box-hr-2'/>
                            </div>
                            <a href="#">Login</a>
                        </div>
                        <div className="box-intro-btn">
                            <div className="box-intro">
                                <p>You're a</p>
                            </div>
                            <Row className=" mx-md-3">
                                <Col className="col-6">
                                    <button className="py-2">Owner</button>	
                                </Col>
                                <Col className="col-6">
                                    <button className="py-2">Broker</button>	
                                </Col>
                            </Row>
                            <div className="box-btn-main mt-3 mx-md-4">
                                <button className="py-2">Start now</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}
export default Herofrenchiselist;