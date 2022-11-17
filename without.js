const eqArrays = function(arr1, arr2) {
  let results = [];
  let output = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      results[i] = true;
    } else {
      results[i] = false;
    }
  }
  for (let i = 0; i < results.length; i++) {
    if (results[i] === true) {
      output = true;
    } else if (results[i] === false) {
      output = false;
      break;
    }
  }
  return output;
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    return `✅Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    return `🛑Assertion Failed: ${arr1} !== ${arr2}`;
  }
};

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

//test code
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
