import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';

export const auditedFSPublications = {
  auditedFS: 'auditedFS',
  auditedFSAdmin: 'auditedFSAdmin',
};
const FundBalances = new SimpleSchema({
  beginningOfYear: {
    type: Number,
    optional: true,
  },
  restatementAdjustment: {
    type: Number,
    optional: true,
  },
  netPositionEndOfYear: {
    type: Number,
    optional: true,
  },
});
const Expenditures = new SimpleSchema({
  management: {
    type: Number,
    optional: true,
  },
  supportServices: {
    type: Number,
    optional: true,
  },
  beneficiaryAdvocacy: {
    type: Number,
    optional: true,
  },
  depreciation: {
    type: Number,
    optional: true,
  },
  limitedLiabilityA: {
    type: Number,
    optional: true,
  },
  limitedLiabilityB: {
    type: Number,
    optional: true,
  },
  totalExpenses: {
    type: Number,
    optional: true,
  },
  excessOfRevenue: {
    type: Number,
    optional: true,
  },
  proceedsFromDebt: {
    type: Number,
    optional: true,
  },
  proceedsFromCapitalLease: {
    type: Number,
    optional: true,
  },
  netTransfersOtherFunds: {
    type: Number,
    optional: true,
  },
  changeInNetAssets: {
    type: Number,
    optional: true,
  },
});
const GeneralRevenues = new SimpleSchema({
  appropriations: {
    type: Number,
    optional: true,
  },
  trust: {
    type: Number,
    optional: true,
  },
  interestInvestmentLossesEarnings: {
    type: Number,
    optional: true,
  },
  newspaperAds: {
    type: Number,
    optional: true,
  },
  donationsAndOther: {
    type: Number,
    optional: true,
  },
  limitedLiabilityB: {
    type: Number,
    optional: true,
  },
  nonImposedFringeBenefits: {
    type: Number,
    optional: true,
  },
  totalGeneralRevenue: {
    type: Number,
    optional: true,
  },
  totalRevenue: {
    type: Number,
    optional: true,
  },
});
const ProgramRevenues = new SimpleSchema({
  chargesForServices: {
    type: Number,
    optional: true,
  },
  operatingGrants: {
    type: Number,
    optional: true,
  },
  interestInvestmentsEarnings: {
    type: Number,
    optional: true,
  },
  totalProgramRevenues: {
    type: Number,
    optional: true,
  },
});
const NetAssets = new SimpleSchema({
  investedCapitalAssets: {
    type: Number,
    optional: true,
  },
  restrictedFederal: {
    type: Number,
    optional: true,
  },
  unrestricted: {
    type: Number,
    optional: true,
  },
  totalNetAssets: {
    type: Number,
    optional: true,
  },
  totalLiabilitiesNetAssets: {
    type: Number,
    optional: true,
  },
});
const Liabilities = new SimpleSchema({
  accountPayableAccrued: {
    type: Number,
    optional: true,
  },
  dueToFund: {
    type: Number,
    optional: true,
  },
  dueToOther: {
    type: Number,
    optional: true,
  },
  longTermWithin: {
    type: Number,
    optional: true,
  },
  longTermAfter: {
    type: Number,
    optional: true,
  },
  totalLiabilities: {
    type: Number,
    optional: true,
  },
  deferredInflowsResources: {
    type: Number,
    optional: true,
  },
  deferredInflowsOPED: {
    type: Number,
    optional: true,
  },
  totalLiabilitiesDeferredInflows: {
    type: Number,
    optional: true,
  },
});
const OtherAssets = new SimpleSchema({
  accountsReceivable: {
    type: Number,
    optional: true,
  },
  dueFromOtherFund: {
    type: Number,
    optional: true,
  },
  interestDividendsReceivable: {
    type: Number,
    optional: true,
  },
  inventoryPrepaidOtherAssets: {
    type: Number,
    optional: true,
  },
  notesWithinOneYear: {
    type: Number,
    optional: true,
  },
  notesAfterOneYear: {
    type: Number,
    optional: true,
  },
  securityDeposits: {
    type: Number,
    optional: true,
  },
  investments: {
    type: Number,
    optional: true,
  },
  capitalAssetNet: {
    type: Number,
    optional: true,
  },
  totalOtherAssets: {
    type: Number,
    optional: true,
  },
  deferredOutflows: {
    type: Number,
    optional: true,
  },
  totalAssetsDeferred: {
    type: Number,
    optional: true,
  },
});
const CashAndCashEquivalents = new SimpleSchema({
  pettyCash: {
    type: Number,
    optional: true,
  },
  cash: {
    type: Number,
    optional: true,
  },
  cashInBank: {
    type: Number,
    optional: true,
  },
  cashHeldInvestmentManager: {
    type: Number,
    optional: true,
  },
  restrictedCash: {
    type: Number,
    optional: true,
  },
  CashAndCashEquivalentsSum: {
    type: Number,
    optional: true,
  },
});

class AuditedFSCollection extends BaseCollection {
  constructor() {
    super('AuditedFS', new SimpleSchema({
      year: Number,
      owner: String,
      green: Boolean,
      CashAndCashEquivalents: {
        type: CashAndCashEquivalents,
      },
      OtherAssets: {
        type: OtherAssets,
      },
      Liabilities: {
        type: Liabilities,
      },
      NetAssets: {
        type: NetAssets,
      },
      ProgramRevenues: {
        type: ProgramRevenues,
      },
      GeneralRevenues: {
        type: GeneralRevenues,
      },
      Expenditures: {
        type: Expenditures,
      },
      FundBalances: {
        type: FundBalances,
      },
    }));
  }

  /**
   * Defines a new AuditedFS item.
   * @param year Actual year number of column.
   * @param owner  the owner of the item.
   * @param green boolean indicating if column is a green year..
   * @return {String} the docID of the new document.
   */
  // eslint-disable-next-line no-shadow
  define({ year, owner, green, CashAndCashEquivalents, OtherAssets, Liabilities, NetAssets, ProgramRevenues, GeneralRevenues, Expenditures, FundBalances }) {
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
   */
  // eslint-disable-next-line no-shadow
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
   * @return
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
