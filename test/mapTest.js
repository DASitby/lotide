const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it('works with arrays of numbers', () => {
    assert.deepEqual(map([1,2,3,4],(x => x * 2)),[2,4,6,8]);
  });
  it('works with arrays of strings', () => {
    assert.deepEqual(map(['fi', 'fie', 'foe', 'fum'], (x => x.length)),[2,3,3,3]);
  });
  it('works with arrays of boolean values', () => {
    assert.deepEqual(map([true, true, false, false, true, false], (x => !x)),[false,false,true,true,false,true]);
  });
  it('works with arrays of objects', () => {
    assert.deepEqual(map([{yes: true}, {yes: true}, {yes: false}, {yes: false}, {yes: true}, {yes: false}], (x => x.yes)),[true,true,false,false,true,false]);
  });
});