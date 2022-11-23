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
const eqObjects = function(objA, objB) {
  let output;
  for (let key in objA) {
    if (typeof objA[key] === 'string') {
      if (objA[key] === objB[key]) {
        output = true;
      } else {
        output = false;
        break;
      }
    } else if (typeof objA[key] === 'object') {
      if (typeof objB[key] === 'object') {
        if (objA[key].length === objB[key].length) {
          output = eqArrays(objA[key], objB[key]);
        } else {
          output = false;
          break;
        }
      }
    }
  }
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    output = false;
  }
  return output;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    return `✅Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`;
  } else {
    return `🛑Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));