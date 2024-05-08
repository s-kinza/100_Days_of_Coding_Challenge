"use strict";
//-----------------=================-Day------------06-=============-------------==========-----------==========-
//==========================Question 16========================================
// creating a guest list array
let guestsList = ["Kinza", "Sir Hamza Syed", "Sir Zia Khan ", "Sir Ameen Alam", "Areeba"];
// print a happy news for guest because arrange a bigger table
console.log("Great news! I found a bigger dinner table!");
// Adding More Guest
guestsList.unshift("miss Manal Rana");
guestsList.splice(guestsList.length / 2, 0, "Zara");
guestsList.push("sir Ashrab ");
guestsList.forEach(guestsList => {
    console.log(`Dear ${guestsList}, would you like to dinner with me?`);
});
