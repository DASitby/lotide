const letterPositions = function(sentence) {
  let output = {};
  for (let i = 0; i < sentence.length; i++) {
    if (output[sentence[i]] === undefined) {
      output[sentence[i]] = [];
    }
  }
  for (let i = 0; i < sentence.length; i++) {
    for (let key in output) {
      if (key === sentence[i]) {
        output[sentence[i]].push(i);
      }
    }
  }
  for (let x in output) {
    if (x === ' ') {
      delete output[x];
    }
  }
  return output;
};

module.exports = letterPositions;
console.log(letterPositions("lighthouse in the house"));