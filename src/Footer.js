import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";


export const Footer = () => {
    return (
        <>
            <Container id="footer">
                <hr />
                <Row>
                    <Col>					
                        <Image src={require('./images/mabellsZoo_logo.png')} alt="Mabell's Zoo logo" />
                        <p>Also available: <a href="http://mabellszoo.com">Mabell's Zoo</a>, an interactive counting storybook.</p>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>For inquiries or support, please contact <a href="http://studio6thave.com/contact-brenda/" rel="noreferrer" target="_blank">Studio6thAve</a> <br />
                            <a href="http://studio6thave.com/privacy-policy/" target="_blank" rel="noreferrer">Mabell's Zoo Privacy Policy</a></p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <ul id="footer-links">
                            <li><a href="http://studio6thave.com" rel="noreferrer" title="http://studio6thave.com" target="_blank">
                                <div className="webicon studio6thave"></div></a></li>
                            <li><a href="http://facebook.com/MabellsWorld" rel="noreferrer" title="http://facebook.com/MabellsWorld" target="_blank"><div className="webicon facebook"></div></a></li>

                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <p>&copy; 2013-{new Date().getFullYear()}, Brenda Long with <a href="http://studio6thave.com" rel="noreferrer">Studio6thAve</a></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}