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

const flatten = function (arr) {
  //Create a bland array
  let flattenedArray = [];
  //Create a helper function
  const helper = function (arr) {
    //write a for loop
    for (let i = 0; i < arr.length; i++){
      let element = arr[i];
      //if the element is an array, recurse with the helper function
      if (Array.isArray(element)){
        helper(element);
      } else {
        flattenedArray.push(element);
      }
      //else, push element into bland arrray
    }
    
  }
  //call helper function
  helper (arr);

  //return the array
  return flattenedArray
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
