const findKey = function(obj, cb) {
  let output;
  for (let key in obj) {
    if (cb(obj[key])) {
      output = key;
      return output;
    }
  }
};

module.exports = findKey;