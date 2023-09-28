"use strict";
// ✔ Use mapping types
Object.defineProperty(exports, "__esModule", { value: true });
function exercise47() {
    const point = {
        x: 1,
        y: 2,
        z: 3,
    };
}
exercise47();
// Done -----------------------------------------------------------------------------------------------------
// ✔ Use mapping types modifiers
function exercise48() {
    const p1 = { x: 10 };
    const p2 = { x: 10, y: null };
}
exercise48();
// Done -----------------------------------------------------------------------------------------------------
// ✔ Template Literal Type
// ✔ TODO: create a type that represents a string that contains Tshirts sizes (S, M, L, XL, XXL)
// ✔ TODO: create a type that represents a string that contains Tshirts colors (red, green, blue)
// ✔ TODO: create a type that represents a string that contains Tshirts sizes and colors (e.g. "S-red", "M-green", "L-blue")
// ✔ TODO: create a function that takes a size and a color and returns a Tshirt size and color
// ✔ TOOD: make sure you annotate the params and return type of the function
function exercise49() {
    function createTshirt(size, color) {
        return `${size}-${color}`;
    }
    const tshirt = createTshirt("S", "red");
}
exercise49();
// Done -----------------------------------------------------------------------------------------------------
// ✔ Fix autocoplete problem for literal union types
// ✔ TODO: observe the problem with autocomplete in the line createCar("BMW");
// ✔ TODO: fix the problem by using the approach from the lesson
// ✔ TODO: check if autocomplete works before and after the fix
function exercise50() {
    function createCar(brand) {
        return `${brand} car`;
    }
    const car = createCar("BMW");
    const car2 = createCar("Porsche");
}
exercise50();
// Done -----------------------------------------------------------------------------------------------------
// ✔ Use satisfies constraint
function exercise51() {
    const shapes = {
        circle: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        square: [
            [1, 2, 3],
            [4, 5, 6],
        ],
    };
    // ✔ TODO: create a function that takes a list points and prints them into console
    function drawShape(points) {
        console.log(points);
    }
    ;
    // drawShape(shapes.circle123); // ✔ TOOD: uncomment and fix this to have compile check error, using satisfies constraint
    drawShape(shapes.square);
    drawShape(shapes.circle);
}
exercise51();
// Done -----------------------------------------------------------------------------------------------------
// ✔ This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra2() {
    /**
    * ✔ Write a program that prints the integers from 1 to 100 (inclusive).
    * But:
    * ✔ - for multiples of three, print Fizz (instead of the number)
    * ✔ - for multiples of five, print Buzz (instead of the number)
    * ✔ - for multiples of both three and five, print FizzBuzz (instead of the number)
    */
    const fizzBuzzValue = (num) => {
        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz";
        }
        else if (num % 3 === 0) {
            return "Fizz";
        }
        else if (num % 5 === 0) {
            return "Buzz";
        }
        return num;
    };
    let arrStrOrNum = [];
    const fizzBuzz = () => {
        for (let i = 1; i <= 100; i++) {
            console.log(fizzBuzzValue(i));
            arrStrOrNum.push(fizzBuzzValue(i));
        }
    };
    fizzBuzz();
    // ✔ TODO: convert fizzBuzz to generate a string instead of printing to console
    const fizzBuzzToString = () => {
        let str = '';
        for (let i = 1; i <= 100; i++) {
            if (typeof fizzBuzzValue(i) === 'string') {
                str += fizzBuzzValue(i);
            }
            else {
                str += fizzBuzzValue(i).toString();
            }
            i < 100 && (str += ' ');
        }
        return str;
    };
    fizzBuzzToString();
    // ✔ TODO: write a test to validate fizzBuzz output using console.assert
    const arrStr = fizzBuzzToString().split(' ');
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === 'FizzBuzz') {
            console.assert(arrStrOrNum[i] === 'FizzBuzz');
        }
        else if (arrStr[i] === 'Fizz') {
            console.assert(arrStrOrNum[i] === 'Fizz');
        }
        else if (arrStr[i] === 'Buzz') {
            console.assert(arrStrOrNum[i] === 'Buzz');
        }
        else {
            console.assert(arrStrOrNum[i] === Number(arrStr[i]));
        }
    }
}
exerciseExtra2();
