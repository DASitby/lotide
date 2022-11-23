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