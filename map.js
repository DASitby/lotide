const map = function(arr, cb) {
  const results = [];
  for (let i of arr) {
    results.push(cb(i));
  }
  return results;
};

module.exports = map;