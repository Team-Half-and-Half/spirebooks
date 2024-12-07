import { createArraysOfObjects, padAllArraysToLength, shiftArrayRight } from './ImportFunctions';

export const budgetPLImport = (sheetData) => {
  // console.log(sheetData);
  const ExpenditurePerAudited = {
    management: [...sheetData[69].slice(0, 1), ...sheetData[69].slice(1, 10)],
    supportServices: [...sheetData[70].slice(0, 1), ...sheetData[0].slice(1, 10)],
    beneficiaryAdvocacy: [...sheetData[71].slice(0, 1), ...sheetData[71].slice(1, 10)],
  };
  const ExpenditurePerAuditedSingleYears = createArraysOfObjects(padAllArraysToLength(ExpenditurePerAudited, 11));
  // console.log('Expenditure Per Audited:');
  // console.log(ExpenditurePerAuditedSingleYears);

  const FringeBenefitsAdmin = {
    pensionAccumulation: [...sheetData[15].slice(0, 1), 0, ...sheetData[15].slice(2, 11)],
    retireeHealthInsurance: [...sheetData[16].slice(0, 1), 0, ...sheetData[16].slice(2, 11)],
    otherBenefits: [...sheetData[17].slice(0, 1), 0, ...sheetData[17].slice(2, 11)],
    healthFund: [...sheetData[18].slice(0, 1), 0, ...sheetData[18].slice(2, 11)],
    socialSecurity: [...sheetData[19].slice(0, 1), 0, ...sheetData[19].slice(2, 11)],
    medicare: [...sheetData[20].slice(0, 1), 0, ...sheetData[20].slice(2, 11)],
    workersCompensation: [...sheetData[21].slice(0, 1), 0, ...sheetData[21].slice(2, 11)],
    unemploymentCompensation: [...sheetData[22].slice(0, 1), 0, ...sheetData[22].slice(2, 11)],
    pensionCompensation: [...sheetData[23].slice(0, 1), 0, ...sheetData[23].slice(2, 11)],
    fringeBenefitsSum: [...sheetData[24].slice(0, 1), 0, ...sheetData[24].slice(1, 10)],
  };
  const FringeBenefitsAdminSingleYears = createArraysOfObjects(padAllArraysToLength(FringeBenefitsAdmin, 11));
  // console.log('Fringe Benefits Admin:');
  // console.log(FringeBenefitsAdminSingleYears);

  const PersonnelFringeAdmin = {
    salary: [...sheetData[13].slice(0, 1), 0, ...sheetData[13].slice(2, 11)],
    FringeBenefits: shiftArrayRight(FringeBenefitsAdminSingleYears),
    personnelFringeSum: [...sheetData[26].slice(0, 1), 0, ...sheetData[26].slice(1, 10)],
  };
  const PersonnelFringeAdminSingleYears = createArraysOfObjects(padAllArraysToLength(PersonnelFringeAdmin, 11));
  // console.log('Personnel Fringe Admin:');
  // console.log(PersonnelFringeAdminSingleYears);

  const FringeBenefitsAdminStaff = {
    pensionAccumulation: [...sheetData[30].slice(0, 1), 0, ...sheetData[30].slice(2, 11)],
    retireeHealthInsurance: [...sheetData[31].slice(0, 1), 0, ...sheetData[31].slice(2, 11)],
    otherBenefits: [...sheetData[32].slice(0, 1), 0, ...sheetData[32].slice(2, 11)],
    healthFund: [...sheetData[33].slice(0, 1), 0, ...sheetData[33].slice(2, 11)],
    socialSecurity: [...sheetData[34].slice(0, 1), 0, ...sheetData[34].slice(2, 11)],
    medicare: [...sheetData[35].slice(0, 1), 0, ...sheetData[35].slice(2, 11)],
    workersCompensation: [...sheetData[36].slice(0, 1), 0, ...sheetData[36].slice(2, 11)],
    unemploymentCompensation: [...sheetData[37].slice(0, 1), 0, ...sheetData[37].slice(2, 11)],
    pensionCompensation: [...sheetData[38].slice(0, 1), 0, ...sheetData[38].slice(2, 11)],
    fringeBenefitsSum: [...sheetData[39].slice(0, 1), 0, ...sheetData[39].slice(1, 10)],
  };
  const FringeBenefitsAdminStaffSingleYears = createArraysOfObjects(padAllArraysToLength(FringeBenefitsAdminStaff, 11));
  // console.log('Fringe Benefits Admin Staff:');
  // console.log(FringeBenefitsAdminStaffSingleYears);

  const PersonnelFringeAdminStaff = {
    salary: [...sheetData[28].slice(0, 1), 0, ...sheetData[28].slice(2, 11)],
    FringeBenefits: shiftArrayRight(FringeBenefitsAdminStaffSingleYears),
    personnelFringeSum: [...sheetData[41].slice(0, 1), 0, ...sheetData[41].slice(1, 10)],
  };
  const PersonnelFringeAdminStaffSingleYears = createArraysOfObjects(padAllArraysToLength(PersonnelFringeAdminStaff, 11));
  // console.log('Personnel Fringe Admin Staff:');
  // console.log(PersonnelFringeAdminStaffSingleYears);

  const FringeBenefitsManagement = {
    pensionAccumulation: [...sheetData[45].slice(0, 1), 0, ...sheetData[45].slice(2, 11)],
    retireeHealthInsurance: [...sheetData[46].slice(0, 1), 0, ...sheetData[46].slice(2, 11)],
    otherBenefits: [...sheetData[47].slice(0, 1), 0, ...sheetData[47].slice(2, 11)],
    healthFund: [...sheetData[48].slice(0, 1), 0, ...sheetData[48].slice(2, 11)],
    socialSecurity: [...sheetData[49].slice(0, 1), 0, ...sheetData[49].slice(2, 11)],
    medicare: [...sheetData[50].slice(0, 1), 0, ...sheetData[50].slice(2, 11)],
    workersCompensation: [...sheetData[51].slice(0, 1), 0, ...sheetData[51].slice(2, 11)],
    unemploymentCompensation: [...sheetData[52].slice(0, 1), 0, ...sheetData[52].slice(2, 11)],
    pensionCompensation: [...sheetData[53].slice(0, 1), 0, ...sheetData[53].slice(2, 11)],
    fringeBenefitsSum: [...sheetData[54].slice(0, 1), 0, ...sheetData[54].slice(1, 10)],
  };
  const FringeBenefitsManagementSingleYears = createArraysOfObjects(padAllArraysToLength(FringeBenefitsManagement, 11));
  // console.log('Fringe Benefits Management:');
  // console.log(FringeBenefitsManagementSingleYears);

  const PersonnelFringeManagement = {
    salary: [...sheetData[43].slice(0, 1), 0, ...sheetData[43].slice(1, 10)],
    FringeBenefits: shiftArrayRight(FringeBenefitsManagementSingleYears),
    personnelFringeSum: [...sheetData[56].slice(0, 1), 0, ...sheetData[56].slice(1, 10)],
  };
  const PersonnelFringeManagementSingleYears = createArraysOfObjects(padAllArraysToLength(PersonnelFringeManagement, 11));
  // console.log('Personnel Fringe Management:');
  // console.log(PersonnelFringeManagementSingleYears);

  const Expenses = {
    personnel: [...sheetData[11].slice(0, 1), 0, ...sheetData[11].slice(2, 11)],
    PersonnelFringeAdmin: shiftArrayRight(PersonnelFringeAdminSingleYears),
    PersonnelFringeAdminStaff: shiftArrayRight(PersonnelFringeAdminStaffSingleYears),
    FringeAdminManagement: shiftArrayRight(PersonnelFringeManagementSingleYears),
    personnelFringeSum: ['idk', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // ask brandon about it later
    program: [...sheetData[58].slice(0, 1), 0, ...sheetData[58].slice(2, 11)],
    contracts: [...sheetData[59].slice(0, 1), 0, ...sheetData[59].slice(2, 11)],
    grants: [...sheetData[60].slice(0, 1), 0, ...sheetData[60].slice(2, 11)],
    travel: [...sheetData[61].slice(0, 1), 0, ...sheetData[61].slice(2, 11)],
    equipment: [...sheetData[62].slice(0, 1), 0, ...sheetData[62].slice(2, 11)],
    overhead: [...sheetData[63].slice(0, 1), 0, ...sheetData[63].slice(2, 11)],
    debutService: [...sheetData[63].slice(0, 1), 0, 0, 0, 0, 0, 0, ...sheetData[64].slice(2, 11)], // ask brandon about name
    other: [...sheetData[65].slice(0, 1), 0, ...sheetData[65].slice(2, 11)],
    totalExpenses: [...sheetData[66].slice(0, 1), 0, ...sheetData[66].slice(2, 11)],
  };
  const ExpensesSingleYears = createArraysOfObjects(padAllArraysToLength(Expenses, 11));
  // console.log('Expenses:');
  // console.log(ExpensesSingleYears);

  const Revenue = {
    investmentPortfolio: sheetData[5],
    revenues: sheetData[6],
    generalFunds: sheetData[7],
    coreBudget: [sheetData[8].slice(0, 7), 0, 0, 0, 0],
    totalRevenue: sheetData[9].slice(0, 11),
  };
  const RevenueSingleYears = createArraysOfObjects(padAllArraysToLength(Revenue, 10));
  // console.log('Revenue:');
  // console.log(RevenueSingleYears);

  return { RevenueSingleYears, ExpensesSingleYears, ExpenditurePerAuditedSingleYears };
};
