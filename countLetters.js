const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
//   Alphabetical version
//   let output = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0,}
//   for (let i = 0; i < sentence.length; i++) {
//     for (let key in output) {
//       if (key === sentence[i]) {
//       output[sentence[i]] += 1;
//       }
//     }
//   }
//   for (let x in output) {
//     if (output[x] === 0) {
//       delete output[x];
//     }
//   }
//   return output;
// };

//In order of Occurrence
  let output = {}
  for (let i = 0; i < sentence.length; i++) {
    if (output[sentence[i]] === undefined) {
      output[sentence[i]] = 0
    }
  }
  for (let i = 0; i < sentence.length; i++) {
    for (let key in output) {
      if (key === sentence[i]) {
        output[sentence[i]] += 1;
      }
    }
  }
  for (let x in output) {
    if (x === ' ') {
      delete output[x];
    }
  }
  return output
}


console.log(countLetters("lighthouse in the house"))