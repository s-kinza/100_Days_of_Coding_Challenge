"use strict";
//----------------------QUESTION 33--------------------------
// number variable create
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// using loop and if else chain
for (let oneNumber of numbers) {
    let ordinalSuffix;
    if (oneNumber === "1") {
        ordinalSuffix = "st";
    }
    else if (oneNumber === "2") {
        ordinalSuffix = "nd";
    }
    else if (oneNumber === "3") {
        ordinalSuffix = "rd";
    }
    else {
        ordinalSuffix = "th";
    }
    console.log(`${oneNumber} ${ordinalSuffix}`);
}
