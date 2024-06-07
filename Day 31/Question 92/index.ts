//==================================
//      QUESTION   92
//==================================

function removeLastElement<T>(arr: T[]): T | undefined {
        return arr.pop();

}
var fruits: string[]= ['Apple', 'Mango', 'Cherry']

console.log(removeLastElement(fruits));

console.log(fruits);