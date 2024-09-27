import { Meteor } from 'meteor/meteor';
import { MATPCollections } from '../../api/matp/MATPCollections';
import { AuditedBalance } from '../../api/spreadsheet/AuditedBalanceCollection';
import { BudgetPL } from '../../api/spreadsheet/BudgetPLCollection';
import { UserVerification } from '../../api/user/UserVerificationCollection';
import { AuditedFS } from '../../api/spreadsheet/AudtiedFSCollection';

// Call publish for all the collections.
MATPCollections.collections.forEach(c => c.publish());

// alanning:roles publication
// Recommended code to publish roles for each user.
// eslint-disable-next-line consistent-return
Meteor.publish(AuditedBalance.userPublicationName, () => AuditedBalance.collection.find());
Meteor.publish(BudgetPL.userPublicationName, () => BudgetPL.collection.find());
Meteor.publish(UserVerification.userPublicationName, () => UserVerification.collection.find());
Meteor.publish(AuditedFS.userPublicationName, () => AuditedFS.collection.find());

Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
