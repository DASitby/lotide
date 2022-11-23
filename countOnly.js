const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let output = {}
  for (key in itemsToCount) {
    if (itemsToCount[key] == true) {
      output[key] = 0
      }
    }
    return output
  for (let i = 0; i < allItems.length; i++) {
    if (x = allItems[i]) {

    }  
  }
};

console.log(countOnly(['a','a','b','c','d','e','a'],{a:true, d:true, b:false, f:true}));