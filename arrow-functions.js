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
const returnMultiplelines = () => (
    '<p> This is a multiline string! </p>')
    console.log(returnMultiplelines());