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
    if (typeof objA[key] === 'string' || typeof objA[key] === 'number') {
      if (objA[key] === objB[key]) {
        output = true;
      } else {
        output = false;
        break;
      }
    } else if (typeof objA[key] !== typeof objB[key]) {
      output = false;
      break;
    } else if (typeof objA[key] === 'object') {
      if (typeof objB[key] === 'object') {
        return (eqObjects(objA[key],objB[key]));
      }
    }
    if (Object.keys(objA).length !== Object.keys(objB).length) {
      output = false;
      break;
    }
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

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: {q:1, p: 2} }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: {a:{q:1, p: 2}} }, b: 2 }, { a: { y: 0, z: {a:{q:1, p: 2}} }, b: 2 }), true);