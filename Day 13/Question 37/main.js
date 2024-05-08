"use strict";
// --------------------------------DAY 13-----------------------------------
// --------------------------QUESTION 37------------------------------------
function make_shirt(size = "Large", message = "I love typescript") {
    console.log(`Making a ${size} T_shirt with the message ${message} printed on it.`);
}
// Default large and message
make_shirt();
// Default message , medium size 
make_shirt("medium");
// Custom message, small size
make_shirt("small", "Dive into coding");
