//--------------------------------DAY 20-----------------------------------

//-----------------------------QUESTION 58---------------------------------

// This program calculates the average of all scores given

function totalAverage(...scores:number[]): number {

    let total = scores.reduce((one,two)=> one + two,0)
    
    return total/scores.length
}
console.log(totalAverage(34,35,66));