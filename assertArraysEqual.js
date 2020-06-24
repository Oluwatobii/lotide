const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      answer = true;
    } else {
      return false;
    }
  }
  return answer;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅Assertion Passed: ${arr1}  === ${arr2}`);
  } else {
    console.log(`🔴Assertion Failed: ${arr1}  !== ${arr2}`);
  }
};

// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2"]), true);
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false);
// assertArraysEqual(eqArrays(["1", "y", "3"], ["1", "y", "3"]), false);
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false);

assertArraysEqual(["1", "2", "3"], ["1", "2"]);
assertArraysEqual(["1", "2", 3], ["1", "2", "3"]);
assertArraysEqual(["1", "y", "3"], ["1", "y", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2"]);


