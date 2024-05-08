"use strict";
//----------------------DAY 16--------------------------
//---------------------QUESTION 46-----------------------
let my_laptop = {
    make: "hp laptop",
    model: "7 i core",
    year: "2024",
    describe: function () {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
my_laptop.describe();
