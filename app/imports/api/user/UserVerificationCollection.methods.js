import { Meteor } from 'meteor/meteor';
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { UserVerification } from './UserVerificationCollection';

export const updateVerification = new ValidatedMethod({
  name: 'UserVerification.updateVerification',
  mixins: [CallPromiseMixin],
  validate: null,
  run({ user }) {
    if (Meteor.isServer) {
      UserVerification.collection.update(user._id, { $set: { verification: !user.verification } });
    }
  },
});
