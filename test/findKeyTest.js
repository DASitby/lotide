const assert = require('chai').assert;
const findKey = require('../findKey');

describe(`#findKey`, () => {
  it('returns a value when given a key present in the object', () => {
    assert.strictEqual((findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2)),'noma');
  });
  it('returns undefined when given a key not present in the object', () => {
    assert.strictEqual((findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 3 },
      "elBulli":   { stars: 1 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2)),'Ora');
  });
});


