// creating a Array of five favourites country think you'd like to visit
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favouritePlaces = ["Bangladesh", "Europ", "Disneyland", "Country of iceland", "Arab"];
// print a original order places
console.log("\nOriginal order:", favouritePlaces);
// print a Alphabatical order
console.log("\nAlphabatical order:", __spreadArray([], favouritePlaces, true).sort());
// print a Original order places
console.log("\nOriginal order", favouritePlaces);
// print a reverse alphabatical order
console.log("\nReverse Aphabatical order", __spreadArray([], favouritePlaces, true).sort().reverse());
//print in again Original order
console.log("\nOriginal order", favouritePlaces);
// print a places reverse
favouritePlaces.reverse();
console.log("\nReversed order:", favouritePlaces);
// again reverse in Original order
favouritePlaces.reverse();
console.log("\nOriginal order:", favouritePlaces);
// again print Aphabatical order 
favouritePlaces.sort();
console.log("\nAphabatical order:", favouritePlaces);
//again and again reverse ();
favouritePlaces.reverse();
console.log("\nReverse alphabatcal order:", favouritePlaces);
