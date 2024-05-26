"use strict";
//================================
//         QUESTION 90
//================================
function isValueNaN(value) {
    return isNaN(value);
}
console.log(isValueNaN("hello")); // Outputs: true, because "hello" isn't a number
console.log(isValueNaN(123)); // Outputs: false, because 123 is a number
