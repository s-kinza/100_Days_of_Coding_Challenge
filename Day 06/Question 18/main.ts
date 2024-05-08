// creating a Array of five favourites country think you'd like to visit

let favouritePlaces: string [] = ["Bangladesh", "Europ", "Disneyland", "Country of iceland", "Arab"];

// print a original order places

console.log("\nOriginal order:", favouritePlaces);

// print a Alphabatical order
console.log("\nAlphabatical order:",[...favouritePlaces].sort());

// print a Original order places
console.log("\nOriginal order", favouritePlaces);

// print a reverse alphabatical order
console.log("\nReverse Aphabatical order", [...favouritePlaces].sort().reverse());

//print in again Original order
console.log("\nOriginal order", favouritePlaces);

// print a places reverse
favouritePlaces.reverse();
console.log("\nReversed order:", favouritePlaces);

// again reverse in Original order
favouritePlaces.reverse();
console.log("\nOriginal order:",favouritePlaces);

// again print Aphabatical order 
favouritePlaces.sort();
console.log("\nAphabatical order:", favouritePlaces);

//again and again reverse ();
favouritePlaces.reverse();
console.log("\nReverse alphabatcal order:", favouritePlaces);