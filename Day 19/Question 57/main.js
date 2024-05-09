"use strict";
// ===============================QUESTION 57=============================
// A list of grades
let grades = [88, 94, 72, 99, 53, 77];
// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade) / grades.length;
// Shows the average grade
console.log(averageGrade);
