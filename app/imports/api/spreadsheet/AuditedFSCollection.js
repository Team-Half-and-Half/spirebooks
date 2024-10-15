import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';
import { AuditedFSSchema } from '../schemas/AuditedFSSchema';

export const auditedFSPublications = {
  auditedFS: 'auditedFS',
  auditedFSAdmin: 'auditedFSAdmin',
};
class AuditedFSCollection extends BaseCollection {
  constructor() {
    super('AuditedFS', AuditedFSSchema);
  }

  /**
   * Defines a new AuditedFS item.
   * @param year Actual year value of column.
   * @param owner The email tied to the owner of the document.
   * @param green Boolean indicating if column is a green input year.
   * @param CashAndCashEquivalents Sub document for cash and cash equivalent values.
   * @param OtherAssets Sub document for other asset values.
   * @param Liabilities Sub document for liability values.
   * @param NetAssets Sub document for net asset values.
   * @param ProgramRevenues Sub document for program revenue values.
   * @param GeneralRevenues Sub document for general revenue values.
   * @param Expenditures Sub document for expenditure values.
   * @param FundBalances Sub document for fund balance values.
   *
   * @return {String} the docID of the new document.
   */
  define({ year, owner, green, CashAndCashEquivalents, OtherAssets, Liabilities,
    NetAssets, ProgramRevenues, GeneralRevenues, Expenditures, FundBalances }) {
    const docID = this._collection.insert({
      year, owner, green,
      CashAndCashEquivalents,
      OtherAssets,
      Liabilities,
      NetAssets,
      ProgramRevenues,
      GeneralRevenues,
      Expenditures,
      FundBalances,
    });
    return docID;
  }

  /**
   * Updates the given document.
   * @param docID the id of the document to update.
   * @param CashAndCashEquivalents Sub document for cash and cash equivalent values.
   * @param OtherAssets Sub document for other asset values.
   * @param Liabilities Sub document for liability values.
   * @param NetAssets Sub document for net asset values.
   * @param ProgramRevenues Sub document for program revenue values.
   * @param GeneralRevenues Sub document for general revenue values.
   * @param Expenditures Sub document for expenditure values.
   * @param FundBalances Sub document for fund balance values.
   * @return {String} the docID of the new document.
   */
  update(docID, { CashAndCashEquivalents, OtherAssets, Liabilities, NetAssets, ProgramRevenues, GeneralRevenues, Expenditures, FundBalances }) {
    const updateData = {
      CashAndCashEquivalents,
      OtherAssets,
      Liabilities,
      NetAssets,
      ProgramRevenues,
      GeneralRevenues,
      Expenditures,
      FundBalances };
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
   * It publishes the entire collection for admin and just the AuditedFS associated to an owner.
   */
  publish() {
    if (Meteor.isServer) {
      // get the AuditedFSCollection instance.
      const instance = this;
      /** This subscription publishes only the documents associated with the logged in user */
      Meteor.publish(auditedFSPublications.auditedFS, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      /** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
      Meteor.publish(auditedFSPublications.auditedFSAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.ADMIN)) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  /**
   * Subscription method for AuditedFS owned by the current user.
   */
  subscribeAuditedFS() {
    if (Meteor.isClient) {
      return Meteor.subscribe(auditedFSPublications.auditedFS);
    }
    return null;
  }

  /**
   * Subscription method for admin users.
   * It subscribes to the entire collection.
   */
  subscribeAuditedFSAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(auditedFSPublications.auditedFSAdmin);
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
   *   CashAndCashEquivalents: Object,
   *   OtherAssets: Object,
   *   Liabilities: Object,
   *   NetAssets: Object,
   *   ProgramRevenues: Object,
   *   GeneralRevenues: Object,
   *   Expenditures: Object,
   *   FundBalances: Object
   * }}
   */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const year = doc.year;
    const owner = doc.owner;
    const green = doc.green;
    const cashAndCashEquivalents = doc.CashAndCashEquivalents;
    const otherAssets = doc.OtherAssets;
    const liabilities = doc.Liabilities;
    const netAssets = doc.NetAssets;
    const programRevenues = doc.ProgramRevenues;
    const generalRevenues = doc.GeneralRevenues;
    const expenditures = doc.Expenditures;
    const fundBalances = doc.FundBalances;
    return { year, owner, green, cashAndCashEquivalents, otherAssets, liabilities, netAssets, programRevenues, generalRevenues, expenditures, fundBalances };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const AuditedFS = new AuditedFSCollection();
