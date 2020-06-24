const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      answer = true;
    } else {
      answer = false;
    }
  }
  return answer;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);
assertEqual(eqArrays([3, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "b", "s"], ["1", "b", "B"]), true);
assertEqual(eqArrays(["1", 2, 3], [1, "2", 4]), true);