const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns "Labs" when given "["Yo Yo", "Lighthouse", "Labs"]"', () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),"Labs");
  });
  it('returns 4 when given [1,2,3,4]', () => {
    assert.strictEqual(tail([1,2,3,4]),4);
  });
});