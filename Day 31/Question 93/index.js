"use strict";
//=============================
// QUESTION 93
//============================
function replaceBananaWithMango(fruits) {
    let i = fruits.indexOf('banana');
    if (i !== -1)
        fruits[i] = 'mango';
}
const fruits = ["Apple", "banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits);
