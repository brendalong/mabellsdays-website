import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export const Header = () => {


    return (
        <Container fluid="sm" id="header">
            <Row>
                <Col>
                    <Image className="header-image" fluid src={require('./images/md-header.png')} alt="Mabell's Days, multi-touch picture book for children" />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={8}>
                    <h1>What did you do today?</h1>
                    <p>Mabell's Days is an interactive storybook that sparks the imagination with colorful illustrations, movement, and musical sounds.</p>

                </Col>
                <Col sm={12} md={4}>
                    <Container className="storebuttons">
                        <div className="d-grid gap-2">
                            <div>
                                <Image src={require(`./images/mabellsdays-icon.png`)} width="72" height="72" alt="Mabell's Day Icon" /> <br />
                                Mabell's Days is Available Now
                            </div>
                            <Button variant="primary" size="lg" onClick={() => window.location.href = 'https://apps.apple.com/us/app/mabells-zoo-interactive-counting/id712415904?ign-mpt=uo%3D4'}>
                                The App Store
                            </Button>
                            {/* <Button variant="primary" size="lg">
								Google Play
								https://play.google.com/store/apps/details?id=air.com.studio6thave.mabellszoo
							</Button> */}
                        </div>

                    </Container>
                </Col>
            </Row>
            <Row>
                <Col><hr /></Col>
            </Row>
            <Row>
                <Col>
                    <h2>Features</h2>
                    <ul>
                        <li>Imagine taking a rocket ship to the moon and meeting a moontian with a lost balloon, sailing a ship across the water or finding a rainbow.</li>
                        <li>Created for children 5 years old and younger. Mabell's Days is easy to use and includes musical
                            sounds, vivid colors, and a large play area.</li>
                        <li>Use all your fingers. An app designed for the device capable of multi-touch activities.</li>
                        <li>Easy for young children to play alone or enjoy with family and friends.</li>
                        <li>Encourages 'days' of the week association with a song at the end.</li>
                        <li>Variety of musical sounds and instruments (and we worked hard to create an environment that sounds good).</li>
                        <li>Handcrafted, beautiful artwork.</li>
                        <li>Inspired by story telling - &ldquo;Let's talk about our days.&rdquo;</li>
                        <li>Employs physics for continuous discovery and creativity.</li>
                        <li>Older children (and adults) enjoy the visuals and physics of each view.</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col><hr /></Col>
            </Row>
        </Container>

    )
}
