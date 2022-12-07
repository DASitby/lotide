const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('returns true when given identical objects with nesting', () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it('returns false when given otherwise identical objects where one has a unique property', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it('returns false when properties don\'t match', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
  it('returns false when given wildly different objects which match their common properties', () => {
    assert.strictEqual(eqObjects({ a: 1, c:{ y: 0, z: {q:1, p: 2} }, b: 2 }, { a: 1, b: 2 }), false);
  });
  it('returns true when given identical objects with complex nesting', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: {a:{q:1, p: 2}} }, b: 2 }, { a: { y: 0, z: {a:{q:1, p: 2}} }, b: 2 }), true);
  });
});
