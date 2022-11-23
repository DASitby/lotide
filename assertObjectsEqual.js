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

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2) === true) {
    return `✅Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`;
  } else {
    return `🛑Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`;
  }
};


console.log(assertObjectsEqual({a:1, b:2, bb:3, c:4,},{a:1, b:2, bb:3, c:4,}))