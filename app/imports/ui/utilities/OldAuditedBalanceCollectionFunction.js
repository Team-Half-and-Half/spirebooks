// Old Data Collection
// const collectData = (sheetData) => {
//   // Clears empty slots caused by spaces in cells
//   const innerEmptyRemoved = sheetData.map(innerArray => innerArray.filter(item => item != null && item !== ''));
//   const emptyRemoved = innerEmptyRemoved.filter(innerArray => innerArray.length > 0);
//
//   // Removes unnecessary data caused by xlsx formatting
//   const unnecessaryData = ['Audited FS', 'Audited FS, Statement of Net Position', 'Audited FS, Investment Footnote', 'Audited FS, Capital Assets Footnote', 'Audited FS, Long-Term Liabilities Footnote'];
//   const unnecessaryDataRemoved = emptyRemoved.map(innerArray => innerArray.filter(item => !unnecessaryData.includes(item)));
//
//   // Collects arrays holding net position data
//   const netPositionItems = ['Invested in capital assets, net of related debt', 'Restricted - federal funds', 'Unrestricted', 'Total net position', 'Total Liabilities, Deferred Inflows of Resources and  Net Position'];
//   const netPositionData = {};
//   for (const item of netPositionItems) {
//     netPositionData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
//   }
//
//   // Collects arrays holding long term liabilities data
// eslint-disable-next-line max-len
//   const longTermLiabilitiesItems = ['Accrued vacation', "Workers' compensation", 'Accrued management retirement plan', 'Accrued lease guaranty obligation', 'Capital lease obligation', 'Notes payable - Building A acquisition', 'Net Pension Liability', 'Net OPEB Liability', 'Line of Credit - Building A', 'Line of Credit - Building B', 'Debt Service', 'Long-term liabilities - due after one year'];
//   const longTermLiabilitiesData = {};
//   for (const item of longTermLiabilitiesItems) {
//     longTermLiabilitiesData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
//   }
//
//   // Collects arrays holding liabilities data
// eslint-disable-next-line max-len
//   const liabilitiesItems = ['Accounts payable and accrued liabilities', 'Due to fund', 'Due to other fund', 'Long-term liabilities - due within one year', 'Long-term liabilities - due after one year', 'Total Liabilities', 'Deferred inflows of resources related to pensions', 'Deferred inflows of resources related to OPEB', 'Total liabilities and deferred inflows of resources'];
//   const liabilitiesData = {};
//   for (const item of liabilitiesItems) {
//     liabilitiesData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
//   }
//
//   // Collects arrays holding Liabilities B Asset data (fix later)
//   const liabilitiesBAssetItems = ['Buildings', 'Leasehold improvements', 'Furniture, fixtures and equipment', 'Vehicles', 'Less accumulated depreciation', 'Net', 'Land', "Subtotal - Limited Liability Company B's assets, net"];
//   const liabilitiesBAssetData = {};
//   for (const item of liabilitiesBAssetItems) {
//     liabilitiesBAssetData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
//   }
//
//   // Collects arrays holding Assets data (fix later)
//   const assetsItems = ['Buildings', 'Leasehold improvements', 'Furniture, fixtures and equipment', 'Less accumulated depreciation', 'Net', 'Land A', 'Land B', 'Construction in Progress', 'Subtotal - Capital Assets, net'];
//   const assetsData = {};
//   for (const item of assetsItems) {
//     assetsData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
//   }
//
//   // Collects arrays holding Capital Assets Net data (fix later)
//   const capitalAssetsNetItems = ['Assets', "Limited Liability Company B's Assets", 'Capital Assets, net'];
//   const capitalAssetsNetData = {};
//   for (const item of capitalAssetsNetItems) {
//     capitalAssetsNetData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
//   }
//
//   // Collects arrays holding Investments data
// eslint-disable-next-line max-len
//   const investmentsItems = ['Mutual Funds', 'Commingled funds', 'Hedge funds', 'Private equity', 'Common trust fund', 'Common & preferred stock', 'Private debt', 'Other', 'Subtotal - Investment', 'U.S. treasuries', 'U.S. agencies', 'Subtotal - Loan Fund'];
//   const investmentsData = {};
//   for (const item of investmentsItems) {
//     investmentsData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
//   }
//
//   // Collects arrays holding Other Assets data (fix later)
// eslint-disable-next-line max-len
//   const otherAssetsItems = ['Accounts receivable', 'Due from other fund', 'Interest and dividends receivable', 'Inventory, prepaid items and other assets', 'Notes receivable - due within one year', 'Notes receivable - due afer one year', 'Security Deposits', 'Cash held by investment manager', 'Investments:', 'Investments', 'Capital Assets, net', 'Total Other Assets', 'Deferred outflows of resources related to pensions', 'Deferred outflows of resources related to OPEB', 'Total assets and deferred outflows of resources'];
//   const otherAssetsData = {};
//   for (const item of otherAssetsItems) {
//     otherAssetsData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
//   }
//
//   // Collects arrays holding Cash and Cash Equivalents data
//   const cashAndCashEquivalentsItems = ['Petty cash', 'Cash', 'Cash in banks/Draw on Line of Credit', 'Total Cash and Cash Equivalents'];
//   const cashAndCashEquivalentsData = {};
//   for (const item of cashAndCashEquivalentsItems) {
//     cashAndCashEquivalentsData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
//   }
//
//   // Collects arrays holding year data
//   const columnDataItems = ['Fiscal Year'];
//   const columnDataData = {};
//   for (const item of columnDataItems) {
//     columnDataData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
//   }
//
//   console.log(unnecessaryDataRemoved);
// };
