import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Image, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const editProfile = () => {
    navigate(`/editprofile/${profile._id}`); // Navigate to the edit page with profileId
  };

  const dashBoard = () => {
    navigate('/dashboard'); // Navigate to the edit page with profileId
  };

  return (
    <Col>
      <Card style={{ borderRadius: '10px', maxWidth: '300px' }} className="text-center h-100 pb-3 participant">
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
              alt="Profile Image"
            />
            <Card.Title className="text-center">{profile.name}</Card.Title>
            <Card.Text className="text-center">Owner: {profile.owner}</Card.Text>
            <Card.Text className="text-center">Modified: {profile.modified}</Card.Text>
          </ListGroup.Item>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-center"><strong>Members:</strong></Card.Text>
          <ListGroup variant="flush">
            {profile.members.length > 0 ? (
              profile.members.map((member, index) => (
                <ListGroup.Item key={index} className="text-center">
                  {member}
                </ListGroup.Item>
              ))
            ) : (
              <Card.Text className="text-center">No members.</Card.Text>
            )}
          </ListGroup>
          <Button onClick={editProfile} variant="primary">
            Edit Profile
          </Button>
          <Button onClick={dashBoard} variant="primary">
            Dashboard
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    owner: PropTypes.string,
    modified: PropTypes.string,
    image: PropTypes.string,
    members: PropTypes.arrayOf(String),
  }),
};

ProfileCard.defaultProps = {
  profile: {
    name: 'N/A',
    owner: 'N/A',
    modified: new Date(),
    image: 'N/A',
    members: [],
  },
};

export default ProfileCard;
