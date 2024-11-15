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
  totalCashAndCashEquivalents: {
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
  totalCashAndCashEquivalents: { // Total Cash and Cash Equivalents (row 14)
    type: Number,
    autoValue: function () {
      const pettyCash = this.siblingField('CashAndCashEquivalents.pettyCash').value || 0;
      const cash = this.siblingField('CashAndCashEquivalents.cash').value || 0;
      const cashInBank = this.siblingField('CashAndCashEquivalents.cashInBank').value || 0;
      const total = pettyCash + cash + cashInBank;
      return total;
    },
  },
  subTotalInvestments: { // Subtotal - Investment (row 34)
    type: Number,
    autoValue: function () {
      const mutualFunds = this.siblingField('OtherAssets.Investments.mutualFunds').value || 0;
      const commingledFunds = this.siblingField('OtherAssets.Investments.commingledFunds').value || 0;
      const hedgeFunds = this.siblingField('OtherAssets.Investments.hedgeFunds').value || 0;
      const privateEquity = this.siblingField('OtherAssets.Investments.privateEquity').value || 0;
      const commonTrustFund = this.siblingField('OtherAssets.Investments.commonTrustFund').value || 0;
      const commonPreferredStock = this.siblingField('OtherAssets.Investments.commonPreferredStock').value || 0;
      const privateDebt = this.siblingField('OtherAssets.Investments.privateDebt').value || 0;
      const other = this.siblingField('OtherAssets.Investments.other').value || 0;
      const total = mutualFunds + commingledFunds + hedgeFunds + privateEquity + commonTrustFund + commonPreferredStock + privateDebt + other;
      return total;
    },
  },
  subtotalLoanFund: { // Subtotal - LoanFund (row 37)
    type: Number,
    autoValue: function () {
      const treasuriesUS = this.siblingField('OtherAssets.Investments.treasuriesUS').value || 0;
      const agenciesUS = this.siblingField('OtherAssets.Investments.agenciesUS').value || 0;
      const total = treasuriesUS + agenciesUS;
      return total;
    },
  },
  investmentSum: { // Investments (row 39)
    type: Number,
    autoValue: function () {
      const subtotalLoanFund = this.siblingField('subtotalLoanFund').value || 0;
      const subTotalInvestments = this.siblingField('subTotalInvestments').value || 0;
      const total = subtotalLoanFund + subTotalInvestments;
      return total;
    },
  },
  netAssets: { // Net (row 46)
    type: Number,
    autoValue: function () {
      const buildings = this.siblingField('OtherAssets.CapitalAssetsNet.Assets.buildings').value || 0;
      const leaseholdImprovements = this.siblingField('OtherAssets.CapitalAssetsNet.Assets.leaseholdImprovements').value || 0;
      const furnitureFixturesEquipment = this.siblingField('OtherAssets.CapitalAssetsNet.Assets.furnitureFixturesEquipment').value || 0;
      const lessAccumulatedDepreciation = this.siblingField('OtherAssets.CapitalAssetsNet.Assets.lessAccumulatedDepreciation').value || 0;
      const total = buildings + leaseholdImprovements + furnitureFixturesEquipment + lessAccumulatedDepreciation;
      return total;
    },
  },
  subTotalCapitalAssetNet: { // Subtotal - Subtotal - Capital, Assets, net (row 61)
    type: Number,
    autoValue: function () {
      const landA = this.siblingField('OtherAssets.CapitalAssetsNet.Assets.landA').value || 0;
      const landB = this.siblingField('OtherAssets.CapitalAssetsNet.Assets.landB').value || 0;
      const constructionInProgress = this.siblingField('OtherAssets.CapitalAssetsNet.Assets.constructionInProgress').value || 0;
      const total = landA + landB + constructionInProgress;
      return total;
    },
  },
  netCompanyBAsset: { // Net (row 69)
    type: Number,
    autoValue: function () {
      const buildings = this.siblingField('OtherAssets.CapitalAssetsNet.LiabilityBAsset.buildings').value || 0;
      const leaseholdImprovements = this.siblingField('OtherAssets.CapitalAssetsNet.LiabilityBAsset.leaseholdImprovements').value || 0;
      const furnitureFixturesEquipment = this.siblingField('OtherAssets.CapitalAssetsNet.LiabilityBAsset.furnitureFixturesEquipment').value || 0;
      const vehicles = this.siblingField('OtherAssets.CapitalAssetsNet.LiabilityBAsset.vehicles').value || 0;
      const lessAccumulatedDepreciation = this.siblingField('OtherAssets.CapitalAssetsNet.LiabilityBAsset.lessAccumulatedDepreciation').value || 0;
      const total = buildings + leaseholdImprovements + furnitureFixturesEquipment + vehicles + lessAccumulatedDepreciation;
      return total;
    },
  },
  subTotalCompanyBAssets: { // Subtotal - Limited Liability Company B's assets, net (row 73)
    type: Number,
    autoValue: function () {
      const netCompanyBAsset = this.siblingField('netCompanyBAsset').value || 0;
      const leaseholdImprovements = this.siblingField('OtherAssets.CapitalAssetsNet.LiabilityBAsset.land').value || 0;
      const total = netCompanyBAsset + leaseholdImprovements;
      return total;
    },
  },
  capitalAssetsNetSum: { // Capital Assets, net (row 75)
    type: Number,
    autoValue: function () {
      const netAssets = this.siblingField('netAssets').value || 0;
      const subTotalCapitalAssetNet = this.siblingField('subTotalCapitalAssetNet').value || 0;
      const subTotalCompanyBAssets = this.siblingField('subTotalCompanyBAssets').value || 0;
      const total = netAssets + subTotalCapitalAssetNet + subTotalCompanyBAssets;
      return total;
    },
  },
  totalOtherAssets: { // Total Other Assets, net (row 77)
    type: Number,
    autoValue: function () {
      const accountsReceivable = this.siblingField('OtherAssets.accountsReceivable').value || 0;
      const dueFromOtherFund = this.siblingField('OtherAssets.dueFromOtherFund').value || 0;
      const interestDividendsReceivable = this.siblingField('OtherAssets.interestDividendsReceivable').value || 0;
      const inventoryPrepaidOtherAssets = this.siblingField('OtherAssets.inventoryPrepaidOtherAssets').value || 0;
      const notesWithinOneYear = this.siblingField('OtherAssets.notesWithinOneYear').value || 0;
      const notesAfterOneYear = this.siblingField('OtherAssets.notesAfterOneYear').value || 0;
      const securityDeposits = this.siblingField('OtherAssets.securityDeposits').value || 0;
      const cashHeldInvestmentManager = this.siblingField('OtherAssets.cashHeldInvestmentManager').value || 0;
      const investmentSum = this.siblingField('investmentSum').value || 0;
      const capitalAssetsNetSum = this.siblingField('capitalAssetsNetSum').value || 0;
      const restrictedCash = this.siblingField('OtherAssets.restrictedCash').value || 0;
      const total = accountsReceivable + dueFromOtherFund + interestDividendsReceivable
        + inventoryPrepaidOtherAssets + notesWithinOneYear + notesAfterOneYear
        + securityDeposits + cashHeldInvestmentManager + investmentSum
        + capitalAssetsNetSum + restrictedCash;
      return total;
    },
  },
  totalAssetsDeferred: { // Total assets and deferred outflows of resources, net (row 80)
    type: Number,
    autoValue: function () {
      const totalCashAndCashEquivalents = this.siblingField('totalCashAndCashEquivalents').value || 0;
      const totalOtherAssets = this.siblingField('totalOtherAssets').value || 0;
      const deferredPensions = this.siblingField('OtherAssets.deferredPensions').value || 0;
      const deferredOPEB = this.siblingField('OtherAssets.deferredOPEB').value || 0;
      const total = totalCashAndCashEquivalents + totalOtherAssets + deferredPensions + deferredOPEB;
      return total;
    },
  },
  dueWithinOneYearSum: { // Long-term Liabilities - due within one year (row 104)
    type: Number,
    autoValue: function () {
      const accruedVacation = this.siblingField('Liabilities.LongTermWithin.accruedVacation').value || 0;
      const workersCompensation = this.siblingField('Liabilities.LongTermWithin.workersCompensation').value || 0;
      const accruedRetirement = this.siblingField('Liabilities.LongTermWithin.accruedRetirement').value || 0;
      const accruedLease = this.siblingField('Liabilities.LongTermWithin.accruedLease').value || 0;
      const capitalLease = this.siblingField('Liabilities.LongTermWithin.capitalLease').value || 0;
      const notesPayableA = this.siblingField('Liabilities.LongTermWithin.notesPayableA').value || 0;
      const netPensionLiability = this.siblingField('Liabilities.LongTermWithin.netPensionLiability').value || 0;
      const netOPEDLiability = this.siblingField('Liabilities.LongTermWithin.netOPEDLiability').value || 0;
      const lineOfCreditA = this.siblingField('Liabilities.LongTermWithin.lineOfCreditA').value || 0;
      const lineOfCreditB = this.siblingField('Liabilities.LongTermWithin.lineOfCreditB').value || 0;
      const debtService = this.siblingField('Liabilities.LongTermWithin.debtService').value || 0;
      const total = accruedVacation + workersCompensation + accruedRetirement + accruedLease + capitalLease + notesPayableA + netPensionLiability + netOPEDLiability + lineOfCreditA + lineOfCreditB + debtService;
      return total;
    },
  },
  dueAfterOneYearSum: { // Long-term Liabilities - due after one year (row 120)
    type: Number,
    autoValue: function () {
      const accruedVacation = this.siblingField('Liabilities.LongTermAfter.accruedVacation').value || 0;
      const workersCompensation = this.siblingField('Liabilities.LongTermAfter.workersCompensation').value || 0;
      const accruedRetirement = this.siblingField('Liabilities.LongTermAfter.accruedRetirement').value || 0;
      const accruedLease = this.siblingField('Liabilities.LongTermAfter.accruedLease').value || 0;
      const capitalLease = this.siblingField('Liabilities.LongTermAfter.capitalLease').value || 0;
      const notesPayableA = this.siblingField('Liabilities.LongTermAfter.notesPayableA').value || 0;
      const netPensionLiability = this.siblingField('Liabilities.LongTermAfter.netPensionLiability').value || 0;
      const netOPEDLiability = this.siblingField('Liabilities.LongTermAfter.netOPEDLiability').value || 0;
      const lineOfCreditA = this.siblingField('Liabilities.LongTermAfter.lineOfCreditA').value || 0;
      const lineOfCreditB = this.siblingField('Liabilities.LongTermAfter.lineOfCreditB').value || 0;
      const debtService = this.siblingField('Liabilities.LongTermAfter.debtService').value || 0;
      const total = accruedVacation + workersCompensation + accruedRetirement + accruedLease + capitalLease + notesPayableA + netPensionLiability + netOPEDLiability + lineOfCreditA + lineOfCreditB + debtService;
      return total;
    },
  },
  totalLiabilities: { // Total Liabilities (row 121)
    type: Number,
    autoValue: function () {
      const accountPayableAccrued = this.siblingField('Liabilities.accountPayableAccrued').value || 0;
      const dueToFund = this.siblingField('Liabilities.dueToFund').value || 0;
      const dueToOther = this.siblingField('Liabilities.dueToOther').value || 0;
      const dueWithinOneYearSum = this.siblingField('dueWithinOneYearSum').value || 0;
      const dueAfterOneYearSum = this.siblingField('dueAfterOneYearSum').value || 0;
      const total = accountPayableAccrued + dueToFund + dueToOther + dueWithinOneYearSum + dueAfterOneYearSum;
      return total;
    },
  },
  totalLiabilitiesDeferredInflows: { // Total liabilities and deferred inflows of resources (row 125)
    type: Number,
    autoValue: function () {
      const totalLiabilities = this.siblingField('totalLiabilities').value || 0;
      const deferredInflowsPension = this.siblingField('Liabilities.deferredInflowsPension').value || 0;
      const deferredInflowsOPED = this.siblingField('Liabilities.deferredInflowsOPED').value || 0;
      const total = totalLiabilities + deferredInflowsPension + deferredInflowsOPED;
      return total;
    },
  },
  totalNetPosition: { // Total net position (row 132)
    type: Number,
    autoValue: function () {
      const netOfRelatedDebt = this.siblingField('NetPosition.netOfRelatedDebt').value || 0;
      const restrictedFederal = this.siblingField('NetPosition.restrictedFederal').value || 0;
      const unrestricted = this.siblingField('NetPosition.unrestricted').value || 0;
      const total = netOfRelatedDebt + restrictedFederal + unrestricted;
      return total;
    },
  },
  totalLiabilitiesInflowsNetPosition: { // Total Liabilities, Deferred Inflows of Resources and  Net Position (row 133)
    type: Number,
    autoValue: function () {
      const totalLiabilitiesDeferredInflows = this.siblingField('totalLiabilitiesDeferredInflows').value || 0;
      const totalNetPosition = this.siblingField('totalNetPosition').value || 0;
      const total = totalLiabilitiesDeferredInflows + totalNetPosition;
      return total;
    },
  },
});

export {
  CashAndCashEquivalents,
  OtherAssets,
  Liabilities,
  NetPosition,
  AuditedBalanceSchema,
};
