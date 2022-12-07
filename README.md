# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dasitby/lotide`

**Require it:**

`const _ = require('@dasitby/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head(arr): returns the first element of an array.
* tail(arr): returns the final element of an array.
* middle(arr): returns the centre element(s) of an array (1 element if length is odd, 2 elements if length is even).
* map(arr, cb): applies a callback function to each element of an array, and returns a new array with the results.
* flatten(arr): removes any nesting within an array of arrays and returns a new array with the items in the order they appear in the original array.
* takeUntil(arr, cb): pushes all elements in an array to a new array until an element returns false on a callback.
* without(arr, itemsToRemove): given an array and another array, removes any items present in the second array from the first, and returns the resulting array.
* findKey(obj, cb): returns a key if a callback involving testing its value returns true.
* findKeyByValue(obj, value): returns the key corresponding to the given value in the given object.
* eqArrays(arr1, arr2): compares two arrays and returns true if they are identical.
* eqObjects(obj1, obj2): compares two objects and returns true if they are identical.
* countOnly(arr, itemsToCount): given two arrays it returns the number of times the items in the second array appear in the first
* countLetters(string): returns an object containing the number of each letter in the input string, excluding spaces.
* letterPositions(string): returns an object containing arrays of the index of each occurrence of each letter in the input string, excluding spaces.