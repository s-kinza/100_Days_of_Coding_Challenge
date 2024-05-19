"use strict";
//=================QUESTION 81
// This function shows every detail about an object
function logObjectProperties(obj) {
    for (let property in obj) {
        // Loops through each property in the object
        console.log(`${property}: ${obj[property]} `);
    }
}
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2024, color: "Pink" });
