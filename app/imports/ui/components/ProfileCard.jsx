import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Image, ListGroup } from 'react-bootstrap';

/** Renders a single row in the Profile card. */
const ProfileCard = ({ profile }) => (
  <Col>
    <Card style={{ borderRadius: '10px' }} className="text-center h-100 pb-3 participant">
      <Card.Header className="text-center formCSS">
        <ListGroup.Item className="p-4">
          <Image
            style={{
              maxWidth: '100%',
              width: 'auto',
              maxHeight: '100px',
              height: 'auto',
              borderRadius: '10px' }}
            src={profile.image}
            alt="Student Image"
          />
          <Card.Title className="text-center">{profile.name}</Card.Title>
          <Card.Text className="text-center">Owner: {profile.owner}</Card.Text>
          <Card.Text className="text-center">Modified: {profile.modified}</Card.Text>
        </ListGroup.Item>
      </Card.Header>
      <Card.Body>
        <Button value="Do nothing" />
      </Card.Body>
    </Card>
  </Col>
);

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.string,
    modified: PropTypes.string,
    image: PropTypes.string,
  }),
};

ProfileCard.defaultProps = {
  profile: {
    name: 'N/A',
    owner: 'N/A',
    modified: new Date(),
    image: 'N/A',
  },
};

export default ProfileCard;
