import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

/** Render a Not Authorized page if the user is not authorized access. */
const NotAuthorized = () => (
  <Container id={PAGE_IDS.NOT_AUTHORIZED} className="py-3">
    <Row className="justify-content-center">
      <Col xs={4} className="text-center">
        <h2>
          <p>Not Authorized</p>
        </h2>
      </Col>
    </Row>
  </Container>
);

export default NotAuthorized;
