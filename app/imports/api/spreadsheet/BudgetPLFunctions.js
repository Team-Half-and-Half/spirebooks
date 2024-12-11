const percentages = [
  {
    year: 2,
    percentages: {
      pension_accumulation: 15.00,
      retiree_health_insurance: 7.96,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 7.02,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.22,
      unemployment_compensation: 0.91,
      pension_administration: 0.00,
      composite_rate: 39.76,
    },
  },
  {
    year: 3,
    percentages: {
      pension_accumulation: 15.50,
      retiree_health_insurance: 10.35,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 6.84,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 0.88,
      unemployment_compensation: 0.31,
      pension_administration: 0.01,
      composite_rate: 41.54,
    },
  },
  {
    year: 4,
    percentages: {
      pension_accumulation: 16.00,
      retiree_health_insurance: 10.12,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 6.81,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.16,
      unemployment_compensation: 0.25,
      pension_administration: 0.00,
      composite_rate: 41.99,
    },
  },
  {
    year: 5,
    percentages: {
      pension_accumulation: 16.50,
      retiree_health_insurance: 10.12,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 6.81,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.16,
      unemployment_compensation: 0.25,
      pension_administration: 0.00,
      composite_rate: 42.49,
    },
  },
  {
    year: 6,
    percentages: {
      pension_accumulation: 17.00,
      retiree_health_insurance: 8.07,
      other_post_employment_benefits: 7.78,
      employees_health_fund: 7.62,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.27,
      unemployment_compensation: 0.15,
      pension_administration: 0.00,
      composite_rate: 49.54,
    },
  },
  {
    year: 7,
    percentages: {
      pension_accumulation: 17.00,
      retiree_health_insurance: 9.39,
      other_post_employment_benefits: 12.69,
      employees_health_fund: 7.60,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.06,
      unemployment_compensation: 0.09,
      pension_administration: 0.01,
      composite_rate: 55.48,
    },
  },
  {
    year: 8,
    percentages: {
      pension_accumulation: 18.00,
      retiree_health_insurance: 10.14,
      other_post_employment_benefits: 14.33,
      employees_health_fund: 7.69,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.24,
      unemployment_compensation: 0.02,
      pension_administration: 0.01,
      composite_rate: 59.08,
    },
  },
  {
    year: 9,
    percentages: {
      pension_accumulation: 19.00,
      retiree_health_insurance: 10.14,
      other_post_employment_benefits: 14.33,
      employees_health_fund: 7.69,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.24,
      unemployment_compensation: 0.02,
      pension_administration: 0.01,
      composite_rate: 60.08,
    },
  },
  {
    year: 10,
    percentages: {
      pension_accumulation: 22.00,
      retiree_health_insurance: 10.14,
      other_post_employment_benefits: 14.33,
      employees_health_fund: 7.69,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.24,
      unemployment_compensation: 0.02,
      pension_administration: 0.01,
      composite_rate: 63.08,
    },
  },
  {
    year: 11,
    percentages: {
      pension_accumulation: 22.84,
      retiree_health_insurance: 10.96,
      other_post_employment_benefits: 14.45,
      employees_health_fund: 7.71,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.24,
      unemployment_compensation: 0.01,
      pension_administration: 0.00,
      composite_rate: 64.87,
    },
  },
  {
    year: 12,
    percentages: {
      pension_accumulation: 23.71,
      retiree_health_insurance: 11.85,
      other_post_employment_benefits: 14.56,
      employees_health_fund: 7.74,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.24,
      unemployment_compensation: 0.01,
      pension_administration: 0.00,
      composite_rate: 66.76,
    },
  },
  {
    year: 13,
    percentages: {
      pension_accumulation: 24.61,
      retiree_health_insurance: 12.81,
      other_post_employment_benefits: 14.68,
      employees_health_fund: 7.76,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.25,
      unemployment_compensation: 0.00,
      pension_administration: 0.00,
      composite_rate: 68.77,
    },
  },
];
export const getYearPercentages = (year) => {
  const yearPercentages = percentages.find((entry) => entry.year === year);
  return yearPercentages.percentages;
};
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

export const sumExpenses = (Expenses) => Object.keys(Expenses).reduce((sum, key) => {
  if (key !== 'totalExpenses' && typeof Expenses[key] !== 'object') {
    return sum + Expenses[key];
  }
  return sum;
}, 0);

// todo: add actual year check to schema and functions

export const sumFringe = (fringeBenefitManagement, salary, management, personnel) => {
  const fringeManagement = fringeBenefitManagement + salary;

  const fringeStaff = management - fringeManagement;

  const fringeAdmin = -(personnel + fringeStaff + fringeManagement);
  return { fringeManagement, fringeStaff, fringeAdmin };
};

export const sumSurplus = (totalRevenue, totalExpenses) => totalRevenue - totalExpenses;

export const calcSalary = (compositeRate, fringe) => (fringe / (1 + (compositeRate) / 100));
// todo: pensionCompensation name change to pensionAdministration in schema and json.
// todo: add year 0 and 1 check to use year 2 percentages
export const calcFringeBenefitManagement = (year, yearPercentages, fringeBenefits, salary) => {
  const percentageKeys = Object.keys(yearPercentages);
  const fringeBenefitKeys = Object.keys(fringeBenefits);
  const result = {};
  if (year !== 0) {
    for (let i = 0; i < percentageKeys.length - 1; i++) {
      const percentageKey = percentageKeys[i];
      const fringeBenefitKey = fringeBenefitKeys[i];
      result[fringeBenefitKey] = salary * ((yearPercentages[percentageKey]) / 100);
    }
    return result;
  }
  return {};
};
// For Admin and Staff
export const calcFringeBenefit = (year, yearPercentages, fringeBenefits, summedFringe) => {
  const percentageKeys = Object.keys(yearPercentages);
  const compositeRate = yearPercentages.composite_rate / 100;
  const fringeBenefitKeys = Object.keys(fringeBenefits);
  const result = {};
  if (year !== 0) {
    for (let i = 0; i < percentageKeys.length - 1; i++) {
      const percentageKey = percentageKeys[i];
      const fringeBenefitKey = fringeBenefitKeys[i];
      result[fringeBenefitKey] = (summedFringe / ((1 / compositeRate) + 1)) * ((yearPercentages[percentageKey] / 100) / compositeRate);
    }
    return result;
  }
  return {};
};
