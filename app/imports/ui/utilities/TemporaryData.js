/** Defines some temporary chart data */

// temporary data for CustomLineChart, replace with subscriptions to correct databases
export const singleChartData = [
  { name: 'Year 1', test: 4000, edited: 2400, amt: 2400 },
  { name: 'Year 2', test: 3000, edited: 1398, amt: 2210 },
  { name: 'Year 3', test: 2000, edited: 9800, amt: 2290 },
  { name: 'Year 4', test: 2780, edited: 3908, amt: 2000 },
  { name: 'Year 5', test: 1890, edited: 4800, amt: 2181 },
  { name: 'Year 6', test: 2390, edited: 3800, amt: 2500 },
  { name: 'Year 7', test: 3490, edited: 4300, amt: 2100 },
];

// Hard coded snapshot data for the dashboard:
export const snapshotData = [
  { year: 'Year 1', assets: 689525419, liabilities: 141198656.857143, cash_on_hand: 20091667,
    investment: 343726298, debt: 66193142.8571429, revenues: 35693705, opex: 35603263,
    cash_inflow: 35693705, inflows: 506857.142857143, admin: 1002981.07542109, mgmt_staff: 238655.377862348, mgmt: 94377.1433807999 },
  { year: 'Year 2', assets: 698716700, liabilities: 117607299.714286, cash_on_hand: 22647878,
    investment: 410021540, debt: 41686285.7142857, revenues: 35567019, opex: 36014771,
    cash_inflow: 35567019, inflows: 506857.142857143, admin: 1315573.0097281, mgmt_staff: 214997.452815937, mgmt: 104657.735304653 },
  { year: 'Year 3', assets: 691355316.751259, liabilities: 116810541.238095, cash_on_hand: 18695599.0793702,
    investment: 409541917.905223, debt: 41179428.5714286, revenues: 35914282.09008, opex: 36803492.8678527,
    cash_inflow: 35914282.09008, inflows: 506857.142857143, admin: 1589642.40324241, mgmt_staff: 393059.771843168, mgmt: 115232.1724 },
  { year: 'Year 4', assets: 700301818.643744, liabilities: 113248352.984127, cash_on_hand: 21592948.2770016,
    investment: 418441322.033409, debt: 37672571.4285714, revenues: 36670341.0360191, opex: 37218413.6161603,
    cash_inflow: 36670341.0360191, inflows: 506857.142857143, admin: 1810733.61125723, mgmt_staff: 454060.519247739, mgmt: 122651.684292142 },
];

// Calculate financial metrics and convert everything to millions afterward
snapshotData.forEach(year => {
  year.net_position = year.assets - year.liabilities;
  year.liquidity = year.cash_on_hand + year.investment;
  year.net_income = year.revenues - year.opex;
  year.cash_outflow = year.opex - year.inflows;
  year.net_cashflow = year.cash_inflow - year.cash_outflow;
  year.incremental_fringe_benefits = year.admin + year.mgmt_staff + year.mgmt;
});

// Now convert all relevant metrics to millions
snapshotData.forEach(year => {
  year.assets = year.assets / 1000000; // Convert to millions
  year.liabilities = year.liabilities / 1000000;
  year.cash_on_hand = year.cash_on_hand / 1000000;
  year.investment = year.investment / 1000000;
  year.debt = year.debt / 1000000;
  year.revenues = year.revenues / 1000000;
  year.opex = year.opex / 1000000;
  year.cash_inflow = year.cash_inflow / 1000000;
  year.inflows = year.inflows / 1000000;
  year.admin = year.admin / 1000000;
  year.mgmt_staff = year.mgmt_staff / 1000000;
  year.mgmt = year.mgmt / 1000000;

  // Convert calculated metrics to millions as well
  year.net_position /= 1000000;
  year.liquidity /= 1000000;
  year.net_income /= 1000000;
  year.cash_outflow /= 1000000;
  year.net_cashflow /= 1000000;
  year.incremental_fringe_benefits /= 1000000;
});

// sample data to test that the dropdown menu changes the charts in CompareProjections
export const multipleChartData = {
  chart1: [
    { name: 'Year 1', actual: 10, edited: 25, amt: 15 },
    { name: 'Year 2', actual: 30, edited: 18, amt: 22 },
    { name: 'Year 3', actual: 22, edited: 45, amt: 33 },
    { name: 'Year 4', actual: 17, edited: 40, amt: 28 },
    { name: 'Year 5', actual: 12, edited: 55, amt: 35 },
    { name: 'Year 6', actual: 27, edited: 20, amt: 23 },
    { name: 'Year 7', actual: 35, edited: 32, amt: 27 },
  ],
  chart2: [
    { name: 'Year 1', actual: 15, edited: 30, amt: 20 },
    { name: 'Year 2', actual: 20, edited: 22, amt: 18 },
    { name: 'Year 3', actual: 12, edited: 50, amt: 40 },
    { name: 'Year 4', actual: 25, edited: 38, amt: 32 },
    { name: 'Year 5', actual: 28, edited: 55, amt: 37 },
    { name: 'Year 6', actual: 18, edited: 25, amt: 30 },
    { name: 'Year 7', actual: 30, edited: 40, amt: 28 },
  ],
  chart3: [
    { name: 'Year 1', actual: 20, edited: 35, amt: 25 },
    { name: 'Year 2', actual: 12, edited: 28, amt: 20 },
    { name: 'Year 3', actual: 18, edited: 48, amt: 35 },
    { name: 'Year 4', actual: 30, edited: 40, amt: 33 },
    { name: 'Year 5', actual: 24, edited: 52, amt: 39 },
    { name: 'Year 6', actual: 15, edited: 30, amt: 32 },
    { name: 'Year 7', actual: 33, edited: 45, amt: 29 },
  ],
};
