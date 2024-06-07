"use strict";
//================
//Question 95
//================
function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
let numbers = [5, 10, 11, 20, 50];
console.log(filterGreaterThanTen(numbers));
