//------------------------------------QUESTION 59------------------------------------------

function makeAdder(valueToAdd:number): (number: number) => number {

    return function(number: number): number {

        return number + valueToAdd;
    };
}
// Making a magical bocx that adds 5

let addFive = makeAdder(5);

console.log(addFive(10));