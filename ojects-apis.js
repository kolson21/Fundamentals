/*
 * Objects, Interfaces, and APIs
 */

/* Object-oriented programming is a way to represent data and functionality in an encapsulated way.
*  Object-oriented programming was originally devised in order to make it easier to represent real
*   world objects in code. In traditional object-oriented programming there is two key features of an
*   object. Objects contain state or the current data and information that describes the object and
*   functionality. Which is actions or changes that the object can make to itself or the outside world. */

let dog = {
    name : "Maple",
    color : "brown",
    breed : "German Shepard",
    size : "Large",
    bark: function(typeOfBark){
        console.log("Bark!");
    },
};

dog.bark();

/* Interface vs implementation. The interface is the function's signature. The signature is the name,
and the parameters. The implementation is what the function is actually doing under the hood.
 */

/* API stands for application programming interface. These are interfaces written into software to be
    used by programmers to interact with the code. Rest APIs is the same idea, except you can interact
    with other people's codes.
 */

/* Passing by value and passing by reference. When you send data through a function's parameters there
    are two ways in which it can be passed. Passing data by value means inside the function only the
    value of the data is important. Passing by reference means that the parameter being passed in only
    points to the original data.
 */

function x(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name : "Tom",
    num : 10,
};
x(y);
console.log(y);