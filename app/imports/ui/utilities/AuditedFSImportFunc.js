import { createArraysOfObjects, padAllArraysToLength } from './ImportFunctions';

export const auditedFSImport = (sheetData) => {
  const FundBalances = {
    beginningOfYear: [...sheetData[75].slice(0, 0), ...sheetData[75].slice(7, 10)],
    restatementAdjustment: [...sheetData[76].slice(0, 0), ...sheetData[76].slice(4, 7)],
    netPositionEndOfYear: [...sheetData[77].slice(0, 0), ...sheetData[77].slice(7, 10)],
  };
  const FundBalancesSingleYears = createArraysOfObjects(padAllArraysToLength(FundBalances, 5));
  console.log('Fund Balances:');
  console.log(FundBalancesSingleYears);

  const Expenditures = {
    management: [...sheetData[62].slice(0, 0), ...sheetData[62].slice(6, 9)],
    supportServices: [...sheetData[63].slice(0, 0), ...sheetData[63].slice(6, 9)],
    beneficiaryAdvocacy: [...sheetData[64].slice(0, 0), ...sheetData[64].slice(6, 9)],
    depreciation: [...sheetData[65].slice(0, 0), ...sheetData[65].slice(6, 9)],
    limitedLiabilityA: [...sheetData[66].slice(0, 0), ...sheetData[66].slice(6, 9)],
    limitedLiabilityB: [...sheetData[67].slice(0, 0), ...sheetData[67].slice(6, 9)],
    totalExpenses: [...sheetData[68].slice(0, 0), ...sheetData[68].slice(6, 9)],
    excessOfRevenue: [...sheetData[69].slice(0, 0), ...sheetData[69].slice(6, 9)],
    proceedsFromDebt: [...sheetData[70].slice(0, 0), ...sheetData[70].slice(6, 9)],
    proceedsFromCapitalLease: [...sheetData[71].slice(0, 0), ...sheetData[71].slice(6, 9)],
    netTransfersOtherFunds: [...sheetData[72].slice(0, 0), ...sheetData[72].slice(6, 9)],
    changeInNetAssets: [...sheetData[73].slice(0, 0), ...sheetData[73].slice(6, 9)],
  };
  const ExpendituresSingleYears = createArraysOfObjects(padAllArraysToLength(Expenditures, 5));
  console.log('Expenditures:');
  console.log(ExpendituresSingleYears);

  const GeneralRevenues = {
    appropriations: [...sheetData[52].slice(0, 0), ...sheetData[52].slice(6, 9)],
    trust: [...sheetData[53].slice(0, 0), ...sheetData[53].slice(6, 9)],
    interestInvestmentLossesEarnings: [...sheetData[54].slice(0, 0), ...sheetData[54].slice(6, 9)],
    newspaperAds: [...sheetData[55].slice(0, 0), ...sheetData[55].slice(6, 9)],
    donationsAndOther: [...sheetData[56].slice(0, 0), ...sheetData[56].slice(6, 9)],
    limitedLiabilityB: [...sheetData[57].slice(0, 0), ...sheetData[57].slice(6, 9)],
    nonImposedFringeBenefits: [...sheetData[58].slice(0, 0), ...sheetData[58].slice(6, 9)],
    totalGeneralRevenue: [...sheetData[59].slice(0, 0), ...sheetData[59].slice(6, 9)],
    totalRevenue: [...sheetData[60].slice(0, 0), ...sheetData[60].slice(6, 9)],
  };
  const GeneralRevenuesSingleYears = createArraysOfObjects(padAllArraysToLength(GeneralRevenues, 5));
  console.log('General Revenues:');
  console.log(GeneralRevenuesSingleYears);

  const ProgramRevenues = {
    chargesForServices: [...sheetData[47].slice(0, 0), ...sheetData[47].slice(6, 9)],
    operatingGrants: [...sheetData[48].slice(0, 0), ...sheetData[48].slice(6, 9)],
    interestInvestmentsEarnings: [...sheetData[49].slice(0, 0), ...sheetData[49].slice(6, 9)],
    totalProgramRevenues: [...sheetData[50].slice(0, 0), ...sheetData[50].slice(6, 9)],
  };
  const ProgramRevenuesSingleYears = createArraysOfObjects(padAllArraysToLength(ProgramRevenues, 5));
  console.log('Program Revenues:');
  console.log(ProgramRevenuesSingleYears);

  const NetAssets = {
    investedCapitalAssets: [...sheetData[38].slice(0, 0), ...sheetData[38].slice(6, 9)],
    restrictedFederal: [...sheetData[39].slice(0, 0), ...sheetData[39].slice(6, 9)],
    unrestricted: [...sheetData[40].slice(0, 0), ...sheetData[40].slice(6, 9)],
    totalNetAssets: [...sheetData[41].slice(0, 0), ...sheetData[41].slice(6, 9)],
    totalLiabilitiesNetAssets: [...sheetData[42].slice(0, 0), ...sheetData[42].slice(6, 9)],
  };
  const NetAssetsSingleYears = createArraysOfObjects(padAllArraysToLength(NetAssets, 5));
  console.log('Net Assets:');
  console.log(NetAssetsSingleYears);

  const Liabilities = {
    accountPayableAccrued: [...sheetData[28].slice(0, 0), ...sheetData[28].slice(6, 9)],
    dueToFund: [...sheetData[29].slice(0, 0), ...sheetData[29].slice(6, 9)],
    dueToOther: [...sheetData[30].slice(0, 0), ...sheetData[30].slice(6, 9)],
    longTermWithin: [...sheetData[31].slice(0, 0), ...sheetData[31].slice(6, 9)],
    longTermAfter: [...sheetData[32].slice(0, 0), ...sheetData[32].slice(6, 9)],
    totalLiabilities: [...sheetData[33].slice(0, 0), ...sheetData[33].slice(6, 9)],
    deferredInflowsResources: [...sheetData[34].slice(0, 0), ...sheetData[34].slice(6, 9)],
    deferredInflowsOPED: [...sheetData[35].slice(0, 0), ...sheetData[35].slice(6, 9)],
    totalLiabilitiesDeferredInflows: [...sheetData[36].slice(0, 0), ...sheetData[36].slice(6, 9)],
  };
  const LiabilitiesSingleYears = createArraysOfObjects(padAllArraysToLength(Liabilities, 5));
  console.log('Liabilities:');
  console.log(LiabilitiesSingleYears);

  const OtherAssets = {
    accountsReceivable: [...sheetData[15].slice(0, 0), ...sheetData[15].slice(6, 9)],
    dueFromOtherFund: [...sheetData[16].slice(0, 0), ...sheetData[16].slice(6, 9)],
    interestDividendsReceivable: [...sheetData[17].slice(0, 0), ...sheetData[17].slice(6, 9)],
    inventoryPrepaidOtherAssets: [...sheetData[18].slice(0, 0), ...sheetData[18].slice(6, 9)],
    notesWithinOneYear: [...sheetData[19].slice(0, 0), ...sheetData[19].slice(6, 9)],
    notesAfterOneYear: [...sheetData[20].slice(0, 0), ...sheetData[20].slice(6, 9)],
    securityDeposits: [...sheetData[21].slice(0, 0), ...sheetData[21].slice(6, 9)],
    investments: [...sheetData[22].slice(0, 0), ...sheetData[22].slice(6, 9)],
    capitalAssetNet: [...sheetData[23].slice(0, 0), ...sheetData[23].slice(6, 9)],
    totalOtherAssets: [...sheetData[24].slice(0, 0), ...sheetData[24].slice(6, 9)],
    deferredOutflows: [...sheetData[25].slice(0, 0), ...sheetData[25].slice(6, 9)],
    totalAssetsDeferred: [...sheetData[26].slice(0, 0), ...sheetData[26].slice(6, 9)],
  };
  const OtherAssetsSingleYears = createArraysOfObjects(padAllArraysToLength(OtherAssets, 5));
  console.log('Other Assets:');
  console.log(OtherAssetsSingleYears);

  const CashAndCashEquivalents = {
    pettyCash: [...sheetData[8].slice(0, 0), ...sheetData[8].slice(6, 9)],
    cash: [...sheetData[9].slice(0, 0), ...sheetData[9].slice(6, 9)],
    cashInBank: [...sheetData[10].slice(0, 0), ...sheetData[10].slice(6, 9)],
    cashHeldInvestmentManager: [...sheetData[11].slice(0, 0), ...sheetData[11].slice(6, 9)],
    restrictedCash: [...sheetData[12].slice(0, 0), ...sheetData[12].slice(6, 9)],
    CashAndCashEquivalentsSum: [...sheetData[13].slice(0, 0), ...sheetData[13].slice(6, 9)],
  };
  const CashAndCashEquivalentsSingleYears = createArraysOfObjects(padAllArraysToLength(CashAndCashEquivalents, 5));
  console.log('Cash And Cash Equivalents:');
  console.log(CashAndCashEquivalentsSingleYears);

  return sheetData;
};
