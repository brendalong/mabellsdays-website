import React from 'react';
import { Header } from './Header';
import { Container } from 'react-bootstrap';
import { MDContent } from './MDContent';
import { Footer } from './Footer';

export const App = () => {
  return (
    <Container id="wrapper">
      <Header />
      <MDContent />
      <Footer />
    </Container>
  )
}

