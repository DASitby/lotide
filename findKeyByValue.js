const findKeyByValue = function(object, search) {
  let output;
  for (let key in object) {
    if (object[key] === search) {
      output = key;
    }
  }
  return output;
};

module.exports = findKeyByValue;