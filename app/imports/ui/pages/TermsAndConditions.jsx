import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TermsAndConditions = () => (
  <Container id="termsandconditions-page" className="pt-3 text-center">
    <Row>
      <Col id="PP" className="justify-content-center">
        <object data="/ToS-SpireBooks.pdf" type="application/pdf" width="75%" height="300%"> Hola </object>
        {/* <p>ToS Link <a href="/ToS.pdf">to the PDF!</a></p> */}
      </Col>
    </Row>
  </Container>
);

export default TermsAndConditions;
