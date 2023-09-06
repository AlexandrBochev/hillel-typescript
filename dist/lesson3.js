"use strict";
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
// Compiler options
function lesson3() {
    var _Book_title, _Book_year;
    class Book {
        constructor(title, year) {
            _Book_title.set(this, void 0);
            _Book_year.set(this, void 0);
            __classPrivateFieldSet(this, _Book_title, title, "f");
            __classPrivateFieldSet(this, _Book_year, year, "f");
        }
        getInfo() {
            return `${__classPrivateFieldGet(this, _Book_title, "f")} - ${__classPrivateFieldGet(this, _Book_year, "f")}`;
        }
        getAge() {
            return new Date().getFullYear() - __classPrivateFieldGet(this, _Book_year, "f");
        }
    }
    _Book_title = new WeakMap(), _Book_year = new WeakMap();
    // Generics classes and functions
    class QueueOfStrings {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    class QueueOfNumbers {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    class QueueOfUsers {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    class Queue {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            return this.data.shift();
        }
    }
    const q = new Queue();
    q.push({ name: "Igor", age: 34 });
    let x = q.pop();
    function cloneShallow(arg) {
        if (typeof arg === "object") {
            return { ...arg };
        }
        return arg;
    }
    const obj = {
        name: "Igor",
        age: 34,
    };
    const res = cloneShallow(obj);
    function getFirstElement(arr) {
        return arr[0];
    }
    const arr = [1, 2, 3];
    const res2 = getFirstElement(arr);
    function findLargest(arr) {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        }
        let largest = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }
        return largest;
    }
    const o1 = { name: "bob", valueOf: () => 10 };
    const o2 = { name: "Joe", valueOf: () => 20 };
    const res3 = findLargest([o1, o2]);
    function largest(a, b) {
        return a > b ? a : b;
    }
    function largestString(a, b) {
        return a > b ? a : b;
    }
    // Special Types: any and unknown
    function foo(arg) {
        if (typeof arg === "number") {
            console.log(arg.toFixed(2));
        }
    }
    // Type Assertions, Type Casting
    function fetchUser() {
        const response = '{"name": "John", "age": 18}';
        return JSON.parse(response);
    }
    const user1 = fetchUser();
    const user2 = fetchUser(); // as { name: string; age: number }
    if (typeof user2 === "object" &&
        user2 !== null &&
        "name" in user2 &&
        "age" in user2) {
        console.log(user2.name);
        console.log(user2.age);
    }
    function getSomething() {
        return 1;
    }
    const x1 = getSomething();
    if (typeof x1 === "number") {
        console.log(x1.toFixed(2));
    }
    // if (typeof x1 !== "number") {
    //   throw new Error("Something went wrong");
    // }
    // console.log(x1.toFixed(2));
    let x2 = x1;
    if (typeof x1 === "string" || typeof x1 === "boolean") {
        let x3 = +x1;
    }
    console.log(process.env.NODE_ENV);
    // const x2 = <number>getSomething();
    // Type Declarations, d.ts files
    // Npm package publishing
    // async/await
}
