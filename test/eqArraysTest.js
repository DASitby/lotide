const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1,2,3],[1,2,3]),true);
assertEqual(eqArrays([1,2,3],[1,2,3,4]),false);
assertEqual(eqArrays([1,2,3],[1,1,3]),false);
assertEqual(eqArrays(['david','andrew','sooley'],['david','andrew','sooley']),true);
assertEqual(eqArrays([[[2, 3]], [4]], [[[2, 3]], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false);
