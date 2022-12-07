const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (let key in itemsToCount) {
    if (itemsToCount[key] === true) {
      output[key] = 0;
    }
  }
  for (let i = 0; i < allItems.length; i++) {
    for (let x in output) {
      if (x === allItems[i]) {
        output[x] += 1;
      }
    }
  }
  for (let x in output) {
    if (output[x] === 0) {
      delete output[x];
    }
  }
  return output;
};

module.exports = countOnly;