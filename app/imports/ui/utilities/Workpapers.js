/**
 *  Blue tab data from FC draft spreadsheet
 * */

// data for the green columns only (actuals)
export const wp4001 = [
  {
    year: 6,
    projectedCoreOpBudget: 35344547,
    FiveYearSecured: {
      interest: 46926,
      principal: 0,
      get totalDebtService() {
        return this.interest + this.principal;
      },
      get PercentOfCoreOpBudget() {
        return this.totalDebtService / wp4001[0].projectedCoreOpBudget;
      },
    },
    SevenYearSecured: {
      interest: 46926,
      principal: 0,
      get totalDebtService() {
        return this.interest + this.principal;
      },
      get PercentOfCoreOpBudget() {
        return this.totalDebtService / wp4001[0].projectedCoreOpBudget;
      },
    },
    NineYearSecured: {
      interest: 15891,
      principal: 0,
      get totalDebtService() {
        return this.interest + this.principal;
      },
      get PercentOfCoreOpBudget() {
        return this.totalDebtService / wp4001[0].projectedCoreOpBudget;
      },
    },
  },
  {
    year: 7,
    projectedCoreOpBudget: 35646697,
    FiveYearSecured: {
      interest: 91114,
      principal: 308334,
      get totalDebtService() {
        return this.interest + this.principal;
      },
      get PercentOfCoreOpBudget() {
        return this.totalDebtService / wp4001[1].projectedCoreOpBudget;
      },
    },
    SevenYearSecured: {
      interest: 99279,
      principal: 185000,
      get totalDebtService() {
        return this.interest + this.principal;
      },
      get PercentOfCoreOpBudget() {
        return this.totalDebtService / wp4001[1].projectedCoreOpBudget;
      },
    },
    NineYearSecured: {
      interest: 37206,
      principal: 0,
      get totalDebtService() {
        return this.interest + this.principal;
      },
      get PercentOfCoreOpBudget() {
        return this.totalDebtService / wp4001[1].projectedCoreOpBudget;
      },
    },
  },
  {
    year: 8,
    projectedCoreOpBudget: 35830678,
    FiveYearSecured: {
      interest: 96447,
      principal: 1233333,
      get totalDebtService() {
        return this.interest + this.principal;
      },
      get PercentOfCoreOpBudget() {
        return this.totalDebtService / wp4001[2].projectedCoreOpBudget;
      },
    },
    SevenYearSecured: {
      interest: 136753,
      principal: 740000,
      get totalDebtService() {
        return this.interest + this.principal;
      },
      get PercentOfCoreOpBudget() {
        return this.totalDebtService / wp4001[2].projectedCoreOpBudget;
      },
    },
    NineYearSecured: {
      interest: 45414,
      principal: 506857,
      get totalDebtService() {
        return this.interest + this.principal;
      },
      get PercentOfCoreOpBudget() {
        return this.totalDebtService / wp4001[2].projectedCoreOpBudget;
      },
    },
  },
  {
    year: 9,
    projectedCoreOpBudget: 36157686,
    FiveYearSecured: {
      interest: 51060,
      principal: 1233333,
      get totalDebtService() {
        return this.interest + this.principal;
      },
      get PercentOfCoreOpBudget() {
        return this.totalDebtService / wp4001[3].projectedCoreOpBudget;
      },
    },
    SevenYearSecured: {
      interest: 103601,
      principal: 740000,
      get totalDebtService() {
        return this.interest + this.principal;
      },
      get PercentOfCoreOpBudget() {
        return this.totalDebtService / wp4001[3].projectedCoreOpBudget;
      },
    },
    NineYearSecured: {
      interest: 62103,
      principal: 506857,
      get totalDebtService() {
        return this.interest + this.principal;
      },
      get PercentOfCoreOpBudget() {
        return this.totalDebtService / wp4001[3].projectedCoreOpBudget;
      },
    },
  },
];
