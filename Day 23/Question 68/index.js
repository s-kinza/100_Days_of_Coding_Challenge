"use strict";
//-----------------------------------------QUESTION 68----------------------------------
// This function multiplies two decimal numbers
function multipliesdecimales(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multipliesdecimales(0.2, 0.2));
