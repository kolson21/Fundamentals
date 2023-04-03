/*
   Variables, Data Types, and Typing
 */
let wordData = "Word List";

/* Left side is the declaration, the equal sign the assignment operator, right side is the variable */

wordData = "Word List";

console.log(wordData);
/* Make sure to pick variable names that make sense, clear and readable over concise */

let subTotal= 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

/* There are many types of data types int, boolean, string, float, etc. */
/* Composite types that are comprised of several other types. */
/* Single composite types are objects */

let obj = {
  key1: "Value 1",
  key2: 4,
  boolean: true,
  obj2: {
      obj2Key1: "Internal Object Value",
  }
};

console.log(obj.obj2);

/* To handle data types programming languages have typing systems built into them */
/* It evaluates types and compares and converts types */
/* There is static or dynamic types */

let var1 = "2";
let var2 = 5;
let result = var1 + var2;

/* In strong languages this would not work because you are trying to add two different types
    but in JavaScript, since it is weakly type language, it will convert the types to try and make the outcome
    make sense.
 */

console.log(result);

/* Operators are ways to perform mathematical in the case of numbers or concatenation operations
in the case of strings on our values.
 */

let add = 1 + 2;
let sub = 2 - 1;
let mult = 2 * 4;
let division = 4 /2;
let mod = 5 % 2;

let string = "String 1 " + "String 2";

console.log(string);

