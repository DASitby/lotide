const without = function(source, itemsToRemove) {
  let output = source;
  for (let i = 0; i < source.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        output.splice(i,1);
      }
    }
  }
  return output;
};

module.exports = without;