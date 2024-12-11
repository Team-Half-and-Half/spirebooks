import SimpleSchema from 'simpl-schema';

const NetPosition = new SimpleSchema({
  netOfRelatedDebt: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  restrictedFederal: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  unrestricted: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
});
const LongTermLiabilities = new SimpleSchema({
  accruedVacation: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  workersCompensation: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  accruedRetirement: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  accruedLease: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  capitalLease: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  notesPayableA: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  netPensionLiability: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  netOPEDLiability: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  lineOfCreditA: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  lineOfCreditB: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  debtService: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
});
const Liabilities = new SimpleSchema({
  accountPayableAccrued: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  dueToFund: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  dueToOther: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  LongTermWithin: {
    type: LongTermLiabilities,
    optional: false,
  },
  LongTermAfter: {
    type: LongTermLiabilities,
    optional: false,
  },
  deferredInflowsPension: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  deferredInflowsOPED: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
});
const LiabilityBAsset = new SimpleSchema({
  buildings: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  leaseholdImprovements: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  furnitureFixturesEquipment: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  vehicles: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  lessAccumulatedDepreciation: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  land: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
});
const Assets = new SimpleSchema({
  buildings: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  leaseholdImprovements: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  furnitureFixturesEquipment: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  lessAccumulatedDepreciation: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  landA: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  landB: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  constructionInProgress: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
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
});
const Investments = new SimpleSchema({
  mutualFunds: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  commingledFunds: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  hedgeFunds: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  privateEquity: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  commonTrustFund: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  commonPreferredStock: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  privateDebt: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  other: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  treasuriesUS: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  agenciesUS: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
});
const OtherAssets = new SimpleSchema({
  accountsReceivable: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  dueFromOtherFund: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  interestDividendsReceivable: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  inventoryPrepaidOtherAssets: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  notesWithinOneYear: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  notesAfterOneYear: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  securityDeposits: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  cashHeldInvestmentManager: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  Investments: {
    type: Investments,
    optional: false,
  },
  CapitalAssetsNet: {
    type: CapitalAssetsNet,
    optional: false,
  },
  restrictedCash: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  deferredPensions: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  deferredOPEB: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
});
const CashAndCashEquivalents = new SimpleSchema({
  pettyCash: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  cash: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  cashInBank: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
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
  // autoValue Totals
  totalCashAndCashEquivalents: { // Total Cash and Cash Equivalents (row 14)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const cashAndCashEquivalents = this.siblingField('CashAndCashEquivalents').value || {};
        const pettyCash = cashAndCashEquivalents.pettyCash || 0;
        const cash = cashAndCashEquivalents.cash || 0;
        const cashInBank = cashAndCashEquivalents.cashInBank || 0;
        const total = pettyCash + cash + cashInBank;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  subTotalInvestments: { // Subtotal - Investment (row 34)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const investments = this.siblingField('OtherAssets.Investments').value || {};
        const mutualFunds = investments.mutualFunds || 0;
        const commingledFunds = investments.commingledFunds || 0;
        const hedgeFunds = investments.hedgeFunds || 0;
        const privateEquity = investments.privateEquity || 0;
        const commonTrustFund = investments.commonTrustFund || 0;
        const commonPreferredStock = investments.commonPreferredStock || 0;
        const privateDebt = investments.privateDebt || 0;
        const other = investments.other || 0;
        const total = mutualFunds + commingledFunds + hedgeFunds + privateEquity + commonTrustFund + commonPreferredStock + privateDebt + other;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  subtotalLoanFund: { // Subtotal - LoanFund (row 37)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const investments = this.siblingField('OtherAssets.Investments').value || {};
        const treasuriesUS = investments.treasuriesUS || 0;
        const agenciesUS = investments.agenciesUS || 0;
        const total = treasuriesUS + agenciesUS;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  investmentSum: { // Investments (row 39)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const subtotalLoanFund = this.siblingField('subtotalLoanFund').value || 0;
        const subTotalInvestments = this.siblingField('subTotalInvestments').value || 0;
        const total = subtotalLoanFund + subTotalInvestments;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  netAssets: { // Net (row 46)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const assets = this.siblingField('OtherAssets.CapitalAssetsNet.Assets').value || {};
        const buildings = assets.buildings || 0;
        const leaseholdImprovements = assets.leaseholdImprovements || 0;
        const furnitureFixturesEquipment = assets.furnitureFixturesEquipment || 0;
        const lessAccumulatedDepreciation = assets.lessAccumulatedDepreciation || 0;
        const total = buildings + leaseholdImprovements + furnitureFixturesEquipment + lessAccumulatedDepreciation;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  subTotalCapitalAssetNet: { // Subtotal - Subtotal - Capital, Assets, net (row 61)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const assets = this.siblingField('OtherAssets.CapitalAssetsNet.Assets').value || {};
        const landA = assets.landA || 0;
        const landB = assets.landB || 0;
        const constructionInProgress = assets.constructionInProgress || 0;
        const total = landA + landB + constructionInProgress;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  netCompanyBAsset: { // Net (row 69)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const assets = this.siblingField('OtherAssets.CapitalAssetsNet.LiabilityBAsset').value || {};
        const buildings = assets.buildings || 0;
        const leaseholdImprovements = assets.leaseholdImprovements || 0;
        const furnitureFixturesEquipment = assets.furnitureFixturesEquipment || 0;
        const vehicles = assets.vehicles || 0;
        const lessAccumulatedDepreciation = assets.lessAccumulatedDepreciation || 0;
        const total = buildings + leaseholdImprovements + furnitureFixturesEquipment + vehicles + lessAccumulatedDepreciation;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  subTotalCompanyBAssets: { // Subtotal - Limited Liability Company B's assets, net (row 73)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const netCompanyBAsset = this.siblingField('netCompanyBAsset').value || 0;
        const leaseholdImprovements = this.siblingField('OtherAssets.CapitalAssetsNet.LiabilityBAsset.land').value || 0;
        const total = netCompanyBAsset + leaseholdImprovements;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  capitalAssetsNetSum: { // Capital Assets, net (row 75)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const netAssets = this.siblingField('netAssets').value || 0;
        const subTotalCapitalAssetNet = this.siblingField('subTotalCapitalAssetNet').value || 0;
        const subTotalCompanyBAssets = this.siblingField('subTotalCompanyBAssets').value || 0;
        const total = netAssets + subTotalCapitalAssetNet + subTotalCompanyBAssets;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  totalOtherAssets: { // Total Other Assets, net (row 77)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const otherAssets = this.siblingField('OtherAssets');
        const accountsReceivable = otherAssets.accountsReceivable || 0;
        const dueFromOtherFund = otherAssets.dueFromOtherFund || 0;
        const interestDividendsReceivable = otherAssets.interestDividendsReceivable || 0;
        const inventoryPrepaidOtherAssets = otherAssets.inventoryPrepaidOtherAssets || 0;
        const notesWithinOneYear = otherAssets.notesWithinOneYear || 0;
        const notesAfterOneYear = otherAssets.notesAfterOneYear || 0;
        const securityDeposits = otherAssets.securityDeposits || 0;
        const cashHeldInvestmentManager = otherAssets.cashHeldInvestmentManager || 0;
        const investmentSum = this.siblingField('investmentSum').value || 0;
        const capitalAssetsNetSum = this.siblingField('capitalAssetsNetSum').value || 0;
        const restrictedCash = otherAssets.restrictedCash || 0;
        const total = accountsReceivable + dueFromOtherFund + interestDividendsReceivable
          + inventoryPrepaidOtherAssets + notesWithinOneYear + notesAfterOneYear
          + securityDeposits + cashHeldInvestmentManager + investmentSum
          + capitalAssetsNetSum + restrictedCash;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  totalAssetsDeferred: { // Total assets and deferred outflows of resources, net (row 80)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const otherAssets = this.siblingField('OtherAssets') || {};
        const totalCashAndCashEquivalents = this.siblingField('totalCashAndCashEquivalents').value || 0;
        const totalOtherAssets = this.siblingField('totalOtherAssets').value || 0;
        const deferredPensions = otherAssets.deferredPensions || 0;
        const deferredOPEB = otherAssets.deferredOPEB || 0;
        const total = totalCashAndCashEquivalents + totalOtherAssets + deferredPensions + deferredOPEB;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  dueWithinOneYearSum: { // Long-term Liabilities - due within one year (row 104)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const longTermWithin = this.siblingField('Liabilities.LongTermWithin').value || {};
        const accruedVacation = longTermWithin.accruedVacation || 0;
        const workersCompensation = longTermWithin.workersCompensation || 0;
        const accruedRetirement = longTermWithin.accruedRetirement || 0;
        const accruedLease = longTermWithin.accruedLease || 0;
        const capitalLease = longTermWithin.capitalLease || 0;
        const notesPayableA = longTermWithin.notesPayableA || 0;
        const netPensionLiability = longTermWithin.netPensionLiability || 0;
        const netOPEDLiability = longTermWithin.netOPEDLiability || 0;
        const lineOfCreditA = longTermWithin.lineOfCreditA || 0;
        const lineOfCreditB = longTermWithin.lineOfCreditB || 0;
        const debtService = longTermWithin.debtService || 0;
        const total = accruedVacation + workersCompensation + accruedRetirement + accruedLease + capitalLease + notesPayableA + netPensionLiability + netOPEDLiability + lineOfCreditA + lineOfCreditB + debtService;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  dueAfterOneYearSum: { // Long-term Liabilities - due after one year (row 120)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const longTermAfter = this.siblingField('Liabilities.LongTermAfter').value || {};
        const accruedVacation = longTermAfter.accruedVacation || 0;
        const workersCompensation = longTermAfter.workersCompensation || 0;
        const accruedRetirement = longTermAfter.accruedRetirement || 0;
        const accruedLease = longTermAfter.accruedLease || 0;
        const capitalLease = longTermAfter.capitalLease || 0;
        const notesPayableA = longTermAfter.notesPayableA || 0;
        const netPensionLiability = longTermAfter.netPensionLiability || 0;
        const netOPEDLiability = longTermAfter.netOPEDLiability || 0;
        const lineOfCreditA = longTermAfter.lineOfCreditA || 0;
        const lineOfCreditB = longTermAfter.lineOfCreditB || 0;
        const debtService = longTermAfter.debtService || 0;
        const total = accruedVacation + workersCompensation + accruedRetirement + accruedLease + capitalLease + notesPayableA + netPensionLiability + netOPEDLiability + lineOfCreditA + lineOfCreditB + debtService;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  totalLiabilities: { // Total Liabilities (row 121)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const liabilities = this.siblingField('Liabilities') || {};
        const accountPayableAccrued = liabilities.accountPayableAccrued || 0;
        const dueToFund = liabilities.dueToFund || 0;
        const dueToOther = liabilities.dueToOther || 0;
        const dueWithinOneYearSum = liabilities.dueWithinOneYearSum || 0;
        const dueAfterOneYearSum = this.siblingField('dueAfterOneYearSum').value || 0;
        const total = accountPayableAccrued + dueToFund + dueToOther + dueWithinOneYearSum + dueAfterOneYearSum;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  totalLiabilitiesDeferredInflows: { // Total liabilities and deferred inflows of resources (row 125)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const totalLiabilities = this.siblingField('totalLiabilities').value || 0;
        const liabilities = this.siblingField('Liabilities') || {};
        const deferredInflowsPension = liabilities.deferredInflowsPension || 0;
        const deferredInflowsOPED = liabilities.deferredInflowsOPED || 0;
        const total = totalLiabilities + deferredInflowsPension + deferredInflowsOPED;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  totalNetPosition: { // Total net position (row 132)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const netPosition = this.siblingField('NetPosition').value || {};
        const netOfRelatedDebt = netPosition.netOfRelatedDebt || 0;
        const restrictedFederal = netPosition.restrictedFederal || 0;
        const unrestricted = netPosition.unrestricted || 0;
        const total = netOfRelatedDebt + restrictedFederal + unrestricted;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
    },
  },
  totalLiabilitiesInflowsNetPosition: { // Total Liabilities, Deferred Inflows of Resources and  Net Position (row 133)
    type: Number,
    optional: false,
    autoValue: function () {
      if (!this.isSet) {
        const totalLiabilitiesDeferredInflows = this.siblingField('totalLiabilitiesDeferredInflows').value || 0;
        const totalNetPosition = this.siblingField('totalNetPosition').value || 0;
        const total = totalLiabilitiesDeferredInflows + totalNetPosition;
        return Number(parseFloat(total || 0).toFixed(2));
      }
      return this.value;
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
