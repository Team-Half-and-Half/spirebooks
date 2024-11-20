import { createArraysOfObjects, padAllArraysToLength } from './ImportFunctions';

export const budgetPLImport = (sheetData) => {
  const ExpenditurePerAudited = {
    management: sheetData[69],
    supportServices: sheetData[70],
    beneficiaryAdvocacy: sheetData[71],
  };
  const ExpenditurePerAuditedSingleYears = createArraysOfObjects(padAllArraysToLength(ExpenditurePerAudited, 10));
  console.log('Expenditure Per Audited:');
  console.log(ExpenditurePerAuditedSingleYears);

  const FringeBenefitsAdmin = {
    pensionAccumulation: [...sheetData[15].slice(0, 1), ...sheetData[15].slice(2, 11)],
    retireeHealthInsurance: [...sheetData[16].slice(0, 1), ...sheetData[16].slice(2, 11)],
    otherBenefits: [...sheetData[17].slice(0, 1), ...sheetData[17].slice(2, 11)],
    healthFund: [...sheetData[18].slice(0, 1), ...sheetData[18].slice(2, 11)],
    socialSecurity: [...sheetData[19].slice(0, 1), ...sheetData[19].slice(2, 11)],
    medicare: [...sheetData[20].slice(0, 1), ...sheetData[20].slice(2, 11)],
    workersCompensation: [...sheetData[21].slice(0, 1), ...sheetData[21].slice(2, 11)],
    unemploymentCompensation: [...sheetData[22].slice(0, 1), ...sheetData[22].slice(2, 11)],
    pensionCompensation: [...sheetData[23].slice(0, 1), ...sheetData[23].slice(2, 11)],
    fringeBenefitsSum: [...sheetData[24].slice(0, 1), ...sheetData[24].slice(6, 9)],
  };
  const FringeBenefitsAdminSingleYears = createArraysOfObjects(padAllArraysToLength(FringeBenefitsAdmin, 10));
  console.log('Fringe Benefits Admin:');
  console.log(FringeBenefitsAdminSingleYears);

  const PersonnelFringeAdmin = {
    salary: [...sheetData[13].slice(0, 1), ...sheetData[13].slice(2, 11)],
    FringeBenefits: FringeBenefitsAdmin,
    personnelFringeSum: [...sheetData[26].slice(0, 1), ...sheetData[26].slice(6, 9)],
  };
  const PersonnelFringeAdminSingleYears = createArraysOfObjects(padAllArraysToLength(PersonnelFringeAdmin, 10));
  console.log('Personnel Fringe Admin:');
  console.log(PersonnelFringeAdminSingleYears);

  const FringeBenefitsAdminStaff = {
    pensionAccumulation: [...sheetData[30].slice(0, 1), ...sheetData[30].slice(2, 11)],
    retireeHealthInsurance: [...sheetData[31].slice(0, 1), ...sheetData[31].slice(2, 11)],
    otherBenefits: [...sheetData[32].slice(0, 1), ...sheetData[32].slice(2, 11)],
    healthFund: [...sheetData[33].slice(0, 1), ...sheetData[33].slice(2, 11)],
    socialSecurity: [...sheetData[34].slice(0, 1), ...sheetData[34].slice(2, 11)],
    medicare: [...sheetData[35].slice(0, 1), ...sheetData[35].slice(2, 11)],
    workersCompensation: [...sheetData[36].slice(0, 1), ...sheetData[36].slice(2, 11)],
    unemploymentCompensation: [...sheetData[37].slice(0, 1), ...sheetData[37].slice(2, 11)],
    pensionCompensation: [...sheetData[38].slice(0, 1), ...sheetData[38].slice(2, 11)],
    fringeBenefitsSum: [...sheetData[39].slice(0, 1), ...sheetData[39].slice(6, 9)],
  };
  const FringeBenefitsAdminStaffSingleYears = createArraysOfObjects(padAllArraysToLength(FringeBenefitsAdminStaff, 10));
  console.log('Fringe Benefits Admin Staff:');
  console.log(FringeBenefitsAdminStaffSingleYears);

  const PersonnelFringeAdminStaff = {
    salary: [...sheetData[28].slice(0, 1), ...sheetData[28].slice(2, 11)],
    FringeBenefits: FringeBenefitsAdminStaff,
    personnelFringeSum: [...sheetData[41].slice(0, 1), ...sheetData[41].slice(6, 9)],
  };
  const PersonnelFringeAdminStaffSingleYears = createArraysOfObjects(padAllArraysToLength(PersonnelFringeAdminStaff, 10));
  console.log('Personnel Fringe Admin Staff:');
  console.log(PersonnelFringeAdminStaffSingleYears);

  const FringeBenefitsManagement = {
    pensionAccumulation: [...sheetData[45].slice(0, 1), ...sheetData[45].slice(2, 11)],
    retireeHealthInsurance: [...sheetData[46].slice(0, 1), ...sheetData[46].slice(2, 11)],
    otherBenefits: [...sheetData[47].slice(0, 1), ...sheetData[47].slice(2, 11)],
    healthFund: [...sheetData[48].slice(0, 1), ...sheetData[48].slice(2, 11)],
    socialSecurity: [...sheetData[49].slice(0, 1), ...sheetData[49].slice(2, 11)],
    medicare: [...sheetData[50].slice(0, 1), ...sheetData[50].slice(2, 11)],
    workersCompensation: [...sheetData[51].slice(0, 1), ...sheetData[51].slice(2, 11)],
    unemploymentCompensation: [...sheetData[52].slice(0, 1), ...sheetData[52].slice(2, 11)],
    pensionCompensation: [...sheetData[53].slice(0, 1), ...sheetData[53].slice(2, 11)],
    fringeBenefitsSum: [...sheetData[54].slice(0, 1), ...sheetData[54].slice(6, 9)],
  };
  const FringeBenefitsManagementSingleYears = createArraysOfObjects(padAllArraysToLength(FringeBenefitsManagement, 10));
  console.log('Fringe Benefits Management:');
  console.log(FringeBenefitsManagementSingleYears);

  const PersonnelFringeManagement = {
    salary: [...sheetData[43].slice(0, 1), ...sheetData[43].slice(6, 9)],
    FringeBenefits: FringeBenefitsManagement,
    personnelFringeSum: [...sheetData[56].slice(0, 1), ...sheetData[56].slice(6, 9)],
  };
  const PersonnelFringeManagementSingleYears = createArraysOfObjects(padAllArraysToLength(PersonnelFringeManagement, 10));
  console.log('Personnel Fringe Management:');
  console.log(PersonnelFringeManagementSingleYears);

  const Expenses = {
    personnel: [...sheetData[11].slice(0, 1), ...sheetData[11].slice(2, 11)],
    PersonnelFringeAdmin: PersonnelFringeManagement,
    PersonnelFringeAdminStaff: PersonnelFringeAdminStaff,
    FringeAdminManagement: PersonnelFringeManagement,
    personnelFringeSum: null, // ask brandon about it later
    program: [...sheetData[58].slice(0, 1), ...sheetData[58].slice(2, 11)],
    contracts: [...sheetData[59].slice(0, 1), ...sheetData[59].slice(2, 11)],
    grants: [...sheetData[60].slice(0, 1), ...sheetData[60].slice(2, 11)],
    travel: [...sheetData[61].slice(0, 1), ...sheetData[61].slice(2, 11)],
    equipment: [...sheetData[62].slice(0, 1), ...sheetData[62].slice(2, 11)],
    overhead: [...sheetData[63].slice(0, 1), ...sheetData[63].slice(2, 11)],
    debutService: sheetData[64], // ask brandon about name
    other: [...sheetData[65].slice(0, 1), ...sheetData[65].slice(2, 11)],
    totalExpenses: [...sheetData[66].slice(0, 1), ...sheetData[66].slice(2, 11)],
  };
  const ExpensesSingleYears = createArraysOfObjects(padAllArraysToLength(Expenses, 10));
  console.log('Expenses:');
  console.log(ExpensesSingleYears);

  const Revenue = {
    investmentPortfolio: [...sheetData[5].slice(0, 1), ...sheetData[5].slice(2, 11)],
    revenues: [...sheetData[6].slice(0, 1), ...sheetData[6].slice(2, 11)],
    generalFunds: [...sheetData[7].slice(0, 1), ...sheetData[7].slice(2, 11)],
    coreBudget: [...sheetData[8].slice(0, 3), ...sheetData[8].slice(5, 6)],
    totalRevenue: [...sheetData[9].slice(0, 1), ...sheetData[9].slice(2, 11)],
  };
  const RevenueSingleYears = createArraysOfObjects(padAllArraysToLength(Revenue, 10));
  console.log('Revenue:');
  console.log(RevenueSingleYears);
};
