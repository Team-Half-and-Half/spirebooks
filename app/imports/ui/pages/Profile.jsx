import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Container } from 'semantic-ui-react';
import { Row } from 'react-bootstrap';
import { Profile } from '../../api/profile/ProfileCollection';
import LoadingSpinner from '../components/LoadingSpinner';
import ProfileCard from '../components/ProfileCard';

const ProfilePage = () => {
  const { profiles, ready } = useTracker(() => {
    const profile = Profile.subscribeProfile();
    const rdy = profile.ready();
    return {
      profiles: profile,
      ready: rdy,
    };
  }, []);

  return ready ? (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Profiles</h1>
      <Row>
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </Row>
    </Container>

  ) : <LoadingSpinner />;
};

export default ProfilePage;
