"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//-------------------------------QUESTION 60---------------------------------
// This profile sets itself up and can share info about the user
let userProfile = (function () {
    // The user's details are kept inside
    let name = "kanzul Eeman";
    let age = 19;
    let education = "under gradution";
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log(`\nName: ${name}, Age: ${age}, education: ${education}\n`);
        }
    };
})();
// Asking the profile to tell us about the user
// It says the user's name and age
userProfile.displayInfo();
// We made a self-setup profile that can talk about the user.
