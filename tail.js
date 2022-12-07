const tail = function(input) {
  let output = input[input.length - 1];
  return output;
};

module.exports = tail;

console.log(tail([1,2,3,4]));