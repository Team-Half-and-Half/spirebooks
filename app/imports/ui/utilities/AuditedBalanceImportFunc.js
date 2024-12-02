import { createArraysOfObjects, padAllArraysToLength, shiftArrayRight } from './ImportFunctions';

// Function for audited balance sheet
export const auditedBalanceImport = (sheetData) => {
  console.log(sheetData);
  const NetPosition = {
    netOfRelatedDebt: sheetData[105],
    restrictedFederal: sheetData[106],
    unrestricted: sheetData[107],
    totalNetPosition: sheetData[108],
    totalLiabilitiesInflowsNetPosition: sheetData[109],
  };
  const NetPositionSingleYears = createArraysOfObjects(padAllArraysToLength(NetPosition, 5));
  console.log('Net Position:');
  console.log(NetPositionSingleYears);

  const LongTermLiabilitiesWithinYear = {
    accruedVacation: sheetData[70],
    workersCompensation: sheetData[71],
    accruedRetirement: sheetData[72],
    accruedLease: sheetData[73],
    capitalLease: sheetData[74],
    notesPayableA: sheetData[75],
    netPensionLiability: sheetData[76],
    netOPEDLiability: sheetData[77],
    lineOfCreditA: sheetData[79],
    lineOfCreditB: sheetData[80],
    debtService: sheetData[82],
    longTermWithinSum: sheetData[83],
  };
  const LongTermLiabilitiesWithinYearSingleYears = createArraysOfObjects(padAllArraysToLength(LongTermLiabilitiesWithinYear, 5));
  // console.log('Long Term Liabilities Within Year:');
  // console.log(LongTermLiabilitiesWithinYearSingleYears);

  const LongTermLiabilitiesAfterYear = {
    accruedVacation: sheetData[85],
    workersCompensation: sheetData[86],
    accruedRetirement: sheetData[87],
    accruedLease: sheetData[88],
    capitalLease: sheetData[89],
    notesPayableA: sheetData[90],
    netPensionLiability: sheetData[91],
    netOPEDLiability: sheetData[92],
    lineOfCreditA: sheetData[94],
    lineOfCreditB: sheetData[95],
    debtService: sheetData[97],
    longTermWithinSum: sheetData[98],
  };
  const LongTermLiabilitiesAfterYearSingleYears = createArraysOfObjects(padAllArraysToLength(LongTermLiabilitiesAfterYear, 5));
  // console.log('Long Term Liabilities After Year:');
  // console.log(LongTermLiabilitiesAfterYearSingleYears);

  const Liabilities = {
    accountPayableAccrued: sheetData[65],
    dueToFund: sheetData[66],
    dueToOther: sheetData[67],
    LongTermWithin: shiftArrayRight(LongTermLiabilitiesWithinYearSingleYears),
    LongTermAfter: shiftArrayRight(LongTermLiabilitiesAfterYearSingleYears),
    totalLiabilities: sheetData[99],
    deferredInflowsPension: sheetData[100],
    deferredInflowsOPED: sheetData[101],
    totalLiabilitiesDeferredInflows: sheetData[102],
  };
  const LiabilitiesSingleYears = createArraysOfObjects(padAllArraysToLength(Liabilities, 5));
  console.log('Liabilities:');
  console.log(LiabilitiesSingleYears);

  const LiabilityBAsset = {
    buildings: sheetData[48],
    leaseholdImprovements: sheetData[49],
    furnitureFixturesEquipment: sheetData[50],
    vehicles: sheetData[51],
    lessAccumulatedDepreciation: sheetData[52],
    net: sheetData[53],
    land: sheetData[55],
    subTotal: sheetData[57],
  };
  const LiabilityBAssetSingleYears = createArraysOfObjects(padAllArraysToLength(LiabilityBAsset, 5));
  // console.log('Liability B Asset:');
  // console.log(LiabilityBAssetSingleYears);

  const Assets = {
    buildings: sheetData[35],
    leaseholdImprovements: sheetData[36],
    furnitureFixturesEquipment: sheetData[37],
    lessAccumulatedDepreciation: sheetData[38],
    net: sheetData[39],
    landA: sheetData[41],
    landB: sheetData[43],
    constructionInProgress: sheetData[45],
    subTotal: sheetData[46],
  };
  const AssetsSingleYears = createArraysOfObjects(padAllArraysToLength(Assets, 5));
  // console.log('Assets:');
  // console.log(AssetsSingleYears);

  const CapitalAssetsNet = {
    Assets: shiftArrayRight(AssetsSingleYears),
    LiabilityBAsset: shiftArrayRight(LiabilityBAssetSingleYears),
    capitalAssetsNetSum: sheetData[39],
  };
  const CapitalAssetsNetSingleYears = createArraysOfObjects(padAllArraysToLength(CapitalAssetsNet, 5));
  console.log('Capital Assets Net:');
  console.log(CapitalAssetsNetSingleYears);

  const Investments = {
    mutualFunds: sheetData[20],
    commingledFunds: sheetData[21],
    hedgeFunds: sheetData[22],
    privateEquity: sheetData[23],
    commonTrustFund: sheetData[24],
    commonPreferredStock: sheetData[25],
    privateDebt: sheetData[26],
    other: sheetData[27],
    subTotalInvestments: sheetData[28],
    treasuriesUS: sheetData[29],
    agenciesUS: sheetData[30],
    subtotalLoanFund: sheetData[31],
  };
  const InvestmentsSingleYears = createArraysOfObjects(padAllArraysToLength(Investments, 5));
  console.log('Investments:');
  console.log(InvestmentsSingleYears);

  const OtherAssets = {
    accountsReceivable: sheetData[11],
    dueFromOtherFund: sheetData[12],
    interestDividendsReceivable: sheetData[13],
    inventoryPrepaidOtherAssets: sheetData[14],
    notesWithinOneYear: sheetData[15],
    notesAfterOneYear: sheetData[16],
    securityDeposits: sheetData[17],
    cashHeldInvestmentManager: sheetData[18],
    Investments: shiftArrayRight(InvestmentsSingleYears),
    investmentSum: sheetData[28],
    CapitalAssetsNet: shiftArrayRight(CapitalAssetsNetSingleYears),
    restrictedCash: sheetData[59],
    totalOtherAssets: sheetData[60],
    deferredPensions: sheetData[61],
    deferredOPEB: sheetData[62],
    totalAssetsDeferred: sheetData[63],
  };
  const OtherAssetsSingleYears = createArraysOfObjects(padAllArraysToLength(OtherAssets, 5));
  console.log('Other Assets:');
  console.log(OtherAssetsSingleYears);

  const CashAndCashEquivalents = {
    pettyCash: sheetData[6],
    cash: sheetData[7],
    cashInBank: sheetData[8],
    cashAndCashEquivalentsSum: sheetData[9],
  };
  const CashAndCashEquivalentsSingleYears = createArraysOfObjects(padAllArraysToLength(CashAndCashEquivalents, 5));
  console.log('Cash And Cash Equivalents:');
  console.log(CashAndCashEquivalentsSingleYears);
  return { CashAndCashEquivalentsSingleYears, OtherAssetsSingleYears, Liabilities, NetPosition };
};
