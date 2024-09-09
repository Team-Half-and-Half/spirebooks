import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const Landing = () => (
  <Container id={PAGE_IDS.LANDING} className="py-3">
    <Row>
      <Image className="mx-auto" src="/images/landing.jpg" />
    </Row>
    <Row className="text-center">
      <h1>SpireBooks</h1>
    </Row>
    <hr className="gradient" />
  </Container>
);

export default Landing;
