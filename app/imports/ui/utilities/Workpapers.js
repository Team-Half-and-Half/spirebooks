/*
 *  Blue tab data from FC draft spreadsheet
 */

/*
 * Workpaper 4001: Building B Line of Credit Projections
 * contains data from the green columns only (first 4 years), might need to split up by scenarios instead of by years if we want to utilize full table?
 */
export const wp4001 = {
  number: '4002',
  name: 'Building B Line of Credit Projections',
  description: 'Building B LOC model with three scenarios of refinancing',
  data: [
    {
      year: 6,
      projectedCoreOpBudget: 35344547, // value shared between the 3 scenarios
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
      projectedCoreOpBudget: 35646697, // value shared between the 3 scenarios
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
      projectedCoreOpBudget: 35830678, // value shared between the 3 scenarios
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
      projectedCoreOpBudget: 36157686, // value shared between the 3 scenarios
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
  ]
};

/*
 * Workpaper 2005-2: Investment Portfolio 4-8-12 Year Forecast
 * data from the main table, orange columns only (raw data). blue columns are forecasted values calculated w/ values outside this main table
 */
export const wp2005 = {
  number: '2005-2',
  name: 'Investment Portfolio 4-8-12 Year Forecast',
  description: 'Forecasts investments gain and balance forward, as well as the draw on the portfolio for the budget and fiscal reserve',
  data: [
    {
      year: 7,
      traditionalGlobalEquity: 158011838,
      traditionalFixedIncome: 29697142,
      traditionalRealAssets: 20361742,
      hedgeFunds: 23739917,
      privateMarkets: 83160801,
      enhancedLiquidity: 21583836,
      hawaiiDirectInvestments: 18271420,
      get marketValue() {
        return this.traditionalGlobalEquity + this.traditionalFixedIncome + this.traditionalRealAssets + this.hedgeFunds + this.privateMarkets + this.enhancedLiquidity + this.hawaiiDirectInvestments;
      },
    },
    {
      year: 8,
      traditionalGlobalEquity: 124226300,
      traditionalFixedIncome: 69701867,
      traditionalRealAssets: 10312152,
      hedgeFunds: 45584015,
      privateMarkets: 79436265,
      enhancedLiquidity: 11583159,
      hawaiiDirectInvestments: 17306866,
      get marketValue() {
        return this.traditionalGlobalEquity + this.traditionalFixedIncome + this.traditionalRealAssets + this.hedgeFunds + this.privateMarkets + this.enhancedLiquidity + this.hawaiiDirectInvestments;
      },
    },
    {
      year: 9,
      traditionalGlobalEquity: 168183117,
      traditionalFixedIncome: 61363045,
      traditionalRealAssets: 18150350,
      hedgeFunds: 45620759,
      privateMarkets: 78629445,
      enhancedLiquidity: 6167938,
      hawaiiDirectInvestments: 18573793,
      get marketValue() {
        return this.traditionalGlobalEquity + this.traditionalFixedIncome + this.traditionalRealAssets + this.hedgeFunds + this.privateMarkets + this.enhancedLiquidity + this.hawaiiDirectInvestments;
      },
    },
  ],
};
