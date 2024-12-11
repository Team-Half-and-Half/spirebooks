import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types'; // Import PropTypes
import { Container } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { AutoForm, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useNavigate } from 'react-router-dom';
import { Profile } from '../../api/profile/ProfileCollection';
import LoadingSpinner from '../components/LoadingSpinner';

const ProfileSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Profile Name',
  },
  image: {
    type: String,
    label: 'Image URL',
    optional: true,
  },
  members: {
    type: Array,
    label: 'Members',
    optional: true,
  },
  'members.$': {
    type: String,
    label: 'Member Email',
  },
});

const ProfileEditPage = ({ profileId }) => {
  const { profile, ready } = useTracker(() => {
    const subscription = Meteor.subscribe('Profiles');
    const rdy = subscription.ready();
    const profileData = Profile.findOne(profileId);

    return {
      profile: profileData,
      ready: rdy,
    };
  }, [profileId]);

  const navigate = useNavigate();

  const submit = () => {
    // const { name, image, members } = data;
    // const collectionName = Profile.getCollectionName();
    // const updateData = { id: profileId, name, image, members };
    // updateMethod.callPromise({ collectionName, updateData })
    //   .then(() => swal('Success', 'Item updated successfully', 'success'));
    navigate('/profile');
  };

  return ready ? (
    <Container className="mt-4 p-5">
      <h1>Edit Profile</h1>
      {profile && (
        <AutoForm
          schema={new SimpleSchema2Bridge(ProfileSchema)}
          model={profile} // Pre-fill the form with the current profile data
          onSubmit={submit}
        >
          <TextField name="name" label="Name" />
          <TextField name="image" label="Image" />
          <TextField name="members" label="Members" />
          <SubmitField value="Submit" />
        </AutoForm>
      )}
    </Container>
  ) : (
    <LoadingSpinner />
  );
};

ProfileEditPage.propTypes = {
  profileId: PropTypes.string.isRequired,
};

export default ProfileEditPage;
