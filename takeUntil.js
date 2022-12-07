const takeUntil = function(arr, cb) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i]);
    if (cb(arr[i])) {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;