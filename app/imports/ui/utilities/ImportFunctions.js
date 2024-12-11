/* General functions to use for translating data from xlsx into the database */

// Function to remove empty slots caused by spaces in cells and remove data caused by xlsx formatting
export const cleanData = (data) => {
  const innerEmptyRemoved = data.map(innerArray => innerArray.filter(item => item != null && item !== ''));
  const emptyRemoved = innerEmptyRemoved.filter(innerArray => innerArray.length > 0);

  const unnecessaryData = ['Audited Financials',
    'Audited FS',
    'Audited FS, Statement of Net Position',
    'Audited FS, Investment Footnote',
    'Audited FS, Capital Assets Footnote',
    'Audited FS, Long-Term Liabilities Footnote',
    'Operating',
  ];

  return emptyRemoved.map(innerArray => innerArray.filter(item => !unnecessaryData.includes(item)));
};

// Function to transform JSON data into a format used by react-spreadsheet
export const transformData = (tData) => tData.map((row) => (
  row.map((cell) => ({ value: cell }))
));

// Function to pad arrays to a specific length specified by targetLength (for empty data arrays)
export const padAllArraysToLength = (obj, targetLength) => {
  // Create a new object to avoid mutating the original
  const result = { ...obj };

  // Iterate over each property in the object
  Object.keys(result).forEach((key) => {
    const value = result[key];

    if (Array.isArray(value)) {
      result[key] = value.slice(0, targetLength);

      // Pad the array with 0s if it's shorter
      if (result[key].length < targetLength) {
        result[key] = [...result[key], ...Array(targetLength - result[key].length).fill(0)];
      }

    }
  });

  return result;
};

// Function to separate the data into their own object for single year
export const createArraysOfObjects = (inputObj) => {
  const maxLength = Math.max(...Object.values(inputObj).map(arr => (Array.isArray(arr) ? arr.length : 0))) - 1;
  const resultArray = [];

  for (let i = 1; i <= maxLength; i++) { // Start at 1 to skip indexing the first element (name)
    const newObject = {};
    Object.keys(inputObj).forEach((key) => {
      const value = inputObj[key];
      if (Array.isArray(value)) {
        if (value[i] !== undefined) {
          newObject[key] = value[i];
        } else {
          newObject[key] = null;
        }
      } else {
        newObject[key] = value;
      }
    });
    resultArray.push(newObject);
  }
  return resultArray;
};

// Function to shift elements to the right (for certain arrays)
export const shiftArrayRight = (arr) => {
  arr.unshift(0);
  return arr;
};
