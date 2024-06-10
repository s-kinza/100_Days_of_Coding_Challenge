"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Replace with your birth month and day
const nextBirthday = getNextBirthday(6, 16); // Example: June 16th
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// Shows the date of the next birthday.
