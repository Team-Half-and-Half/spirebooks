import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => {
  const divStyle = { paddingTop: '15px' };
  return (
    <footer className="mt-auto gradient-colors footer-style">
      <Container style={divStyle}>
        <Row className="text-center">
          <Col className="text-center">
            <h5 className="text-style">DASHBOARD</h5>
            {' '}
            <br />
            <a href="/tos" className="text-style link">
              *TEXT HERE*
            </a>
            <br />
            <br />
            <a href="/tos" className="text-style link">
              *TEXT HERE*
            </a>
            <br />
            <br />
            <a href="/tos" className="text-style link">
              *TEXT HERE*
            </a>
          </Col>
          <Col className="text-center">
            <h5 className="text-style">FINANCING</h5>
            {' '}
            <br />
            <a href="/tos" className="text-style link">
              *TEXT HERE*
            </a>
            <br />
            <br />
            <a href="/tos" className="text-style link">
              *TEXT HERE*
            </a>
            <br />
            <br />
            <a href="/tos" className="text-style link">
              *TEXT HERE*
            </a>
          </Col>
          <Col className="text-center">
            <h5 className="text-style">AUDIT</h5>
            {' '}
            <br />
            <a href="/tos" className="text-style link">
              *TEXT HERE*
            </a>
            <br />
            <br />
            <a href="/tos" className="text-style link">
              *TEXT HERE*
            </a>
            <br />
            <br />
            <a href="/tos" className="text-style link">
              *TEXT HERE*
            </a>
          </Col>
          <Col className="text-center">
            <h5 className="text-style">VISUALIZE</h5>
            {' '}
            <br />
            <a href="/tos" className="text-style link">
              *TEXT HERE*
            </a>
            <br />
            <br />
            <a href="/tos" className="text-style link">
              *TEXT HERE*
            </a>
            <br />
            <br />
            <a href="/tos" className="text-style link">
              *TEXT HERE*
            </a>
          </Col>
          <Col className="text-center">
            <h5 className="text-style">SOMETHING HERE</h5>
            {' '}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
