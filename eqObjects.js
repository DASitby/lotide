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

module.exports = eqObjects;