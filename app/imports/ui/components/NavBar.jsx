import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { BoxArrowRight, CloudDownload, PersonFill, PersonPlusFill, Gear } from 'react-bootstrap-icons';
import { ROLE } from '../../api/role/Role';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

const NavBar = () => {
  const [shrink, setShrink] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  return (
    <Navbar expand="lg" style={{ height: shrink ? '75px' : '125px' }} className={`basic-nav ${shrink ? 'shrink' : ''}`}>
      <Container>
        <Navbar.Toggle aria-controls={COMPONENT_IDS.NAVBAR_COLLAPSE} />
        <Navbar.Collapse id={COMPONENT_IDS.NAVBAR_COLLAPSE}>
          <Nav className="me-auto justify-content-end basic-nav">
            <NavLink to="/"><Image className="logo-navbar" style={{ height: shrink ? '75px' : '95px' }} src="/images/spirebooks-logo.png" /></NavLink>
            {currentUser ? ([
              <Nav.Link className="nav-tabs" as={NavLink} to="/dashboard" key="dashboard" id={COMPONENT_IDS.NAVBAR_DASHBOARD}>DASHBOARD</Nav.Link>,
              <NavDropdown className="nav-tabs" title="FINANCING" id={COMPONENT_IDS.NAVBAR_FINANCING_DROPDOWN}>
                <NavDropdown.Item className="basic-nav" as={NavLink} to="/balance-sheet" id={COMPONENT_IDS.NAVBAR_ADD_MONEY}>Balance Sheet</NavDropdown.Item>
                <NavDropdown.Item
                  className="basic-nav"
                  as={NavLink}
                  to="https://www.spirehawaii.com/our-services"
                  target="_blank"
                  rel="noopener noreferrer"
                >Services
                </NavDropdown.Item>
              </NavDropdown>,
              <NavDropdown className="nav-tabs" title="AUDIT" id={COMPONENT_IDS.NAVBAR_AUDIT_DROPDOWN}>
                <NavDropdown.Item className="basic-nav" id={COMPONENT_IDS.NAVBAR_AUDIT_DROPDOWN_IMPORT} as={NavLink} to="/import">Upload</NavDropdown.Item>
              </NavDropdown>,
              <NavDropdown className="nav-tabs" title="VISUALIZE">
                <NavDropdown.Item className="basic-nav" as={NavLink} to="/compare-projections">Compare Projections</NavDropdown.Item>
              </NavDropdown>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]) ? (
              <NavDropdown className="nav-tabs" title="MANAGE" key="manage-dropdown">
                <NavDropdown.Item className="nav-tabs" key="manage-database" as={NavLink} to="/manage-database"><CloudDownload /> Database</NavDropdown.Item>
                <NavDropdown.Item className="nav-tabs" key="verification-table" as={NavLink} to="/verification-table"> Verification Table</NavDropdown.Item>
              </NavDropdown>
            ) : ''}
          </Nav>
          <Nav className="justify-content-start basic-nav">
            {currentUser === '' ? (
              <NavDropdown className="basic-nav-dropdown" id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN} title="Login">
                <NavDropdown.Item className="basic-nav" id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_IN} as={NavLink} to="/signin"><PersonFill /> Sign in</NavDropdown.Item>
                <NavDropdown.Item className="basic-nav" id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_UP} as={NavLink} to="/signup"><PersonPlusFill /> Sign up</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown className="basic-nav-dropdown" id={COMPONENT_IDS.NAVBAR_CURRENT_USER} title={currentUser}>
                <NavDropdown.Item className="basic-nav" as={NavLink} to="/user-settings"><Gear /> User Settings</NavDropdown.Item>
                <NavDropdown.Item className="basic-nav" id={COMPONENT_IDS.NAVBAR_SIGN_OUT} as={NavLink} to="/signout"><BoxArrowRight /> Sign out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
