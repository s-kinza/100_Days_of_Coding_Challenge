//=============================
 // QUESTION 93
 //============================

 function replaceBananaWithMango(fruits: string[]): void{

    let i = fruits.indexOf('banana');

    if (i !== -1) fruits[i] = 'mango';
 }
 const fruits: string[] = ["Apple", "banana", "Cherry"]

 replaceBananaWithMango(fruits);

 console.log(fruits);