"use strict";
//--------------------------------------QUESTION 56=------------------------
// A mixed bag of items
var mixedArray = [1, "apple", 2, "banana", true, "carrot"];
// pick out only the word
var stringsArray = mixedArray.filter(item => typeof item === "string");
// Shows the list of just words
// Output: ["apple", "banana", "carrot"]
console.log(stringsArray);
