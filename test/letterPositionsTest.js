const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it('returns an object containing letter positions for a long sentence', () => {
    assert.deepEqual(letterPositions("lighthouse in the house"),{
      l: [ 0 ],
      i: [ 1, 11 ],
      g: [ 2 ],
      h: [ 3, 5, 15, 18 ],
      t: [ 4, 14 ],
      o: [ 6, 19 ],
      u: [ 7, 20 ],
      s: [ 8, 21 ],
      e: [ 9, 16, 22 ],
      n: [ 12 ]
    });
  });
  it('returns the correct object when compensating for capital letters', () => {
    assert.deepEqual(letterPositions("Hello"),{H:[0],e:[1],l:[2,3],o:[4]});
  });
  it("returns an empty object for when given just a space", () => {
    assert.deepEqual(letterPositions([' ']), {});
  });
});