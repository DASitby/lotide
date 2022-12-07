const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    return `✅Assertion Passed: ${arr1} === ${arr2}`;
  } else {
    return `🛑Assertion Failed: ${arr1} !== ${arr2}`;
  }
};

module.exports = assertArraysEqual;