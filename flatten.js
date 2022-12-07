const flatten = function(array) {
  let output = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      let newArr = flatten(item);
      newArr.forEach(element => {
        output.push(element);
      });
    } else {
      output.push(item);
    }
  });
  return output;
};

module.exports = flatten;