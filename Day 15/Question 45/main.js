"use strict";
//----------------------------------QUESTION 45----------------------
// Define a function to create a car object with optional option...
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => options = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
