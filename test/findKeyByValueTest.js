const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe(`#findKeyByValue\n  using "const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire" 
  }" to test`, () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it('returns "drama" when given "The Wire"', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it('returns undefined when given a key not present', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it('returns sciFi when given "The Expanse"', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  });
  it('returns comedy when given "Brooklyn Nine-Nine"', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
});