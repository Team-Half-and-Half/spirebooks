import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const Landing = () => (
  <Container fluid id={PAGE_IDS.LANDING} className="py-3">
    <Row className="full-width">
      <div className="top-img justify-content-center text-center" />
    </Row>
    <Row className="align-middle justify-content-center">
      <Col xs={12} className="text-center">
        <div className="d-inline-block">
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
        <hr />
      </Col>
    </Row>

  </Container>
);

export default Landing;
