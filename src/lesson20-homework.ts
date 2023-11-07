// Learn and implement command design pattern in typescript. 

interface Calculator {
  value: number
  history: (AddCommand | SubtractCommand | MultiplyCommand | DivideCommand)[]
}

class Calculator {
  constructor() {
    this.value = 0
    this.history = []
  }

  executeCommand(command: AddCommand | SubtractCommand | MultiplyCommand | DivideCommand) {
    this.value = command.execute(this.value)
    this.history.push(command)
  }

  undo() {
    const command = this.history.pop()
    if (command) {
      this.value = command.undo(this.value)
    }
  }
}

class AddCommand {
  valueToAdd: number

  constructor(valueToAdd: number) {
    this.valueToAdd = valueToAdd
  }

  execute(currentValue: number) {
    return currentValue + this.valueToAdd
  }

  undo(currentValue: number) {
    return currentValue - this.valueToAdd
  }
}

class SubtractCommand {
  valueToSubtract: number

  constructor(valueToSubtract: number) {
    this.valueToSubtract = valueToSubtract
  }

  execute(currentValue: number) {
    return currentValue - this.valueToSubtract
  }

  undo(currentValue: number) {
    return currentValue + this.valueToSubtract
  }
}

class MultiplyCommand {
  valueToMultiply: number

  constructor(valueToMultiply: number) {
    this.valueToMultiply = valueToMultiply
  }

  execute(currentValue: number) {
    return currentValue * this.valueToMultiply
  }

  undo(currentValue: number) {
    return currentValue / this.valueToMultiply
  }
}

class DivideCommand {
  valueToDivide: number

  constructor(valueToDivide: number) {
    this.valueToDivide = valueToDivide
  }

  execute(currentValue: number) {
    return currentValue / this.valueToDivide
  }

  undo(currentValue: number) {
    return currentValue * this.valueToDivide
  }
}

interface AddThenMultiplyCommand {
  valueToAdd: number
  valueToMultiply: number
  addCommand: AddCommand
  multiplyCommand: MultiplyCommand
}

class AddThenMultiplyCommand {
  constructor(valueToAdd: number, valueToMultiply: number) {
    this.addCommand = new AddCommand(valueToAdd)
    this.multiplyCommand = new MultiplyCommand(valueToMultiply)
  }

  execute(currentValue: number) {
    const newValue = this.addCommand.execute(currentValue)
    return this.multiplyCommand.execute(newValue)
  }

  undo(currentValue: number) {
    const newValue = this.multiplyCommand.undo(currentValue)
    return this.addCommand.undo(newValue)
  }
}

const calculator = new Calculator()

// calculator.executeCommand(new AddCommand(10))
// calculator.executeCommand(new MultiplyCommand(2))
// console.log(calculator.value)
// calculator.undo()
// console.log(calculator.value)

calculator.executeCommand(new AddThenMultiplyCommand(10, 2))
console.log(calculator.value)
calculator.undo()
console.log(calculator.value)