import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { GeoAlt, Telephone, EnvelopeAt } from 'react-bootstrap-icons';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';
import { ROLE } from '../../api/role/Role';

/** Spire Footer columns for Financing, Audit, Visualize, and Contact */
const Footer = () => (
  <footer className="mt-auto gradient-colors">
    <Container className="div-style">
      <Row className="text-center">
        <Col className="text-center">
          <h5 className="text-style footer-spacing">FINANCING</h5>
          <a href="/add-money" className="text-style link">
            Balance Sheet
          </a>
          <br />
          <br />
          <a
            href="https://www.spirehawaii.com/our-services"
            className="text-style link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Services
          </a>
        </Col>
        <Col className="text-center">
          <h5 className="text-style footer-spacing">AUDIT</h5>
          <a href="/import" className="text-style link">
            Upload
          </a>
          <br />
          <br />
          {Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]) && (
            <>
              <a href="/verification-table" className="text-style link">
                Verification Table
              </a>
              <br />
              <br />
              <a href="/manage-database" className="text-style link">
                Manage Database
              </a>
            </>
          )}
        </Col>
        <Col className="text-center">
          <h5 className="text-style footer-spacing">VISUALIZE</h5>
          <a href="/list" className="text-style link">
            Dashboard
          </a>
          <br />
          <br />
          <a href="/compare-projections" className="text-style link">
            Compare Projections
          </a>
          <br />
          <br />
          <a href="/manage-projections" className="text-style link">
            Manage Projections
          </a>
        </Col>
        <Col className="text-center">
          <h5 className="text-style footer-spacing">CONTACT</h5>
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
          <a href="/home">
            <Image className="logo-footer" src="/images/spirebooks-logo.png" />
          </a>
          <br />
          <a href="/tos" className="text-style link" id={COMPONENT_IDS.FOOTER_TOS}>
            Terms of Service
          </a>
          {' '}
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
