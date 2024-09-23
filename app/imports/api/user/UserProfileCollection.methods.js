import { Meteor } from 'meteor/meteor';
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Accounts } from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';
import { UserProfiles } from './UserProfileCollection';

export const signUpNewUserMethod = new ValidatedMethod({
  name: 'UserProfiles.SignupNewUser',
  mixins: [CallPromiseMixin],
  validate: null,
  run({ email, firstName, lastName, password }) {
    if (Meteor.isServer) {
      UserProfiles.define({ email, firstName, lastName, password });
    }
  },
});

// method for users to update password through UserSettings.jsx
export const updatePasswordMethod = new ValidatedMethod({
  name: 'UserProfiles.UpdatePassword',
  mixins: [CallPromiseMixin],
  validate: new SimpleSchema({
    password: { type: String, min: 6 },
  }).validator(),
  run({ password }) {
    if (Meteor.isServer) {
      const userId = this.userId;

      if (!userId) {
        throw new Meteor.Error('User not logged in');
      }

      // Update the user's password
      Accounts.setPassword(userId, password);
    }
  },
});

export const updateCompanyNameMethod = new ValidatedMethod({
  name: 'UserProfiles.UpdateCompanyName',
  mixins: [CallPromiseMixin],
  validate: new SimpleSchema({
    companyName: { type: String },
  }).validator(),
  run({ companyName }) {
    if (Meteor.isServer) {
      const userId = this.userId;

      if (!userId) {
        throw new Meteor.Error('User not logged in');
      }

      // Update the company name in the user's profile
      Meteor.users.update(userId, { $set: { 'profile.companyName': companyName } });
    }
  },
});
