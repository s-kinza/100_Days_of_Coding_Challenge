"use strict";
//=======================
//     QUESTION 98       
//=======================
// Calculates how many days are left until New Year's Day
function daysUntilNewYear() {
    let today = new Date();
    // January 1st of next year
    let newYear = new Date(today.getFullYear() + 1, 0, 1);
    // Difference in milliseconds
    let diff = newYear.getTime() - today.getTime();
    // Converts to days
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
