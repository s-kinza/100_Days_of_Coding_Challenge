//--------------------------------------Day 23---------------------------------------
//=================================QUESTION 67========================================
// This function adds a number and a string that represents a number

function addNumberAndString(number1: number, addString: string): number{

    return number1 + Number(addString);
}

console.log(addNumberAndString(0, "1"));
console.log(addNumberAndString(1, "1"));
console.log(addNumberAndString(2, "1"));
console.log(addNumberAndString(3, "1"));
console.log(addNumberAndString(4, "1"));
// Trying it with 99 and "1"       // print (100);
console.log(addNumberAndString(99, "1"));