"use strict";
//------------------------------------QUESTION 59------------------------------------------
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magical bocx that adds 5
let addFive = makeAdder(5);
console.log(addFive(10));
