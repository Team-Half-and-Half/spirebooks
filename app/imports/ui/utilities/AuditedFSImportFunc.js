import { createArraysOfObjects, padAllArraysToLength } from './ImportFunctions';

export const auditedFSImport = (sheetData) => {
  console.log(sheetData);
  const FundBalances = {
    beginningOfYear: sheetData[75].slice(0, 10),
    restatementAdjustment: [...sheetData[76].slice(0, 2), 0, 0, ...sheetData[76].slice(2, 7)],
    netPositionEndOfYear: [...sheetData[77].slice(0, 1), ...sheetData[77].slice(2, 11)],
  };
  const FundBalancesSingleYears = createArraysOfObjects(padAllArraysToLength(FundBalances, 10));
  console.log('Fund Balances:');
  console.log(FundBalancesSingleYears);

  const Expenditures = {
    management: sheetData[62].slice(0, 10),
    supportServices: sheetData[63].slice(0, 10),
    beneficiaryAdvocacy: sheetData[64].slice(0, 10),
    depreciation: sheetData[65].slice(0, 10),
    limitedLiabilityA: sheetData[66].slice(0, 10),
    limitedLiabilityB: sheetData[67].slice(0, 10),
    totalExpenses: sheetData[68].slice(0, 10),
    excessOfRevenue: sheetData[69].slice(0, 10),
    proceedsFromDebt: sheetData[70].slice(0, 10),
    proceedsFromCapitalLease: sheetData[71].slice(0, 10),
    netTransfersOtherFunds: sheetData[72].slice(0, 10),
    changeInNetAssets: sheetData[73].slice(0, 10),
  };
  const ExpendituresSingleYears = createArraysOfObjects(padAllArraysToLength(Expenditures, 10));
  console.log('Expenditures:');
  console.log(ExpendituresSingleYears);

  const GeneralRevenues = {
    appropriations: sheetData[52].slice(0, 10),
    trust: sheetData[53].slice(0, 10),
    interestInvestmentLossesEarnings: sheetData[54].slice(0, 10),
    newspaperAds: sheetData[55].slice(0, 10),
    donationsAndOther: sheetData[56].slice(0, 10),
    limitedLiabilityB: sheetData[57].slice(0, 10),
    nonImposedFringeBenefits: sheetData[58].slice(0, 10),
    totalGeneralRevenue: sheetData[59].slice(0, 10),
    totalRevenue: sheetData[60].slice(0, 10),
  };
  const GeneralRevenuesSingleYears = createArraysOfObjects(padAllArraysToLength(GeneralRevenues, 10));
  console.log('General Revenues:');
  console.log(GeneralRevenuesSingleYears);

  const ProgramRevenues = {
    chargesForServices: sheetData[47].slice(0, 10),
    operatingGrants: sheetData[48].slice(0, 10),
    interestInvestmentsEarnings: sheetData[49].slice(0, 10),
    totalProgramRevenues: sheetData[50].slice(0, 10),
  };
  const ProgramRevenuesSingleYears = createArraysOfObjects(padAllArraysToLength(ProgramRevenues, 10));
  console.log('Program Revenues:');
  console.log(ProgramRevenuesSingleYears);

  const NetAssets = {
    investedCapitalAssets: sheetData[38].slice(0, 10),
    restrictedFederal: sheetData[39].slice(0, 10),
    unrestricted: sheetData[40].slice(0, 10),
    totalNetAssets: sheetData[41].slice(0, 10),
    totalLiabilitiesNetAssets: sheetData[42].slice(0, 10),
  };
  const NetAssetsSingleYears = createArraysOfObjects(padAllArraysToLength(NetAssets, 10));
  console.log('Net Assets:');
  console.log(NetAssetsSingleYears);

  const Liabilities = {
    accountPayableAccrued: sheetData[28].slice(0, 10),
    dueToFund: sheetData[29].slice(0, 10),
    dueToOther: sheetData[30].slice(0, 10),
    longTermWithin: sheetData[31].slice(0, 10),
    longTermAfter: sheetData[32].slice(0, 10),
    totalLiabilities: sheetData[33].slice(0, 10),
    deferredInflowsResources: sheetData[34].slice(0, 10),
    deferredInflowsOPED: [...sheetData[35].slice(0, 1), 0, 0, 0, 0, 0, ...sheetData[35].slice(1, 5)],
    totalLiabilitiesDeferredInflows: sheetData[36].slice(0, 10),
  };
  const LiabilitiesSingleYears = createArraysOfObjects(padAllArraysToLength(Liabilities, 10));
  console.log('Liabilities:');
  console.log(LiabilitiesSingleYears);

  const OtherAssets = {
    accountsReceivable: sheetData[15].slice(0, 10),
    dueFromOtherFund: sheetData[16].slice(0, 10),
    interestDividendsReceivable: sheetData[17].slice(0, 10),
    inventoryPrepaidOtherAssets: sheetData[18].slice(0, 10),
    notesWithinOneYear: sheetData[19].slice(0, 10),
    notesAfterOneYear: sheetData[20].slice(0, 10),
    securityDeposits: sheetData[21].slice(0, 10),
    investments: sheetData[22].slice(0, 10),
    capitalAssetNet: sheetData[23].slice(0, 10),
    totalOtherAssets: sheetData[24].slice(0, 10),
    deferredOutflows: sheetData[25].slice(0, 10),
    totalAssetsDeferred: sheetData[26].slice(0, 10),
  };
  const OtherAssetsSingleYears = createArraysOfObjects(padAllArraysToLength(OtherAssets, 10));
  console.log('Other Assets:');
  console.log(OtherAssetsSingleYears);

  const CashAndCashEquivalents = {
    pettyCash: sheetData[8].slice(0, 10),
    cash: sheetData[9].slice(0, 10),
    cashInBank: sheetData[10].slice(0, 10),
    cashHeldInvestmentManager: sheetData[11].slice(0, 10),
    restrictedCash: sheetData[12].slice(0, 10),
    CashAndCashEquivalentsSum: sheetData[13].slice(0, 10),
  };
  const CashAndCashEquivalentsSingleYears = createArraysOfObjects(padAllArraysToLength(CashAndCashEquivalents, 10));
  console.log('Cash And Cash Equivalents:');
  console.log(CashAndCashEquivalentsSingleYears);

  return { FundBalancesSingleYears, ExpendituresSingleYears, GeneralRevenuesSingleYears, ProgramRevenues, NetAssets, LiabilitiesSingleYears, OtherAssetsSingleYears, CashAndCashEquivalentsSingleYears };
};
