"use strict";
//$$$$$$$$$$$$$$$$$=========Question 17=========$$$$$$$$$$$$$$$$$$
// Creating a Array list and unfortunately inviting two guest
let guestsList = ["Kinza", "Hamzah syed", "Ameen Alam", "Zia khan", "Areeba"];
console.log("Unfortunately, I can only invite two people for dinner.");
console.log("updated list of guest", guestsList);
while (guestsList.length > 2) {
    let removedGuestList = guestsList.pop();
    if (removedGuestList !== undefined) {
        console.log(`Sorry!, ${removedGuestList}, I can't invite you to dinner.`);
    }
}
guestsList.forEach(guest => {
    console.log(`Dear ${guestsList} you're still invited to dinner.`);
});
guestsList.splice(0, guestsList.length);
console.log(guestsList);
