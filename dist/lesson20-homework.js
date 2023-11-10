"use strict";
// Learn and implement command design pattern in typescript. 
class Calculator {
    constructor() {
        this.value = 0;
        this.history = [];
    }
    executeCommand(command) {
        this.value = command.execute(this.value);
        this.history.push(command);
    }
    undo() {
        const command = this.history.pop();
        if (command) {
            this.value = command.undo(this.value);
        }
    }
}
class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd;
    }
    execute(currentValue) {
        return currentValue + this.valueToAdd;
    }
    undo(currentValue) {
        return currentValue - this.valueToAdd;
    }
}
class SubtractCommand {
    constructor(valueToSubtract) {
        this.valueToSubtract = valueToSubtract;
    }
    execute(currentValue) {
        return currentValue - this.valueToSubtract;
    }
    undo(currentValue) {
        return currentValue + this.valueToSubtract;
    }
}
class MultiplyCommand {
    constructor(valueToMultiply) {
        this.valueToMultiply = valueToMultiply;
    }
    execute(currentValue) {
        return currentValue * this.valueToMultiply;
    }
    undo(currentValue) {
        return currentValue / this.valueToMultiply;
    }
}
class DivideCommand {
    constructor(valueToDivide) {
        this.valueToDivide = valueToDivide;
    }
    execute(currentValue) {
        return currentValue / this.valueToDivide;
    }
    undo(currentValue) {
        return currentValue * this.valueToDivide;
    }
}
class AddThenMultiplyCommand {
    constructor(valueToAdd, valueToMultiply) {
        this.addCommand = new AddCommand(valueToAdd);
        this.multiplyCommand = new MultiplyCommand(valueToMultiply);
    }
    execute(currentValue) {
        const newValue = this.addCommand.execute(currentValue);
        return this.multiplyCommand.execute(newValue);
    }
    undo(currentValue) {
        const newValue = this.multiplyCommand.undo(currentValue);
        return this.addCommand.undo(newValue);
    }
}
const calculator = new Calculator();
// calculator.executeCommand(new AddCommand(10))
// calculator.executeCommand(new MultiplyCommand(2))
// console.log(calculator.value)
// calculator.undo()
// console.log(calculator.value)
// calculator.executeCommand(new AddThenMultiplyCommand(10, 2))
// console.log(calculator.value)
// calculator.undo()
// console.log(calculator.value)
const cearchInsert = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left;
        target > nums[mid] ? left = mid + 1 : right = mid - 1;
    }
    return left;
};
console.log(cearchInsert([1, 3, 5, 6, 8, 12, 15, 16, 17, 23, 25, 29, 31, 32, 35, 38, 39, 42], 31));
