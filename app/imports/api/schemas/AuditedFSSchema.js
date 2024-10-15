import SimpleSchema from 'simpl-schema';

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
const AuditedFSSchema = new SimpleSchema({
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
});

export {
  FundBalances,
  Expenditures,
  GeneralRevenues,
  ProgramRevenues,
  NetAssets,
  Liabilities,
  OtherAssets,
  CashAndCashEquivalents,
  AuditedFSSchema,
};
