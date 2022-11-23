const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(objA, objB) {
  let output;
  for (let key in objA) {
    if (objA[key] === objB[key]) {
      output = true;
    } else {
      output = false;
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