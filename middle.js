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

const middle = function (array) {
  let middleArray = [];
  if (array.length % 2 === 0) {
    middleArray.push(array.slice(((array.length - 2)/2), ((array.length + 2)/2)));
  } else {
    middleArray.push(array.slice((array.length/2), ((array.length + 1)/2)));
  }
  return middleArray;
}


