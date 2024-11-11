import React from 'react';
import { Container, Row } from 'react-bootstrap';
import footerData from './footerData.js';
import FooterColumn from './FooterColumns.jsx';

/** Spire Footer columns for Financing, Audit, Visualize, and Contact */
const Footer = () => (
  <footer className="mt-auto gradient-colors">
    <Container className="div-style">
      <Row className="text-center">
        <>
          {footerData.map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              links={section.links}
              isAdminOnly={section.isAdminOnly}
            />
          ))}
        </>
      </Row>
    </Container>
  </footer>
);

export default Footer;
