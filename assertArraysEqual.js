const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅Assertion Passed: ${arr1}  === ${arr2}`);
  } else {
    console.log(`🔴Assertion Failed: ${arr1}  !== ${arr2}`);
  }
};

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertArraysEqual(eqArrays(["1", "y", "3"], ["1", "y", "3"]), true);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false);

// assertArraysEqual(["1", "2", "3"], ["1", "2"]);
// assertArraysEqual(["1", "2", 3], ["1", "2", "3"]);
// assertArraysEqual(["1", "y", "3"], ["1", "y", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2"]);


