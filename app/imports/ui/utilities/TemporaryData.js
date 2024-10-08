/** Defines some temporary chart data */

// temporary data for CustomLineChart, replace with subscriptions to correct databases
export const singleChartData = [
  { name: 'Year 1', actual: 4000, edited: 2400, amt: 2400 },
  { name: 'Year 2', actual: 3000, edited: 1398, amt: 2210 },
  { name: 'Year 3', actual: 2000, edited: 9800, amt: 2290 },
  { name: 'Year 4', actual: 2780, edited: 3908, amt: 2000 },
  { name: 'Year 5', actual: 1890, edited: 4800, amt: 2181 },
  { name: 'Year 6', actual: 2390, edited: 3800, amt: 2500 },
  { name: 'Year 7', actual: 3490, edited: 4300, amt: 2100 },
];

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
