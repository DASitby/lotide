const tail = function(input) {
  let output = input;
  output = input.slice(input.length - 1)[0];
  return output;
};

module.exports = tail;