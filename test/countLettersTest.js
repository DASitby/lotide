const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it('returns an object containing letter counts for multiple words', () => {
    assert.deepEqual(countLetters("lighthouse in the house"),{
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    });
  });
  it('returns the correct object when compensating for capital letters', () => {
    assert.deepEqual(countLetters("Hello"),{H:1,e:1,l:2,o:1});
  });
  it("returns an empty object for when given just a space", () => {
    assert.deepEqual(countLetters([' ']), {});
  });
});