import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { GeoAlt, Telephone, EnvelopeAt } from 'react-bootstrap-icons';

/** Spire Footer columns for Financing, Audit, Visualize, and Contact */
const Footer = () => (
  <footer className="mt-auto gradient-colors">
    <Container className="div-style">
      <Row className="text-center">
        <Col className="text-center">
          <h5 className="text-style">FINANCING</h5>
          {' '}
          <br />
          <a href="/add-money" className="text-style link">
            Balance Sheet
          </a>
          <br />
          <br />
          <a href="/tos" className="text-style link">
            *
          </a>
          <br />
          <br />
          <a href="/tos" className="text-style link">
            *
          </a>
        </Col>
        <Col className="text-center">
          <h5 className="text-style">AUDIT</h5>
          {' '}
          <br />
          <a href="/import" className="text-style link">
            Upload
          </a>
          <br />
          <br />
          <a href="/tos" className="text-style link">
            *
          </a>
          <br />
          <br />
          <a href="/tos" className="text-style link">
            *
          </a>
        </Col>
        <Col className="text-center">
          <h5 className="text-style">VISUALIZE</h5>
          {' '}
          <br />
          <a href="/" className="text-style link">
            Chart View
          </a>
          <br />
          <br />
          <a href="/tos" className="text-style link">
            *
          </a>
          <br />
          <br />
          <a href="/tos" className="text-style link">
            *
          </a>
        </Col>
        <Col className="text-center">
          <h5 className="text-style">CONTACT</h5>
          {' '}
          <br />
          <a
            href="https://www.google.com/search?q=700+Bishop+Street+Suite+2001+Honolulu+Hawaii+96813"
            className="text-style link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GeoAlt />&nbsp;700 Bishop Street, Suite 2001 Honolulu, Hawaii 96813
          </a>
          <br />
          <br />
          <a href="/tel:+18085360066" className="text-style link">
            <Telephone />&nbsp;(808) 536-0066
          </a>
          <br />
          <a href="mailto:contactus@spirehi.com" className="text-style link">
            <EnvelopeAt />&nbsp;contactus@spirehi.com
          </a>
        </Col>
        <Col className="text-center">
          <br />
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <a href="/home">
            <Image className="logo-footer" src="/images/spirebooks-logo.png" />
          </a>
          <br />
          <br />
          <a href="/tos" className="text-style link">
            Terms of Service
          </a>
          {' '}
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
