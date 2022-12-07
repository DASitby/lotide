const tail = function(input) {
  let output = input;
  output.slice(1);
  return output;
};

module.exports = tail;