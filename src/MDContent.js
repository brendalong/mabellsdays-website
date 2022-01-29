import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export const MDContent = () => {

    return (
        <Container fluid="md" id="MDContent">
            <Row>
                <Col xs={12} md={6} lg={6} className="mz-view">
                    <Image fluid src={require('./images/md-moon.png')} className="aligncenter thumb" alt="Mabell's Days - Exploring the depths of starry river" />
                    <p>Exploring the depths of starry river</p>
                </Col>
                <Col xs={12} md={6} lg={6} className="mz-view">
                    <Image fluid src={require('./images/md-cow.png')} className="aligncenter thumb" alt="Mabell's Days - Finding treasures with my favorite crayon" />
                    <p>Finding treasures with my favorite crayon</p>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <h2>Ma + Bell</h2>
                    <p>Mabell's Days was inspired by the stories I would tell my daughter at bedtime. Instead of office meetings and tele-conferences, I would go on adventures. As soon as the story began, she would ask “did I come with you?” The answer was always yes.</p>

                    <p>I am not a traditional author, instead I am an interactive media artist. The books we create include movement, music and user interactions. It is also important we can play together. Devices with multi-touch technology are the canvas with imagery begging to be touched.</p>

                    <p>My daughter was involved in the creative process. We spent several afternoons crumpling and painting coffee filters which became the beautiful textures used throughout out books. She influenced the story, color schemes and had opinions about “what was fun”.  With our first book, Mabell's Zoo, she insisted on how the title is pronounced, with a long A sound. We used a closet as our recording studio - also known as the giggle house.</p>

                    <p>As my daughter explores our books, she continues to find new playful interactions. Even though she helped create the experience, she adds her own narratives and sounds creating new interpretations and stories.</p>

                    <p>Creating Mabell's Days and Mabell's Zoo with my daughter has been a wonderful experience. We are excited to share them with others and hope you will be inspired and add to your own memories.</p>
                </Col>
            </Row>
        </Container>
    )
}