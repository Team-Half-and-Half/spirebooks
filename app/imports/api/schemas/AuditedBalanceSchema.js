import SimpleSchema from 'simpl-schema';

const NetPosition = new SimpleSchema({
  netOfRelatedDebt: {
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
  totalNetPosition: {
    type: Number,
    optional: true,
  },
  totalLiabilitiesInflowsNetPosition: {
    type: Number,
    optional: true,
  },
});
const LongTermLiabilities = new SimpleSchema({
  accruedVacation: {
    type: Number,
    optional: true,
  },
  workersCompensation: {
    type: Number,
    optional: true,
  },
  accruedRetirement: {
    type: Number,
    optional: true,
  },
  accruedLease: {
    type: Number,
    optional: true,
  },
  capitalLease: {
    type: Number,
    optional: true,
  },
  notesPayableA: {
    type: Number,
    optional: true,
  },
  netPensionLiability: {
    type: Number,
    optional: true,
  },
  netOPEDLiability: {
    type: Number,
    optional: true,
  },
  lineOfCreditA: {
    type: Number,
    optional: true,
  },
  lineOfCreditB: {
    type: Number,
    optional: true,
  },
  debtService: {
    type: Number,
    optional: true,
  },
  longTermWithinSum: {
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
  LongTermWithin: {
    type: LongTermLiabilities,
    optional: false,
  },
  LongTermAfter: {
    type: LongTermLiabilities,
    optional: false,
  },
  totalLiabilities: {
    type: Number,
    optional: true,
  },
  deferredInflowsPension: {
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
const LiabilityBAsset = new SimpleSchema({
  buildings: {
    type: Number,
    optional: true,
  },
  leaseholdImprovements: {
    type: Number,
    optional: true,
  },
  furnitureFixturesEquipment: {
    type: Number,
    optional: true,
  },
  vehicles: {
    type: Number,
    optional: true,
  },
  lessAccumulatedDepreciation: {
    type: Number,
    optional: true,
  },
  net: {
    type: Number,
    optional: true,
  },
  land: {
    type: Number,
    optional: true,
  },
  subTotal: {
    type: Number,
    optional: true,
  },
});
const Assets = new SimpleSchema({
  buildings: {
    type: Number,
    optional: true,
  },
  leaseholdImprovements: {
    type: Number,
    optional: true,
  },
  furnitureFixturesEquipment: {
    type: Number,
    optional: true,
  },
  lessAccumulatedDepreciation: {
    type: Number,
    optional: true,
  },
  net: {
    type: Number,
    optional: true,
  },
  landA: {
    type: Number,
    optional: true,
  },
  landB: {
    type: Number,
    optional: true,
  },
  constructionInProgress: {
    type: Number,
    optional: true,
  },
  subTotal: {
    type: Number,
    optional: true,
  },
});
const CapitalAssetsNet = new SimpleSchema({
  Assets: {
    type: Assets,
    optional: false,
  },
  LiabilityBAsset: {
    type: LiabilityBAsset,
    optional: false,
  },
  capitalAssetsNetSum: {
    type: Number,
    optional: true,
  },
});
const Investments = new SimpleSchema({
  mutualFunds: {
    type: Number,
    optional: true,
  },
  commingledFunds: {
    type: Number,
    optional: true,
  },
  hedgeFunds: {
    type: Number,
    optional: true,
  },
  privateEquity: {
    type: Number,
    optional: true,
  },
  commonTrustFund: {
    type: Number,
    optional: true,
  },
  commonPreferredStock: {
    type: Number,
    optional: true,
  },
  privateDebt: {
    type: Number,
    optional: true,
  },
  other: {
    type: Number,
    optional: true,
  },
  subTotalInvestments: {
    type: Number,
    optional: true,
  },
  treasuriesUS: {
    type: Number,
    optional: true,
  },
  agenciesUS: {
    type: Number,
    optional: true,
  },
  subtotalLoanFund: {
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
  cashHeldInvestmentManager: {
    type: Number,
    optional: true,
  },
  Investments: {
    type: Investments,
    optional: false,
  },
  investmentSum: {
    type: Number,
    optional: true,
  },
  CapitalAssetsNet: {
    type: CapitalAssetsNet,
    optional: false,
  },
  restrictedCash: {
    type: Number,
    optional: true,
  },
  totalOtherAssets: {
    type: Number,
    optional: true,
  },
  deferredPensions: {
    type: Number,
    optional: true,
  },
  deferredOPEB: {
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
  cashAndCashEquivalentsSum: {
    type: Number,
    optional: true,
  },
});

// Main schema for the AuditedBalanceCollection
const AuditedBalanceSchema = new SimpleSchema({
  year: Number,
  owner: String,
  green: Boolean,
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
  NetPosition: {
    type: NetPosition,
    optional: false,
  },
});

export {
  CashAndCashEquivalents,
  OtherAssets,
  Liabilities,
  NetPosition,
  AuditedBalanceSchema,
};
