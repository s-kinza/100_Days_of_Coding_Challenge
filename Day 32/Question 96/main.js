"use strict";
//===================
//    QUESTION 96
//===================
function calculateSum(numbers) {
    return numbers.reduce((accumalor, current) => accumalor + current, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
