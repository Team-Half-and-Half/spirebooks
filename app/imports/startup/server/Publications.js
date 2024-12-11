import { Meteor } from 'meteor/meteor';
import { MATPCollections } from '../../api/matp/MATPCollections';
import { UserVerification } from '../../api/user/UserVerificationCollection';
import { DatabaseConfiguration } from '../../api/dbconfig/DatabaseConfigurationCollection';
import { Profile } from '../../api/profile/ProfileCollection'; // Import the Profile collection

// Call publish for all the relevant collections.
MATPCollections.collections.forEach(c => c.publish());

// Call publish to configuration settings for the database collection.
Meteor.publish(DatabaseConfiguration.userPublicationName, () => DatabaseConfiguration.collection.find());

// Publish the Profile collection's publications
Profile.publish();

// alanning:roles publication
// Recommended code to publish roles for each user.
// eslint-disable-next-line consistent-return
Meteor.publish(UserVerification.userPublicationName, () => UserVerification.collection.find());

Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
