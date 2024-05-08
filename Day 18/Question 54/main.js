"use strict";
// -------------------------------QUESTION 54------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");
// Showing the user's choice
console.log(userPreference);
