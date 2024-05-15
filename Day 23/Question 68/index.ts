//-----------------------------------------QUESTION 68----------------------------------

// This function multiplies two decimal numbers
function multipliesdecimales(num1: number, num2: number): number{
    return Math.round((num1 * num2)* 100)/100
}
console.log(multipliesdecimales(0.2, 0.2));