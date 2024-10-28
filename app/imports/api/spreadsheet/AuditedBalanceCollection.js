import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';
import { AuditedBalanceSchema } from '../schemas/AuditedBalanceSchema';

export const auditedBalancePublications = {
  auditedBalance: 'auditedBalance',
  auditedBalanceAdmin: 'auditedBalanceAdmin',
};
class AuditedBalanceCollection extends BaseCollection {
  constructor() {
    super('AuditedBalance', AuditedBalanceSchema);
  }

  /**
   * @param owner The email tied to the owner of the document.
   * @param green Boolean indicating if column is a green input year.
   * @param CashAndCashEquivalents Sub document for cash and cash equivalent values.
   * @param OtherAssets Sub document for other asset values.
   * @param Liabilities Sub document for liability values.
   * @param NetPosition Sub document for net position values.
   * @return {String} the docID of the new document.
   */
  define({ year, owner, green, CashAndCashEquivalents, OtherAssets, Liabilities, NetPosition }) {
    const docID = this._collection.insert({
      year, owner, green,
      CashAndCashEquivalents,
      OtherAssets,
      Liabilities,
      NetPosition,
    });
    return docID;
  }

  /**
   * Updates the given document.
   * @param docID the id of the document to update.
   * @param owner The email tied to the owner of the document.
   * @param green Boolean indicating if column is a green input year.
   * @param CashAndCashEquivalents Sub document for cash and cash equivalent values.
   * @param OtherAssets Sub document for other asset values.
   * @param Liabilities Sub document for liability values.
   * @param NetPosition Sub document for net position values.

   * @return {String} the docID of the new document.
   */
  update(docID, { CashAndCashEquivalents, OtherAssets, Liabilities, NetPosition }) {
    const updateData = {
      CashAndCashEquivalents,
      OtherAssets,
      Liabilities,
      NetPosition,
    };
    this._collection.update(docID, { $set: updateData });
  }

  /**
   * A stricter form of remove that throws an error if the document or docID could not be found in this collection.
   * @param { String | Object } name A document or docID in this collection.
   * @returns true
   */
  removeIt(name) {
    const doc = this.findDoc(name);
    check(doc, Object);
    this._collection.remove(doc._id);
    return true;
  }

  /**
   * Default publication method for entities.
   * It publishes the entire collection for admin and just the AuditedBalance associated to an owner.
   */
  publish() {
    if (Meteor.isServer) {
      // get the AuditedBalanceCollection instance.
      const instance = this;
      /** This subscription publishes only the documents associated with the logged in user */
      Meteor.publish(auditedBalancePublications.auditedBalance, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      /** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
      Meteor.publish(auditedBalancePublications.auditedBalanceAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.ADMIN)) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  /**
   * Subscription method for AuditedBalance owned by the current user.
   */
  subscribeAuditedBalance() {
    if (Meteor.isClient) {
      return Meteor.subscribe(auditedBalancePublications.auditedBalance);
    }
    return null;
  }

  /**
   * Subscription method for admin users.
   * It subscribes to the entire collection.
   */
  subscribeAuditedBalanceAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(auditedBalancePublications.auditedBalanceAdmin);
    }
    return null;
  }

  /**
   * Default implementation of assertValidRoleForMethod. Asserts that userId is logged in as an Admin or User.
   * This is used in the define, update, and removeIt Meteor methods associated with each class.
   * @param userId The userId of the logged in user. Can be null or undefined
   * @throws { Meteor.Error } If there is no logged in user, or the user is not an Admin or User.
   */
  assertValidRoleForMethod(userId) {
    this.assertRole(userId, [ROLE.ADMIN, ROLE.USER]);
  }

  /**
   * Returns an object representing the definition of docID in a format appropriate to the restoreOne or define function.
   * @param docID
   * @return {{
   *   year: number, owner: string, green: boolean,
   *   CashAndCashEquivalents: Object, OtherAssets: Object, Liabilities: Object,
   *   NetPosition: Object,
   * }}
   */
  dumpOne(docID) {
    const {
      year, owner, green,
      CashAndCashEquivalents, OtherAssets, Liabilities, NetPosition,
    } = this.findDoc(docID);
    return { year, owner, green, CashAndCashEquivalents, OtherAssets, Liabilities, NetPosition };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const AuditedBalance = new AuditedBalanceCollection();
