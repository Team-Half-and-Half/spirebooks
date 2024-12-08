import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import swal from 'sweetalert';
import { Container, Grid, Card, Button, Icon, Header } from 'semantic-ui-react';
import { Profile } from '../../api/profile/ProfileCollection';
import LoadingSpinner from '../components/LoadingSpinner';

const ProfilePage = () => {
  const currentUserID = Meteor.userId();
  const { profiles, ready } = useTracker(() => {
    const profile = Profile.subscribeProfile();
    const rdy = profile.ready();
    return {
      profiles: profile,
      ready: rdy,
    };
  }, []);

  return ready ? (
    <Container />

  ) : <LoadingSpinner />;
};

export default ProfilePage;
