const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('returns an array with the second argument removed', () => {
    assert.deepEqual(without([1, 2, 3], [1]),[2,3]);
  });
  it('removes items properly based on type', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]);
  });
  it('returns same array no string to remove', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ""), ["hello", "world", "lighthouse"]);
  });
  it('returns array with string removed when string is present', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world",]);
  });
});