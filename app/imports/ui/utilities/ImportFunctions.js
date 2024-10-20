/* Functions to use for translating data from xlsx into the database */

// eslint-disable-next-line no-unused-vars
const clearEmpty = (array) => {
  const clearedArr = [];
  array.forEach((item) => {
    if (item !== null && item !== undefined) {
      clearedArr.push(item);
    }
  });
  return clearedArr;
};
