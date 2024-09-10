import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
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
        <Button className="px-4"> Request Demo </Button>
        <hr />
      </Col>
    </Row>
    <Row>
      <Col xs={{ span: 4, offset: 1 }}>
        <h1>About Spire Hawaii</h1>
      </Col>
      <Col xs={6} className="d-flex align-items-center flex-column text-center">
        <p>
          Spire is an <b>independent strategic advisory & accounting firm</b> that provides clarity and action to solve
          an organization’s toughest challenges. Comprised of experienced strategists, accountants, marketers,
          technologists & designers, we deploy small engagement teams that deliver big results.
        </p>
      </Col>
    </Row>
  </Container>
);

export default Landing;
