const middle = function(input) {
  let output;
  let mid = input.length / 2;
  if (input.length <= 2) {
    output = [];
  } else if (input.length % 2 !== 0) {
    output = [input[Math.floor(mid)]];
  } else if (input.length % 2 === 0) {
    output = [input[mid - 1],input[mid]];
  }
  return output;
};

module.exports = middle;