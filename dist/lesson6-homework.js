"use strict";
// ✔ Create and use a type guard
// ✔ TODO: implement isWidget function to be a type guard
// ✔ TODO: uncomment the following code
Object.defineProperty(exports, "__esModule", { value: true });
const exercise29 = () => {
    const isWidget = (arg) => 'name' in arg;
    const printThingDescription = (arg) => isWidget(arg) ? console.log(arg.name) : console.log(arg.os);
    printThingDescription({ name: "widget" });
    printThingDescription({ os: "android" });
};
exercise29();
//Done -----------------------------------------------------------------------------------------------------
// ✔ Create an overloaded function definitions
const exercise30 = () => {
    function doSomething(obj) {
        obj.cost = 100;
        return obj;
    }
    // ✔ TODO: fix problem - typeof a: TThing, not TWidget
    const a = doSomething({ name: "widget" });
    // ✔ TODO: fix same here - typeof b: TThing, not TGadget
    const b = doSomething({ os: "android" });
    console.log(a, b);
};
exercise30();
//Done -----------------------------------------------------------------------------------------------------
// ✔ Create call signatures
const exercise31 = () => {
    const handleSaveUserSubmit = (firstName, lastName, email) => { };
    const createForm = (onSubmit) => {
        const firstName = "John";
        const lastName = "Smith";
        // ✔ TODO: uncomment the following line
        onSubmit(firstName, lastName);
    };
    const createForm2 = (onSubmit) => {
        const firstName = "John";
        const lastName = "Smith";
        const email = "jsmith@somemail.some.com";
        // ✔ TOOD: uncomment the following line
        onSubmit(firstName, lastName, email);
    };
    const createAndPrintUser = (ctor) => {
        // ✔ TOOD: uncomment the following lines
        const user = new ctor('John Smith');
        console.log(user);
    };
};
exercise31();
//Done -----------------------------------------------------------------------------------------------------
// ✔ Create an abstract class and concrete classes
const exercise32 = () => {
    // ✔ TODO: make this class abstract
    class Animal {
        constructor(name) {
            this.name = name;
            this.name = name;
        }
        eat() {
            console.log("eating");
        }
    }
    // ✔ TODO: inherit from Animal and implement makeSound method
    class Dog extends Animal {
        makeSound() {
            console.log("Woof! Woof!");
        }
    }
    // ✔ TODO: uncomment the following lines, fix the errors
    const myDog = new Dog('Buddy');
    myDog.eat();
    myDog.makeSound();
};
exercise32();
//Done -----------------------------------------------------------------------------------------------------
// ✔ Create a type for a dictionary with string keys and number values
const exercise33 = () => {
    // ✔ TODO: const dictionary variable of TDictionary type, assign some values (1, 2, 3)
    const dictionary = { "a": 1, "b": 2, "c": 3 };
    // ✔ TODO: uncomment the following lines, fix the errors
    dictionary['c'] = 3;
    dictionary['d'] = 3; // should cause an error - fixed!
    // ✔ TODO: implement a function that calculates number of characters
    // ✔ in a string using the dictionary type, and returns a most frequent character
    function getMostFrequentCharacter(str) {
        const charCount = {};
        for (const char of str.replace(/\s/g, ''))
            charCount[char] ? charCount[char]++ : charCount[char] = 1;
        let mostFrequentChar = '';
        let maxCount = 0;
        for (const char in charCount) {
            if (charCount[char] > maxCount) {
                mostFrequentChar = char;
                maxCount = charCount[char];
            }
        }
        return mostFrequentChar;
    }
    console.log(getMostFrequentCharacter("She sells seashells by the seashore."));
};
exercise33();
//Done -----------------------------------------------------------------------------------------------------
// ✔ Use index signature and caching
// ✔ TODO: Define a dictionary of student grades, add type definition using index signature
// ✔ key is a student name, value is an array of grades (numbers)
// ✔ TODO: Implement function to calculate the average grade for a student
// ✔ TODO: Iterate through the dictionary and display each student's average grade
// ✔ TODO: add caching for the average grade calculation to the calculateAverageGrade function
const exercise34 = () => {
    const studentGrades = {
        "Alice": [85, 90, 78],
        "Bob": [92, 88, 94],
        "John": [95, 79, 87, 88],
        "": [95, 79, 87],
        "Frank": []
    };
    const gradeCache = {};
    const calculateAverageGrade = (studentName) => {
        if (!studentName.length) {
            return "Student not found";
        }
        else if (!studentGrades[studentName].length) {
            return "don't have grades";
        }
        else {
            let sum = 0;
            for (const grade of studentGrades[studentName])
                sum += grade;
            const averageGrade = parseFloat((sum / studentGrades[studentName].length).toFixed(2));
            gradeCache[studentName] = averageGrade;
            return averageGrade;
        }
    };
    for (const studentName in studentGrades) {
        console.log(studentName, calculateAverageGrade(studentName));
    }
};
exercise34();
//Done -----------------------------------------------------------------------------------------------------
