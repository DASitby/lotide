const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('returns true when given identical objects with nesting', () => {
    assert.deepEqual(takeUntil([1,2,3,4,5,6,7,8,9,10],x => x > 5),[1,2,3,4,5,6]);
  });
  it('returns false when given otherwise identical objects where one has a unique property', () => {
    assert.deepEqual(takeUntil(['mary had a little lamb','bojack horseman','yeah','another long string to see if it works'],x => x.length <= 10), ['mary had a little lamb','bojack horseman','yeah']);
  });
});