"use strict";
// Home work ------------------------------------------------------------------
// 1. Heloo World task
// TODO: creaate excercise1 folder
// TODO: check node version
// TODO: check npm version
// TODO: check npx version
// TODO: init npm project
// TODO: install typescript
// TODO: generate tsconfig.json
// TODO: create src/index.ts with this code
const exercise1 = () => {
    let greeting;
    greeting = 'Hello World';
    console.log(greeting);
};
exercise1();
// TODO: run typescript in watch mode
// TODO: compare with javascript generated by typescript
//Done -------------------------------------------------------------------------
// 2. loop which prints string to console n times
const exercise2 = () => {
    // declare two varaibles - one of string, one of type number
    // assign string var value 'Hello'
    // assign number var value 3
    // create a while loop which prints string variable to console 3 times
    // try to assign number variable to string variable - observe the error
    const greet = "Hello";
    let n = 3;
    while (n) {
        n -= 1;
        console.log(greet);
    }
};
exercise2();
//Done -------------------------------------------------------------------------
// 3. code that generates array of numbers - from n to m
const exercise3 = () => {
    // TODO: declare varaibles n and m of type number
    // TODO: declare varaible result of type array of numbers
    // TODO: assign n and m some values - n = 1, m = 10
    // TODO: create a for loop which adds numbers from n to m to result array
    // TODO: support case where m > n (reverse the order)
    const n = 1;
    const m = 10;
    // const n: number = 10
    // const m: number = 1
    const result = [];
    if (m > n) {
        for (let i = n; i <= m; i++) {
            result.push(i);
        }
    }
    else {
        for (let i = n; i >= m; i--) {
            result.push(i);
        }
    }
    console.log(result);
};
exercise3();
// TODO: compile and run the code
//Done -------------------------------------------------------------------------
// 4. Create a function which uses tuple type to calculate the distance between two points in 2D space
const exercise4 = () => {
    // TODO: declare two variables of type tuple, each with two numbers
    // TODO: assign values to the variables (1,1) and (4,5)
    // TODO: create a function which calculates the distance between two points in 2D space
    const p1 = [1, 1];
    const p2 = [4, 5];
    const distance = (p1, p2) => {
        const x1 = p1[0]; // TODO: replace with the first element of p1
        const y1 = p1[1]; // TODO: replace with the second element of p1
        const x2 = p2[0]; // TODO: replace with the first element of p2
        const y2 = p2[1]; // TODO: replace with the second element of p2
        // TODO: calculate the distance
        const valueX = x2 - x1;
        const valueY = y2 - y1;
        const result = Math.sqrt(valueX ** 2 + valueY ** 2);
        return result;
    };
    // TODO: call the function and print the result to console
    console.log(distance(p1, p2));
};
exercise4();
// TODO: compile and run the code
//Done -------------------------------------------------------------------------
// 5. Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
const exercise5 = () => {
    const p1 = { x: 1, y: 1 };
    const p2 = { x: 4, y: 5 };
    const distance = (p1, p2) => {
        // const x1 = p1.x // TODO: replace with the x-coordinate of p1
        // const y1 = p1.y // TODO: replace with the y-coordinate  of p1
        // const x2 = p2.x // TODO: replace with the x-coordinate  of p2
        // const y2 = p2.y // TODO: replace with the y-coordinate  of p2
        // TODO: calculate the distance
        const { x: x1, y: y1 } = p1;
        const { x: x2, y: y2 } = p2;
        const valueX = x2 - x1;
        const valueY = y2 - y1;
        const result = Math.sqrt(valueX ** 2 + valueY ** 2);
        // TODO: rewrite code to use distructuring to get x and y from p1 and p2
        return result;
    };
    // TODO: call the function and print the result to console
    console.log(distance(p1, p2));
};
// TODO: compile and run the code
exercise5();
//Done -------------------------------------------------------------------------
