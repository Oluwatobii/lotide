// TEST CODE
const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 3); // new words.length should be 2 thus return false

// Test Case 3: ...
const num = tail([3, 4, 5, 8]);
assertEqual(num.length, 3); // new words.length should be 3 thus return true
