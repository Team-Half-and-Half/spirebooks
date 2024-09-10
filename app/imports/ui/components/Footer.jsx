import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => {
  const divStyle = { paddingTop: '15px' };
  return (
    <footer className="mt-auto bg-light">
      <Container style={divStyle}>
        <Row xs={2}>
          <Col className="text-center">
            Team Half &amp; Half <br />
            <a href="https://team-half-and-half.github.io">Project Page</a><br />
            <a href="/tos">Terms of Services</a>
          </Col>
          <Col className="text-center">
            Department of Information and Computer Sciences <br />
            University of Hawaii at Manoa<br />
            Honolulu, HI 96822 <br />
            <a href="http://ics-software-engineering.github.io/meteor-application-template-production">Template Home Page</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
