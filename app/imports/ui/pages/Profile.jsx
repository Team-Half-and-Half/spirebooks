import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Row, Container } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import LoadingSpinner from '../components/LoadingSpinner';
import ProfileCard from '../components/ProfileCard';
import { Profile } from '../../api/profile/ProfileCollection';

const ProfilePage = () => {
  const { profiles, ready } = useTracker(() => {
    const user = Meteor.user();
    if (!user) {
      return { profiles: [], ready: false };
    }
    const userEmail = user.username;
    const subscription = Meteor.subscribe('Profiles', user);
    const rdy = subscription.ready();
    const profileData = Profile.find({
      $or: [
        { owner: userEmail },
        { members: userEmail },
      ],
    }).fetch().map(profile => ({
      ...profile,
      modified: `${profile.modified.toLocaleDateString('en-US')} ${profile.modified.toLocaleTimeString('en-US')}`,
    }));
    return { profiles: profileData, ready: rdy };
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
