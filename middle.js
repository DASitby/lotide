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

//Test Code
console.log(assertArraysEqual(middle([1, 2, 3]),[2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]),[2,3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]));