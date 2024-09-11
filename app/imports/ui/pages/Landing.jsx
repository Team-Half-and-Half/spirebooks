import React from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const Landing = () => (
  <Container fluid id={PAGE_IDS.LANDING} className="py-3">
    <Row>
      <div className="top-img" />
    </Row>
    <Row className="align-middle justify-content-center">
      <Col xs={12} className="text-center">
        <div className="d-inline-block mt-3">
          <h1 className="anim-text display-4">Welcome to SpireBooks.</h1>
        </div>
      </Col>
    </Row>
    <Row className="align-middle justify-content-center">
      <Col xs={6} className="d-flex align-items-center flex-column text-center">
        <p>
          SpireBooks is a management decision tool, made with the intent to facilitate and help organizations
          make informed financial and strategic decisions based on a comprehensive consolidation of financial data
          and integration of non-financial factors.
        </p>
        <Button className="px-4 btn-lg" href="/signin"> Get Started </Button>
        <hr />
      </Col>
    </Row>
    <Row className="d-flex justify-content-center align-items-center text-center">
      <Col xs={4}>
        <h1>About Spire Hawaii</h1>
        <Image className="mt-2" src="/images/landing-2.jpg" width="80%" />
      </Col>
      <Col xs={6}>
        <Image src="/images/spire-logo.png" width="30%" />
        <p className="py-3">
          Spire is an <b>independent strategic advisory & accounting firm</b> that provides clarity and action to solve
          an organization’s toughest challenges. Comprised of experienced strategists, accountants, marketers,
          technologists & designers, we deploy small engagement teams that deliver big results.
        </p>
        <p>
          As a purpose-driven firm, Spire is proud of our problem-solving capabilities and our ability to solve  today’s
          most complex challenges. Collectively, as a CPA firm held to the highest standards of integrity, objectivity, and due care, these standards
          apply to all engagements including consulting and planning services, ensuring the highest commitment of
          professionalism and expertise.
        </p>
      </Col>
    </Row>
  </Container>
);

export default Landing;
