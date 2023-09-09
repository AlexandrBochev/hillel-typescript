"use strict";
// ✔ try different target compiler options
// ✔ TODO: declare a Rectangle class, with width and height properties
// ✔ TODO: add a constructor which takes width and height as parameters
// ✔ TODO: add a method `getArea` which returns the area of the rectangle
// ✔ TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
// ✔ TODO: create an instance of the Rectangle class, with width 10 and height 20
// ✔ TODO: call the method `getArea` and print the result to console
// ✔ TODO: call the method `getPerimeter` and print the result to console
// ✔ TODO: compile and run the code
// ✔ TODO: change compiler target to ES5, complile and see the compiled code
// ✔ TODO: change width and height properties to private, recomplile and
// ✔ TODO: change compiler target to ES2015, complile and see the compiled code
// ✔ TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
// ✔ TODO: change compiler target to ESNext, complile and see the compiled code
// ✔ TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
// ✔ TODO: compile and run the code
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
const exercise10 = () => {
    var _Rectangle_width, _Rectangle_height;
    class Rectangle {
        constructor(width, height) {
            _Rectangle_width.set(this, void 0);
            _Rectangle_height.set(this, void 0);
            __classPrivateFieldSet(this, _Rectangle_width, width, "f");
            __classPrivateFieldSet(this, _Rectangle_height, height, "f");
        }
        getArea() {
            return __classPrivateFieldGet(this, _Rectangle_width, "f") * __classPrivateFieldGet(this, _Rectangle_height, "f");
        }
        getPerimeter() {
            return (__classPrivateFieldGet(this, _Rectangle_width, "f") + __classPrivateFieldGet(this, _Rectangle_height, "f")) * 2;
        }
    }
    _Rectangle_width = new WeakMap(), _Rectangle_height = new WeakMap();
    const newRectangle = new Rectangle(10, 20);
    console.log(`The area of the rectangle is ${newRectangle.getArea()}`);
    console.log(`The perimeter of the rectangle is ${newRectangle.getPerimeter()}`);
};
exercise10();
//Done -----------------------------------------------------------------------------------------------------
// ✔ create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
// ✔ TODO: create a generic Stack class
// ✔ TODO: add a private data property of type array of T
// ✔ TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
// ✔ TODO: add a pop method which removes and returns the item from the top of the stack
// ✔ TODO: create an instance of the Stack class with number type
// ✔ TODO: push two numbers to the stack
// ✔ TODO: pop an item from the stack and print it to console, calling toFixed method on it
// ✔ TODO: create an instance of the Stack class with string type
// ✔ TODO: push two strings to the stack
// ✔ TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
// ✔ TODO: compile and run the code
const exercise11 = () => {
    class Stack {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.pop();
        }
    }
    const stackOfNums = new Stack();
    stackOfNums.push(3.564);
    stackOfNums.push(5.8765);
    const poppedNum = stackOfNums.pop();
    poppedNum !== undefined ? console.log(`The popped number is ${poppedNum.toFixed()}`) : console.log("Stack is empty");
    const stackOfStrs = new Stack();
    stackOfStrs.push("Hello there");
    stackOfStrs.push("How are you?");
    const poppedStr = stackOfStrs.pop();
    poppedStr !== undefined ? console.log(`The popped string is ${poppedStr.toUpperCase()}`) : console.log("Stack is empty");
};
exercise11();
//Done -----------------------------------------------------------------------------------------------------
// ✔ add type safety to the code which uses any
// ✔ TODO: declare a type for user object, which has a name property of type string
// ✔ TODO: fix the fetchUsers function to return an array of users, not any type
// function fetchUsers() {
// ✔ TODO: add type safety to the data variable
// const data: unknown = JSON.parse(
//   '{"users": [{"name": "John"}, {"name": "Jane"}]}'
// );
// ✔ TODO: add check for the data type to contain list of users
// return data;
// }
// ✔ TODO: fix typings of the users variable (currently it is of type any)
// const users = fetchUsers();
// ✔ TODO: add type safety to the code to print the names of the users to console
// users.forEach((user) => console.log(user.name));
// ✔ TODO: compile and run the code
const exercise12 = () => {
    const fetchUsers = () => {
        const data = JSON.parse('{"users": [{"name": "John"}, {"name": "Jane"}]}');
        if (!Array.isArray(data.users)) {
            throw new Error('Invalid data format: "users" should be an array.');
        }
        return data.users;
    };
    const users = fetchUsers();
    users.forEach((user) => console.log(user.name));
};
exercise12();
//Done -----------------------------------------------------------------------------------------------------
// ✔ add type assertion to the code
// ✔ NOTE: do not change this function
// ✔ TODO: uncomment the following code and add type assertion to fix the error
// ✔ TODO: compile and run the code
const exercise13 = () => {
    const fetchUserAge = () => {
        const responseText = '{"name": "John", "age": 18}';
        return JSON.parse(responseText).age;
    };
    const userAge = fetchUserAge();
    console.log(userAge + 1);
};
exercise13();
//Done -----------------------------------------------------------------------------------------------------
// ✔ use type casting to fix the mistake in the code
// ✔ run the code before and after adding type casting to see the difference
// ✔ TODO: run the code below and observe the result, explain why it is happening,
// ✔ TODO: add type casting to the function above, to fix the error
// ✔ TODO: compile and run the code
const exercise14 = () => {
    const fetchUserAge = () => {
        const responseText = '{"name": "John", "age": "16"}'; // Age is a string!
        return Number(JSON.parse(responseText).age); // Type casting to number
    };
    const userAge = fetchUserAge();
    if (userAge === 16) {
        console.log("Time to get your driver license");
    }
    else if (userAge > 16) {
        console.log("You are old enough to drive");
    }
    else {
        console.log("You are not old enough to drive");
    }
};
exercise14();
//Done -----------------------------------------------------------------------------------------------------
// ✔ add type safety to the code which uses any
// ✔ TODO: declare a type for user object, which has a name property of type string
// ✔ TODO: fix the fetchUsers function to return an array of users, not any type
// ✔ TODO: add type safety to the data variable, annotate it with the type of users
// ✔ TODO: add check for the data type to contain list of users
// ✔ TODO: fix typings of the users variable (currently it is of type any)
// ✔ TODO: add type safety to the code to print the names of the users to console
// ✔ TODO: compile and run the code
const exercise15 = () => {
    const fetchUsers = () => {
        const data = JSON.parse('{"users": [{"name": "John"}, {"name": "Jane"}]}');
        if (Array.isArray(data.users)) {
            return data.users;
        }
        else {
            throw new Error("Invalid data format");
        }
    };
    const users = fetchUsers();
    users.forEach(user => typeof user.name === "string" ? console.log(user.name) : console.log("Invalid username"));
};
exercise15();
//Done -----------------------------------------------------------------------------------------------------
// ✔ use type declarations to fix the comments in the code
// ✔ TODO: add code which uses process.env.NODE_ENV variable,
// ✔ TODO: try to compile and see the error
// Error: Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
// ✔ TODO: add type declaration for process.env.NODE_ENV variable in global.d.ts file
// ✔ TODO: try to compile and see the error fixed
// ✔ TODO: remove global.d.ts file, copile and see the error again.
// Renamed the file "global.d.ts" to "global.--d.ts"
// ✔ TODO: install type declarations from error message -  @types/node
// The error disappeared after installation `npm i --save-dev @types/node`.
// NOTE: For the most part, type declaration packages should always have the same name as the package name on npm, but prefixed with @types/
// ✔ TODO: compile and run the code
const exercise16 = () => {
    const environment = process.env.NODE_ENV;
    console.log(environment);
};
exercise16();
//Done -----------------------------------------------------------------------------------------------------
