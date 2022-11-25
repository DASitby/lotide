const checkGreaterThan5 = x => x > 5 
const lengthTenOrUnder = x => x.length <= 10


const takeUntil = function(arr, cb) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i]);
    if (cb(arr[i])) {
      return results
    }
  };
  return results
}

console.log(takeUntil([1,2,3,4,5,6,7,8,9,10],checkGreaterThan5))
console.log(takeUntil(['mary had a little lamb','bojack horseman','yeah','another long string to see if it works'],lengthTenOrUnder))

