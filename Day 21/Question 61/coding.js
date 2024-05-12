"use strict";
//-------------------------------------DAY 21-----------------------------------------
//----------------------------QUESTION 61
// Making a list (enum) for different types of vehicles
var trafficLights;
(function (trafficLights) {
    trafficLights[trafficLights["red"] = 0] = "red";
    trafficLights[trafficLights["orange"] = 1] = "orange";
    trafficLights[trafficLights["green"] = 2] = "green";
})(trafficLights || (trafficLights = {}));
;
// Showing one type of vehicle from the list
console.log(trafficLights.red); // It shows 0 because enums start counting from 0
console.log(trafficLights.orange);
console.log(trafficLights.green);
// Here, we're just checking what number the Car category got in our list.
