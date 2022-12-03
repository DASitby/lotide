const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray[arr1[i]]) {
      if (Array.isArray[arr2[i]]) {
        if (arr1[i].length === arr2[i].length) {
          return eqArrays(arr1[i],arr2[i]);
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else if (typeof arr1[i] === 'string' || typeof arr1[i] === 'number') {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } else if (typeof arr1[i] !== typeof arr2[i]) {
      return false;
    } else if (arr1[i].length !== arr2[i].length) {
      return false;
    }
  }
  return true;
};

//test code
assertEqual(eqArrays([1,2,3],[1,2,3]),true);
assertEqual(eqArrays([1,2,3],[1,2,3,4]),false);
assertEqual(eqArrays([1,2,3],[1,1,3]),false);
assertEqual(eqArrays(['david','andrew','sooley'],['david','andrew','sooley']),true);
assertEqual(eqArrays([[[2, 3]], [4]], [[[2, 3]], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false);
