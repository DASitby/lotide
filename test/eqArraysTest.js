const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('returns true when given identical arrays with', () => {
    assert.strictEqual(eqArrays([1,2,3],[1,2,3]),true);
  });
  it('returns false when given arrays of different lengths that match during their shared length', () => {
    assert.strictEqual(eqArrays([1,2,3],[1,2,3,4]),false);
  });
  it('returns false when an item doesn\'t match', () => {
    assert.strictEqual(eqArrays([1,2,3],[1,1,3]),false);
  });
  it('returns true when given identical arrays of identical strings', () => {
    assert.strictEqual(eqArrays(['david','andrew','sooley'],['david','andrew','sooley']),true);
  });
  it('returns false when given identical arrays of non-identical strings of the same length', () => {
    assert.strictEqual(eqArrays(['david','andrew','sooley'],['dwvid','andrew','sooley']),false);
  });
  it('returns true when given identical arrays with complex nesting', () => {
    assert.strictEqual(eqArrays([[[2, 3]], [4]], [[[2, 3]], [4]]), true);
  });
  it('returns false when given different arrays with the same nesting', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false);
  });
  it('returns true when given nearly identical arrays with a matching value nested 1 layer deeper than its match', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false);
  });
});