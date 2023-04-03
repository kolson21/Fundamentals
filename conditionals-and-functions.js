/*
    Conditionals, Functions, Scope and Loops
 */

/* Conditionals are a piece of code that evaluate to true or false, like a boolean
      These are useful to make sure a specific piece of code only executes under a condition */

// Equals
let equals = 1 === 1;
console.log(equals);
// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >= 5;

// Less than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;

/* An if block is a control statement. It is a block of code that allows use to control
    the flow of our program. Create an if block to get the most out of this code */

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

/* Functions are ways for us to encapsulate our code in a way that is reusable. Visually it is
   similar to an if block except that it is named. Functions have two main features, parameters
   and the code that they execute.*/
/* Parameters allow us to pass variables into our code. */

compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum (number) {
    return number * number;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);

/* Functions generally shouldn't be longer than 20 lines of code and should only do one thing. */



/* Scope is the idea that certain values or variables are only accessible in certain levels of
    your code. */

let x = 10;

function addNumbers (n, m, x) {
    console.log(x);
    let b;
    if (1 === 1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}
/* The variable x is on the global scope, this is the highest level of scope we can have. N and M
    are on the function scope of add numbers. This means we cannot have access to them outside of
    this function. JavaScript is lexically scoped, which means the scopes cascade down. So we do
    have access to the global scope within the function. However, if we define the variable x within
    our function it will override the global scope x.
 */

addNumbers(2,3, 8);
console.log(x);

/* JavaScript has 3 levels of scope. Global scope, function scope, and block scope. Block scope means
    that things such as if blocks have their own scope. */




/* Arrays are a type of data structure.They are ways to organize pieces of our data. Arrays are a
*   special kind of objects. JavaScripts sets the keys for us, they are called indexes. */

// Arrays start at 0

//              0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

/* Loops are structure, much like an if block, that repeat a certain section of code until a certain
    condition is met. There are different kinds of loops. A for loop has three elements. A counter, a
    comparison, and an incrementer.
 */
let arrLen = ourArray.length;
for (let i = 0; i < arrLen; i++) {
    console.log("i is equal to: " + i);
    console.log(ourArray[i]);
}

/* If you put a loop within a loop, the inner loop will do it loops for everytime the outer loop
    executes. This can be a big problem.
 */

/* A while loop simple runs until a conditional is false. Be careful with while loops because it is
    very easy to create an infinite loop. Causing your program to crash. */

let x = 0;
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}