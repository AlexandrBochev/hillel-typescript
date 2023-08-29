"use strict";
// install node.js
// install VSCode
// check if all installed - check node version
// open terminal
// % node -v
// % node --version
// check npm version
// % npm -v
// check npx version
// % npx -v
// version is not important, but it should be installed
// create a folder for the project
// % mkdir ts-learning
// % cd ts-learning
// init npm project
// % npm init -y
// install typescript - install typescript compiler tsc
// % npm i typescript
// create tsconfig.json
// % npx tsc --init --rootdir src --outdir dist
let greetingText = "Hello world!";
console.log(greetingText);
const example1 = () => {
    let isDone = false;
    let age = 42;
    let firstName = "Alexandr";
    let nothing = null;
    let notDefined = undefined;
    let largeNumber = 100n;
    let id = Symbol("id");
    let id2 = Symbol("id");
};
example1();
const example2 = () => {
    // Array, Date, RegExp, Map, Set
    let a = [];
    let pricesList = [1, 2, 3];
    let pricesList2 = [1, 2, 3];
    let todayDate = new Date();
    let regExp = /ab+c/;
    let set = new Set([1, 2, 3, 4, 5]);
    class Queue {
        constructor() {
            this.data = [];
        }
        push(item) {
            this.data.push(item);
        }
        pop() {
            this.data.shift();
        }
    }
    const queue = new Queue();
    console.log(queue);
};
example2();
