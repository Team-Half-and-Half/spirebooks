export const sumTotalRevenue = (Revenue) => Object.keys(Revenue).reduce((sum, key) => {
  if (key !== 'totalRevenue') {
    return sum + Revenue[key];
  }
  return sum;
}, 0);

export const sumFringeBenefits = (FringeBenefits) => Object.keys(FringeBenefits).reduce((sum, key) => {
  if (key !== 'fringeBenefitsSum') {
    return sum + FringeBenefits[key];
  }
  return sum;
}, 0);

export const sumExpenses = (totalRevenue, Expenses) => Object.keys(Expenses).reduce((sum, key) => {
  if (key !== 'totalExpenses' && typeof Expenses[key] !== 'object') {
    return sum + Expenses[key];
  }
  return sum + totalRevenue;
}, 0);

// todo: add actual year check to schema and functions

export const sumFringe = (fringeBenefitManagement, salary, management, personnel) => {
  const fringeManagement = fringeBenefitManagement + salary;
  const fringeStaff = fringeManagement - management;
  const fringeAdmin = -(personnel + fringeStaff + fringeManagement);
  return { fringeManagement, fringeStaff, fringeAdmin };
};

export const sumSurplus = (totalRevenue, totalExpenses) => totalRevenue - totalExpenses;

export const calcSalary = (compositeRate, fringe) => fringe / (1 + compositeRate);

// todo: pensionCompensation name change to pensionAdministration in schema and json.
// todo: add year 0 and 1 check to use year 2 percentages
export const calcFringeBenefitManagement = (year, percentages, fringeBenefits, salary) => {
  const percentageKeys = Object.keys(percentages);
  const fringeBenefitKeys = Object.keys(fringeBenefits);
  const result = {};
  if (year !== 0) {
    for (let i = 0; i < percentageKeys.length - 1; i++) {
      const percentageKey = percentageKeys[i];
      const fringeBenefitKey = fringeBenefitKeys[i];
      result[fringeBenefitKey] = salary * percentages[percentageKey];
    }
    return result;
  }
  return {};
};
// For Admin and Staff
export const calcFringeBenefit = (year, percentages, fringeBenefits, summedFringe) => {
  const percentageKeys = Object.keys(percentages);
  const compositeRate = percentages.composite_rate;
  const fringeBenefitKeys = Object.keys(fringeBenefits);
  const result = {};
  if (year !== 0) {
    for (let i = 0; i < percentageKeys.length - 1; i++) {
      const percentageKey = percentageKeys[i];
      const fringeBenefitKey = fringeBenefitKeys[i];
      result[fringeBenefitKey] = (summedFringe / ((1 / compositeRate) + 1)) * (percentages[percentageKey] / compositeRate);
    }
    return result;
  }
  return {};
};
