import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';

// Data Input Schema/Bridge to be used for InputClientInfo.jsx
const DataInputSchema = new SimpleSchema({
  companyName: {
    type: String,
  },
  year: {
    type: Number,
    defaultValue: 1,
    min: 1,
  },
  // Cash and Cash Equivalents
  pettyCash: {
    type: Number,
    min: 0,
  },
  cash: {
    type: Number,
    min: 0,
  },
  cashInBank: {
    type: Number,
    min: 0,
  },
  cashHeldInvestmentManager: {
    type: Number,
    min: 0,
  },
  restrictedCash: {
    type: Number,
    min: 0,
  },
  // Other Assets
  accountsReceivable: {
    type: Number,
    min: 0,
  },
  dueFromOtherFund: {
    type: Number,
    min: 0,
  },
  interestDividendsReceivable: {
    type: Number,
    min: 0,
  },
  inventoryPrepaidOtherAssets: {
    type: Number,
    min: 0,
  },
  notesWithinOneYear: {
    type: Number,
    min: 0,
  },
  notesAfterOneYear: {
    type: Number,
    min: 0,
  },
  securityDeposits: {
    type: Number,
    min: 0,
  },
  investments: {
    type: Number,
    min: 0,
  },
  capitalAssetNet: {
    type: Number,
    min: 0,
  },
  deferredOutflows: {
    type: Number,
    min: 0,
  },
  // Liabilities
  accountPayableAccrued: {
    type: Number,
    min: 0,
  },
  dueToFund: {
    type: Number,
    min: 0,
  },
  dueToOtherFund: {
    type: Number,
    min: 0,
  },
  longTermWithinOneYear: {
    type: Number,
    min: 0,
  },
  longTermAfterOneYear: {
    type: Number,
    min: 0,
  },
  deferredInflowsResources: {
    type: Number,
    min: 0,
  },
  deferredInflowsOPEB: {
    type: Number,
    min: 0,
  },
  // Net Assets
  investedCapitalAssets: {
    type: Number,
    min: 0,
  },
  restrictedFederalFunds: {
    type: Number,
    min: 0,
  },
  unrestricted: {
    type: Number,
    min: 0,
  },
  // Revenues (Program Revenues)
  chargesForServices: {
    type: Number,
    min: 0,
  },
  operatingGrants: {
    type: Number,
    min: 0,
  },
  interestAndInvestmentsEarnings: {
    type: Number,
    min: 0,
  },
  // Revenues (General Revenues)
  appropriations: {
    type: Number,
    min: 0,
  },
  trust: {
    type: Number,
    min: 0,
  },
  interestInvestmentLossesEarnings: {
    type: Number,
    min: 0,
  },
  newspaperAds: {
    type: Number,
    min: 0,
  },
  donationsAndOther: {
    type: Number,
    min: 0,
  },
  limitedLiabilityB: {
    type: Number,
    min: 0,
  },
  nonImposedFringeBenefits: {
    type: Number,
    min: 0,
  },
  // Expenditures
  management: {
    type: Number,
    min: 0,
  },
  supportServices: {
    type: Number,
    min: 0,
  },
  beneficiaryAdvocacy: {
    type: Number,
    min: 0,
  },
  depreciation: {
    type: Number,
    min: 0,
  },
  limitedLiabilityCompanyA: {
    type: Number,
    min: 0,
  },
  limitedLiabilityCompanyB: {
    type: Number,
    min: 0,
  },
  proceedsFromDebt: {
    type: Number,
    min: 0,
  },
  proceedsFromCapitalLeaseObligations: {
    type: Number,
    min: 0,
  },
  netTransfersToAndFromOtherFunds: {
    type: Number,
    min: 0,
  },
  // Fund Balances
  beginningOfYear: {
    type: Number,
    min: 0,
  },
  restatementAdjustment: {
    type: Number,
    min: 0,
  },
});

export const DataInputBridge = new SimpleSchema2Bridge(DataInputSchema);
