import { createArraysOfObjects, padAllArraysToLength } from './ImportFunctions';

export const budgetPLImport = (sheetData) => {
  const ExpenditurePerAudited = {
    management: [...sheetData[69].slice(0, 0), ...sheetData[69].slice(6, 9)],
    supportServices: [...sheetData[70].slice(0, 0), ...sheetData[70].slice(6, 9)],
    beneficiaryAdvocacy: [...sheetData[71].slice(0, 0), ...sheetData[71].slice(6, 9)],
  };
  console.log(ExpenditurePerAudited);

  const FringeBenefitsAdmin = {
    pensionAccumulation: [...sheetData[15].slice(0, 0), ...sheetData[15].slice(7, 10)],
    retireeHealthInsurance: [...sheetData[16].slice(0, 0), ...sheetData[16].slice(7, 10)],
    otherBenefits: [...sheetData[17].slice(0, 0), ...sheetData[17].slice(7, 10)],
    healthFund: [...sheetData[18].slice(0, 0), ...sheetData[18].slice(7, 10)],
    socialSecurity: [...sheetData[19].slice(0, 0), ...sheetData[19].slice(7, 10)],
    medicare: [...sheetData[20].slice(0, 0), ...sheetData[20].slice(7, 10)],
    workersCompensation: [...sheetData[21].slice(0, 0), ...sheetData[21].slice(7, 10)],
    unemploymentCompensation: [...sheetData[22].slice(0, 0), ...sheetData[22].slice(7, 10)],
    pensionCompensation: [...sheetData[23].slice(0, 0), ...sheetData[23].slice(7, 10)],
    fringeBenefitsSum: [...sheetData[24].slice(0, 0), ...sheetData[24].slice(6, 9)],
  };
  const FringeBenefitsAdminSingleYears = createArraysOfObjects(padAllArraysToLength(FringeBenefitsAdmin, 5));
  console.log('Fringe Benefits Admin:');
  console.log(FringeBenefitsAdminSingleYears);

  const PersonnelFringeAdmin = {
    salary: [...sheetData[13].slice(0, 0), ...sheetData[13].slice(7, 10)],
    FringeBenefits: FringeBenefitsAdmin,
    personnelFringeSum: [...sheetData[26].slice(0, 0), ...sheetData[26].slice(6, 9)],
  };
  const PersonnelFringeAdminSingleYears = createArraysOfObjects(padAllArraysToLength(PersonnelFringeAdmin, 5));
  console.log('Personnel Fringe Admin:');
  console.log(PersonnelFringeAdminSingleYears);

  const FringeBenefitsAdminStaff = {
    pensionAccumulation: [...sheetData[30].slice(0, 0), ...sheetData[30].slice(7, 10)],
    retireeHealthInsurance: [...sheetData[31].slice(0, 0), ...sheetData[31].slice(7, 10)],
    otherBenefits: [...sheetData[32].slice(0, 0), ...sheetData[32].slice(7, 10)],
    healthFund: [...sheetData[33].slice(0, 0), ...sheetData[33].slice(7, 10)],
    socialSecurity: [...sheetData[34].slice(0, 0), ...sheetData[34].slice(7, 10)],
    medicare: [...sheetData[35].slice(0, 0), ...sheetData[35].slice(7, 10)],
    workersCompensation: [...sheetData[36].slice(0, 0), ...sheetData[36].slice(7, 10)],
    unemploymentCompensation: [...sheetData[37].slice(0, 0), ...sheetData[37].slice(7, 10)],
    pensionCompensation: [...sheetData[38].slice(0, 0), ...sheetData[38].slice(7, 10)],
    fringeBenefitsSum: [...sheetData[39].slice(0, 0), ...sheetData[39].slice(6, 9)],
  };
  const FringeBenefitsAdminStaffSingleYears = createArraysOfObjects(padAllArraysToLength(FringeBenefitsAdminStaff, 5));
  console.log('Fringe Benefits Admin Staff:');
  console.log(FringeBenefitsAdminStaffSingleYears);

  const PersonnelFringeAdminStaff = {
    salary: [...sheetData[28].slice(0, 0), ...sheetData[28].slice(7, 10)],
    FringeBenefits: FringeBenefitsAdminStaff,
    personnelFringeSum: [...sheetData[41].slice(0, 0), ...sheetData[41].slice(6, 9)],
  };
  const PersonnelFringeAdminStaffSingleYears = createArraysOfObjects(padAllArraysToLength(PersonnelFringeAdminStaff, 5));
  console.log('Personnel Fringe Admin Staff:');
  console.log(PersonnelFringeAdminStaffSingleYears);

  const FringeBenefitsManagement = {
    pensionAccumulation: [...sheetData[45].slice(0, 0), ...sheetData[45].slice(7, 10)],
    retireeHealthInsurance: [...sheetData[46].slice(0, 0), ...sheetData[46].slice(7, 10)],
    otherBenefits: [...sheetData[47].slice(0, 0), ...sheetData[47].slice(7, 10)],
    healthFund: [...sheetData[48].slice(0, 0), ...sheetData[48].slice(7, 10)],
    socialSecurity: [...sheetData[49].slice(0, 0), ...sheetData[49].slice(7, 10)],
    medicare: [...sheetData[50].slice(0, 0), ...sheetData[50].slice(7, 10)],
    workersCompensation: [...sheetData[51].slice(0, 0), ...sheetData[51].slice(7, 10)],
    unemploymentCompensation: [...sheetData[52].slice(0, 0), ...sheetData[52].slice(7, 10)],
    pensionCompensation: [...sheetData[53].slice(0, 0), ...sheetData[53].slice(7, 10)],
    fringeBenefitsSum: [...sheetData[54].slice(0, 0), ...sheetData[54].slice(6, 9)],
  };
  const FringeBenefitsManagementSingleYears = createArraysOfObjects(padAllArraysToLength(FringeBenefitsManagement, 5));
  console.log('Fringe Benefits Management:');
  console.log(FringeBenefitsManagementSingleYears);

  const PersonnelFringeManagement = {
    salary: [...sheetData[43].slice(0, 0), ...sheetData[43].slice(6, 9)],
    FringeBenefits: FringeBenefitsManagement,
    personnelFringeSum: [...sheetData[56].slice(0, 0), ...sheetData[56].slice(6, 9)],
  };
  const PersonnelFringeManagementSingleYears = createArraysOfObjects(padAllArraysToLength(PersonnelFringeManagement, 5));
  console.log('Personnel Fringe Management:');
  console.log(PersonnelFringeManagementSingleYears);

  const Expenses = {
    personnel: [...sheetData[11].slice(0, 0), ...sheetData[11].slice(7, 10)],
    PersonnelFringeAdmin: PersonnelFringeManagement,
    PersonnelFringeAdminStaff: PersonnelFringeAdminStaff,
    FringeAdminManagement: PersonnelFringeManagement,
    personnelFringeSum: null, // ask brandon about it later
    program: [...sheetData[58].slice(0, 0), ...sheetData[58].slice(7, 10)],
    contracts: [...sheetData[59].slice(0, 0), ...sheetData[59].slice(7, 10)],
    grants: [...sheetData[60].slice(0, 0), ...sheetData[60].slice(7, 10)],
    travel: [...sheetData[61].slice(0, 0), ...sheetData[61].slice(7, 10)],
    equipment: [...sheetData[62].slice(0, 0), ...sheetData[62].slice(7, 10)],
    overhead: [...sheetData[63].slice(0, 0), ...sheetData[63].slice(7, 10)],
    debutService: sheetData[64], // ask brandon about name
    other: [...sheetData[65].slice(0, 0), ...sheetData[65].slice(7, 10)],
    totalExpenses: [...sheetData[66].slice(0, 0), ...sheetData[66].slice(7, 10)],
  };
  const ExpensesSingleYears = createArraysOfObjects(padAllArraysToLength(Expenses, 5));
  console.log('Expenses:');
  console.log(ExpensesSingleYears);

  const Revenue = {
    investmentPortfolio: [...sheetData[5].slice(0, 0), ...sheetData[5].slice(7, 10)],
    revenues: [...sheetData[6].slice(0, 0), ...sheetData[6].slice(7, 10)],
    generalFunds: [...sheetData[7].slice(0, 0), ...sheetData[7].slice(7, 10)],
    coreBudget: [...sheetData[8].slice(0, 3), ...sheetData[8].slice(5, 6)],
    totalRevenue: [...sheetData[9].slice(0, 0), ...sheetData[9].slice(7, 10)],
  };
  const RevenueSingleYears = createArraysOfObjects(padAllArraysToLength(Revenue, 5));
  console.log('Revenue:');
  console.log(RevenueSingleYears);
};
