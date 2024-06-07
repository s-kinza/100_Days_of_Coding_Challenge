//================
//Question 95
//================
function filterGreaterThanTen(numbers: number[]) {
 return numbers.filter(number => number > 10);
}
let numbers: number []= [5,10,11, 20, 50]
console.log(filterGreaterThanTen(numbers));