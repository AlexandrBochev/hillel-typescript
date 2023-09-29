"use strict";
// string manipulation utilities type
function exercise52() {
    const obj = {
        name: "point",
    };
    // ✔ TODO: remvoe this declaration below and replac it with the one above
    // type TObjectMethods = {
    //   getName(): string
    //   setName(name: string): void
    //   validateName(): boolean
    // }
    const object = {
        name: "point",
        getName() {
            return this.name;
        },
        setName(name) {
            this.name = name;
        },
        validateName() {
            return this.name.length > 0;
        },
    };
    // ✔ TODO: add property age to object and check if you get type check errors
    // object.age = 25 // Error: Property 'age' does not exist on type 'TObjectWitName & TObjectMethods'.
}
exercise52();
// Done -----------------------------------------------------------------------------------------------------
// enums
// ✔ TODO: declare enum Color with values Red, Green, Blue
// ✔ TODO: assing Red: 1, Green: 2, Blue: 4
// ✔ TODO: declare a function that takes a color as a number and returns a string
// ✔ TODO: use bitmask bitwise AND operator to check if color has Red, Green, Blue
// ✔ TODO: check if red bit is set by bitwise & operator, if so - add "Red" to result
// ✔ TODO: check if green bit is set by bitwise & operator, if so - add "Green" to result
// ✔ TODO: check if blue bit is set by bitwise & operator, if so - add "Blue" to result
// ✔ TODO: explain how bitmask works
// ✔ TODO: add test assertionsns using this table
function exercise53() {
    let Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 4] = "Blue";
    })(Color || (Color = {}));
    function getColor(color) {
        let result = "";
        if ((color & Color.Red) === Color.Red) {
            result += Color[Color.Red];
        }
        if ((color & Color.Green) === Color.Green) {
            result.length ? result += `, ${Color[Color.Green]}` : result += Color[Color.Green];
        }
        if ((color & Color.Blue) === Color.Blue) {
            result.length ? result += `, ${Color[Color.Blue]}` : result += Color[Color.Blue];
        }
        return result;
    }
    console.assert(getColor(0) === "");
    console.assert(getColor(1) === "Red");
    console.assert(getColor(2) === "Green");
    console.assert(getColor(3) === "Red, Green");
    console.assert(getColor(4) === "Blue");
    console.assert(getColor(5) === "Red, Blue");
    console.assert(getColor(6) === "Green, Blue");
    console.assert(getColor(7) === "Red, Green, Blue");
}
exercise53();
// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
// ✔ TODO: write a function to merge two sorted arrays of numbers into one sorted array
// ✔ TODO: convert mergeSortedArrays to a generic function to support strings and numbers
const exerciseExtra3 = () => {
    const mergeSortedArrays = (arr1, arr2) => {
        return [...arr1, ...arr2].sort((a, b) => a > b ? 1 : -1);
    };
    console.assert(mergeSortedArrays([1, 2, 3], [4, 5, 6]).toString() ===
        [1, 2, 3, 4, 5, 6].toString());
    console.assert(mergeSortedArrays([3, 4, 5], [4, 5, 6]).toString() ===
        [3, 4, 4, 5, 5, 6].toString());
    console.assert(mergeSortedArrays([3, 4, 5, 6, 6, 10, 20], [4, 5, 6]).toString() ===
        [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString());
    console.assert(mergeSortedArrays(['a', 'b', 'd', 'f', 'g'], ['b', 'c', 'c', 'g']).toString() ===
        ['a', 'b', 'b', 'c', 'c', 'd', 'f', 'g', 'g'].toString());
};
exerciseExtra3();
