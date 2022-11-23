const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
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

const eqObjects = function(objA, objB) {
  let output;
  for (let key in objA) {
    if (typeof objA[key] === 'string') {
      if (objA[key] === objB[key]) {
        output = true;
      } else {
        output = false;
        break
      }
    } else if (typeof objA[key] === 'object') {
      if (typeof objB[key] === 'object') {
        if(objA[key].length === objB[key].length) {
          output = eqArrays(objA[key], objB[key])
        } else {
          output = false
          break
        }
      }
    }
  }
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    output = false;
  }
  return output;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);