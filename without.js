const assertArraysEqual = function (arr1, arr2){
  if (eqArrays(arr1, arr2)) {
    console.log(`✅Assertion Passed: ${arr1}  === ${arr2}`);
  } else {
    console.log(`🔴Assertion Failed: ${arr1}  !== ${arr2}`);
  }
}

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] === arr2[i]){
      answer = true;
    } else {
      return false 
    }
  }
  return answer
}

const without = function (source, itemsToRemove){
  let itemRemaining = [];
  for (let i = 0; i < source.length; i++){
    if (!itemsToRemove.includes(source[i])){
      itemRemaining.push(source[i]);
    }
  }
  return itemRemaining
}

// console.log(without([1, 2, 3], [1]))
// console.log(without(["1", "2", "3"], [1, 2, "3"]))

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);