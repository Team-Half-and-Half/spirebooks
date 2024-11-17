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
  deferredInflowsPension: {
    type: Number,
    optional: true,
  },
  deferredInflowsOPED: {
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
  land: {
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
  treasuriesUS: {
    type: Number,
    optional: true,
  },
  agenciesUS: {
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
  CapitalAssetsNet: {
    type: CapitalAssetsNet,
    optional: false,
  },
  restrictedCash: {
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
        return total;
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
