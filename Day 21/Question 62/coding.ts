//---------------------------------------Question 62----------------------------------
//creating a blue print (interface) for student information 
interface Student {
    name: string;
    age: number;
    courses: string[];
}
 // filling in the blue pint with an example student 
 let student: Student  = {
    name: "kanzul Eeman",
    age: 22,
    courses: ["Math", "Science", "History"],
 };
 // showing the student's information 
 console.log(student);
 