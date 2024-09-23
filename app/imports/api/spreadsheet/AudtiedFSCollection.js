import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
/**
 * The AuditedFSCollection.
 *
 */
class AuditedFSCollection {
  constructor() {
    // The name of this collection.
    this.name = 'AuditedFSCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
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
    const ColumnData = new SimpleSchema({
      year: {
        type: Number,
        optional: true,
      },
      CashAndCashEquivalents: {
        type: CashAndCashEquivalents,
        optional: false,
      },
      OtherAssets: {
        type: OtherAssets,
        optional: false,
      },
      Liabilities: {
        type: Liabilities,
        optional: false,
      },
      NetAssets: {
        type: NetAssets,
        optional: false,
      },
      ProgramRevenues: {
        type: ProgramRevenues,
        optional: false,
      },
      GeneralRevenues: {
        type: GeneralRevenues,
        optional: false,
      },
      Expenditures: {
        type: Expenditures,
        optional: false,
      },
      FundBalances: {
        type: FundBalances,
        optional: false,
      },
    });
    // Main schema for the AuditedFSCollection
    this.schema = new SimpleSchema({
      owner: String,
      ActualYear: {
        type: Array,
        optional: true,
      },
      'ActualYear.$': ColumnData,
      ActualYearGreen: {
        type: Array,
        optional: true,
      },
      'ActualYearGreen.$': ColumnData,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}
export const AuditedFS = new AuditedFSCollection();

