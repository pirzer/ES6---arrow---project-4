/* es6 1 */
/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
/* function addTwoNumbers(a, b) {
    // code block
    return a + b;
 }

let sum = addTwoNumbers(3, 5);
console.log(sum);  */
// output: 8

// Arrow Function With Parameters
/* const addTwoNumbers = (a, b) => {
    // code block
    return a + b;
 }
let sum1 = addTwoNumbers(5, 5);
console.log(sum1); */ 
// output: 10

// Single Line Arrow Function With Parameters
/* const addTwoNumbers = (a, b) => (a + b); /also valid
/* const addTwoNumbers = (a, b) => a + b;
 
let sum2 = addTwoNumbers(4, 2);
console.log(sum2);   */
// output: 10

// Implicit Returns
/* const saySomething = message => console.log(message);
saySomething('Hello There !!!');
// output: Hello There

const sayHello = () => console.log('Hello');
sayHello(); */
// output: Hello 


// Returning Multiple Lines
/* const returnMultiplelines = () => (
    '<p> This is a multiline string! </p>')
    console.log(returnMultiplelines()); */
// output: This is a multiline string!

/* es6 2 */

/* Steps
You will create a function using the arrow syntax that should return the average marks of a subject. 
Your function should loop through the array that is passed in. For each student contained within, you should: 1. Check if the subject passed into your function is in said student's results object; 2. If it is, add it to a cumulative total of all results for that subject. 3. Finally, return the average result for the subject.
You will only be asked to return the average marks for the subject english, but your function must be able to return the average marks if another subject name is used, and the tests will check for this.
Declare a variable named averagePoints using the keyword const
Assign it an arrow function, which should take two parameters named: arr and subject
The function should have a return statement
Declare a variable named: averageMarks using the keyword let
Assign it the return value from calling the function averagePoints, and passing it the students array and one of the following strings: 'maths', 'english', 'cad', 'science', 'art'
log out the variable averageMarks to see its value
The function should return the correct value no matter which subject is used. */

/* let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
let totalPoints = 0;
let totalMarks = 0;
    for (let element of arr) {
        if(subject in element.results) {
            totalPoints = totalPoints + element.results[subject]  
            totalMarks = totalMarks + 1
        }
    }        
return totalPoints / totalMarks
        
console.log(element);
}

let averageMarks = averagePoints(students, 'english');

console.log(averageMarks) */

/* ES6 3 */



/* ES6 4 */

let arr1 = [1, 2, 3];
let arr2 = arr1;  // wrong copy
arr2.push(4);
console.log("Second array:", arr2);
console.log("First array:", arr1);

let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);

let obj1 = { a: 1, b: 2, c: 3};
let obj2 = { ...obj1, d: 4 };
let obj3 = { ...obj1, d: 5 };

console.log("First object:", obj1);
console.log("Second object:", obj2);
console.log("Third object:", obj3);

let arr5 = [...arr1, { ...obj1 }, ...arr3, "x", "y", "z" ];
console.log(arr5);

/* ES6 5 */

/* You will use the spread operator to copy an array which is stored in an object which itself is stored in an array. 
You will create a single line arrow function (has no return statement), which should copy an array passed in and add the value passed to it, then return the array.
Create a variable named subjects using the keyword let
Assign it a copy of the subjects array from the first object in the students array
Create a variable named update using the keyword const
Assign the variable update a single line arrow function  (should not have a return statement)
The arrow function should take two parameters named: item and val the arrow function should copy the array passed in and add the value passed to it, then return the array.
Create a variable named: updatedSubjects using the keyword let
Variable updatedSubjects should be assigned the return value from calling the update function passing in the subjects array and the string "Electronics"
Variable updatedSubjects should have the correct value
The original version of the subjects array in the students array should not have been modified
log out the variable updatedSubjects to see its value
log out students[0] to see that it has not been changed, if you have done everything correctly */


/* let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

let subjects = [...students[0].subjects];

const update = (item, val) => [...item, 'Electronics'];
let updatedSubjects = update(subjects, "Electronics"); */

/*const update = (item, val) => [...subjects, 'Electronics'];
let updatedSubjects = update(subjects, "Electronics");*/

/* console.log(updatedSubjects);
console.log(students[0]); */

/* why can it work perfectly with [...item, 'Electronics'] and [...subjects, 'Electronics'] ? */



/* ES6 6 */




