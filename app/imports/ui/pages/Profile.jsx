import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Row, Container } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import LoadingSpinner from '../components/LoadingSpinner';
import ProfileCard from '../components/ProfileCard';
import { Profile } from '../../api/profile/ProfileCollection';

const ProfilePage = () => {
  const { profiles, ready } = useTracker(() => {
    const subscription = Meteor.subscribe('ProfilesAdmin'); // Subscription
    const rdy = subscription.ready(); // Set ready based on subscription status
    const profileData = Profile.find().fetch().map(profile => ({
      ...profile,
      modified: `${profile.modified.toLocaleDateString('en-US')} ${profile.modified.toLocaleTimeString('en-US')}`,
    }));
    console.log(profileData);
    return { profiles: profileData, ready: rdy }; // Return the fetched profiles and ready status
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
  ) : (
    <LoadingSpinner />
  );
};

export default ProfilePage;
