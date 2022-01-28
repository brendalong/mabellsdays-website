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
                    <h1>Mabell's Days is an interactive storybook that sparks the imagination with colorful illustrations, movement, and musical sounds.</h1>

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
                    <ul className="bodycopy">
                        <li><span>Created for children 5 years old and younger.</span> Mabell's Zoo is easy to use and includes musical sounds, animals, vivid colors, and a large play area.</li>
                        <li><span>Use all your fingers.</span> An app designed for the device and includes multi-touch activities.</li>
                        <li><span>Intuitive</span> enough for young children to play alone or enjoy with family and friends.</li>

                        <li><span>Fresh, beautiful artwork</span> handcrafted from crumpled painted coffee filters. </li>
                        <li><span>Inspired by childhood activities:</span> blowing bubbles, tidily winks, and swinging mobiles. Each view has unique characteristics and employs physics for continuous discovery.</li>
                        <li><span>Number association.</span> Toddlers can learn numbers and animal names: "9 penguins slip and slide on ice".</li>
                        <li><span>Variety of musical sounds</span> and instruments (and we worked hard to create an environment that always sounds good).</li>
                        <li><span>Older children (and adults)</span> will enjoy figuring out the physics of each view: Can you bat a bird from the elephant trunk? How many monkeys will hook together? Will the balls stack on a seal's nose? What tune can you play with the fish?</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col><hr /></Col>
            </Row>
        </Container>

    )
}
