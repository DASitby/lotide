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

const flatten = function(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let x = 0; x < array[i].length; x++) {
        output.push(array[i][x]);
      }
    } else {
      output.push(array[i]);
    }
  }
  return output;
};

