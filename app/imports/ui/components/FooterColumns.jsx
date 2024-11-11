import React from 'react';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { ROLE } from '../../api/role/Role';
import image from './footerData';

/** Footer layout that maps footerData values to the rows of each column */
const FooterColumn = ({ title, links, isAdminOnly }) => {
  if (isAdminOnly && !Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN])) return null;

  return (
    <Col className="text-center">
      <h5 className="text-style footer-spacing">{title}</h5>
      {title === '' && image && (
        <div>
          <a href={image.href}>
            <Image className="logo-footer" src="images/spirebooks-logo.png" alt={image.alt} />
          </a>
        </div>
      )}
      <>
        {links.map((link) => (
          <div key={link.label} className="pb-sm-1">
            <a
              href={link.href}
              className="text-style link"
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : ''}
            >
              {link.icon && React.createElement(link.icon)}&nbsp;{link.label}
            </a>
            <br />
          </div>
        ))}
      </>
    </Col>
  );
};

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      external: PropTypes.bool,
      icon: PropTypes.elementType,
      isAdminOnly: PropTypes.bool,
    }),
  ).isRequired,
  isAdminOnly: PropTypes.bool,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

FooterColumn.defaultProps = {
  isAdminOnly: false,
  image: null,
};

export default FooterColumn;
