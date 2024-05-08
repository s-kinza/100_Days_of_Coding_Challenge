"use strict";
//=================-------Question 15------------======================
// creat a variable Array guest list 
let guestsList = ["Kinza", "Ubaid", "Basit", "Anas", "Areeba"];
// print a guest list message
guestsList.forEach(guestsList => {
    console.log(`Hello ${guestsList} would you like to dinner with me?`);
});
// make a change array list new guest add a guest list
let unableToAttend = "Ubaid";
console.log(`oppss! ${unableToAttend} Can't Make it to dinner.`);
// Replace a Guest in unable to guest
let newGuest = "Hamza Syed";
guestsList[guestsList.indexOf(unableToAttend)] = newGuest;
// New Invitation
console.log(`Hello ${newGuest} would you like to dinner with me?`);
