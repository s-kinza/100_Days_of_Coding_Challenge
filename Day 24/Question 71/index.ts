//====================================================
//===Q==U=E==S==T==I==O==N======71=====

// Using `let` for a variable that can be reassigned
let age = 19;
age = 20; // Works fine because `let` allows reassignment
console.log(age); // Shows 26

// Trying to reassign a `const`-declared variable
const my_name = "kinza";
try {
    name = "areeba"; // This line will cause an error
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.