import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';

const TermsAndConditions = () => (
  <Container id="termsandconditions-page" className="pt-3 text-center">
    <Row>
      <Col id="PP" className="justify-content-center">
        <h1> Terms and Conditions </h1>
        <object data="/ToS-SpireBooks.pdf" type="application/pdf" width="75%" height="300%"> <LoadingSpinner /> </object>
        {/* <p>ToS Link <a href="/ToS.pdf">to the PDF!</a></p> */}
      </Col>
    </Row>
  </Container>
);

export default TermsAndConditions;
