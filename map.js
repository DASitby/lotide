const map = function(arr, cb) {
  const results = [];
  for (let i of arr) {
    results.push(cb(i));
  }
  return results;
};
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

let testArray1 = [1,2,3,4]
let testArray2 = ['fi', 'fie', 'foe', 'fum']
let testArray3 = [true, true, false, false, true, false]

console.log(assertArraysEqual(testArray1.map(x => x * 2),[2,4,6,8]))
console.log(assertArraysEqual(testArray2.map(x => x.length),[2,3,3,3]))
console.log(assertArraysEqual(testArray3.map(x => !x),[false,false,true,true,false,true]))