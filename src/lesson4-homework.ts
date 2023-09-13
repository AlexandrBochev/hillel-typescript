// ✔ add readonly modifier to prevent props reassignment
// ✔ TODO: define class Student with properties name, age, studentId
// ✔ TODO: add constructor to initialize the properties
// ✔ TODO: add method printStudent to print the student info to console
// ✔ TODO: create an instance of the class Student
// ✔ TODO: print the student info to console
// ✔ TODO: try to change the studentId property
// ✔ TODO: change the studentId property to readonly, make sure that changing the property is not allowed
// ✔ TODO: compile and run the code

const exercise17 = () => {
  class Student {
    name: string
    age: number
    readonly studentId: number

    constructor(name: string, age: number, studentId: number) {
      this.name = name
      this.age = age
      this.studentId = studentId
    }

    printStudent(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}, StudentId: ${this.studentId}`)
    }
  }

  const student = new Student("Alex", 18, 456)
  student.printStudent()

  // student.studentId = 654
  // Error: Cannot assign to 'studentId' because it is a read-only property.
}
exercise17()

//Done -----------------------------------------------------------------------------------------------------

// ✔ use optional modifier to fix compile time error
// ✔ TODO: uncomment the code below and update the type definition to fix compile time error
// ✔ TODO: print the result to console
// ✔ TODO: compile and run the code

const exercise18 = () => {
  type TWidget = {
    name: string
    width: number
    height: number
    color?: string // optional modifier
    os?: string // optional modifier
    space: number
  }

  const widgetWithSize: TWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    color: 'red',
    space: 100,
  }

  const desktopWidget: TWidget = {
    name: 'widget',
    width: 10,
    height: 20,
    os: 'windows',
    space: 100,
  }

  console.log(widgetWithSize)
  console.log(desktopWidget)
}
exercise18()

//Done -----------------------------------------------------------------------------------------------------

// ✔ use uniton types to replace unknown type for compile time type checking
// ✔ TODO: compile and run the code

const exercise19 = () => {
  const formatCommandLine = (command: string | string[]) => {
    if (typeof command === "string") {
      return command.trim()
    } else if (Array.isArray(command)) {
      return command.map((arg) => arg.trim()).join(" ")
    }
    throw new Error("command must be string or string[]")
  }

  console.log(formatCommandLine("  git status  ")) // git status
  console.log(formatCommandLine(["git ", " status "])) // git status

  // console.log(formatCommandLine(false)) // ✔ run time error - should be compile time error instead
  // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | string[]'.
}
exercise19()

//Done -----------------------------------------------------------------------------------------------------

// ✔ use literal types for type checking
// ✔ TODO: define rock, paper, scissors literal type and assign it to TMove type
// ✔ TODO: add type check to the function below
// ✔ TODO: make sure that the following calls are not allowed
// ✔ TODO: compile and run the code

const exercise20 = () => {
  type TMove = "rock" | "paper" | "scissors"

  const rockPaperSizorsVins = (me: TMove, other: TMove): boolean => {
    if (me === "rock" && other === "paper") {
      return false
    }
    if (me === "paper" && other === "scissors") {
      return false
    }
    if (me === "scissors" && other === "rock") {
      return false
    }
    return true
  }
  console.log(rockPaperSizorsVins("rock", "paper")) // false
  console.log(rockPaperSizorsVins("paper", "scissors")) // false
  console.log(rockPaperSizorsVins("scissors", "rock")) // false
  console.log(rockPaperSizorsVins("rock", "scissors")) // true

  // console.log(rockPaperSizorsVins("papapaper", "scissors")) // true - no type check
  // Error: Argument of type '"papapaper"' is not assignable to parameter of type 'TMove'.
}
exercise20()

//Done -----------------------------------------------------------------------------------------------------

// ✔ use intersection types to improve code readability
// ✔ TODO: improve the types definitions to remove code duplication (for example to avoid declaring name property multiple times). Use intersection types
// ✔ TODO: print the result to console
// ✔ TODO: compile and run the code

const exercise21 = () => {
  // Types
  type TWidget = { name: string }
  type TBaseWidget = TWidget & {
    width: number
    height: number
    color: string
  }
  type TDesktopWidget = TBaseWidget & { os: string }
  type TMobileWidget = TBaseWidget & { space: number }

  // Widgets
  const widget: TWidget = { name: "widget" }
  const baseWidget: TBaseWidget = {
    ...widget,
    width: 10,
    height: 20,
    color: "red",
  }
  const desktopWidget: TDesktopWidget = { ...baseWidget, os: "windows" }
  const mobileWidget: TMobileWidget = { ...baseWidget, space: 100 }

  // Print 1 - just trying to experiment -
  type TPrintWidget = (widget: TWidget | TBaseWidget | TDesktopWidget | TMobileWidget | string | number) => void
  const printWidget: TPrintWidget = (widget) => {
    if (typeof widget === 'object') {
      let result = ""
      for (const value of Object.values(widget)) result += value + " "
      console.log(result)
    } else {
      console.log(widget)
    }
  }
  printWidget(widget.name)
  printWidget(baseWidget)
  printWidget(desktopWidget)
  printWidget(mobileWidget)

  // Print 2
  // console.log(widget.name)
  // console.log(
  //   baseWidget.name +
  //   " " +
  //   baseWidget.width +
  //   " " +
  //   baseWidget.height +
  //   " " +
  //   baseWidget.color
  // )
  // console.log(
  //   desktopWidget.name +
  //   " " +
  //   desktopWidget.width +
  //   " " +
  //   desktopWidget.height +
  //   " " +
  //   desktopWidget.color +
  //   " " +
  //   desktopWidget.os
  // )
  // console.log(
  //   mobileWidget.name +
  //   " " +
  //   mobileWidget.width +
  //   " " +
  //   mobileWidget.height +
  //   " " +
  //   mobileWidget.color +
  //   " " +
  //   mobileWidget.space
  // )
}
exercise21()

//Done -----------------------------------------------------------------------------------------------------

// ✔ rewrite the code using async await
// function printMessagesWithTimeout() {
//   setTimeout(() => {
//     console.log("1");

//     setTimeout(() => {
//       console.log("2");
//     }, 1000);

//     setTimeout(() => {
//       console.log("3");

//       setTimeout(() => {
//         console.log("4");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }
// printMessagesWithTimeout();
// ✔ TODO: compile and run the code

const exercise22 = () => {
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
  
  // Solution 1
  const printMessagesWithTimeout = async () => {
    for (let i = 1; i <= 4; i++) {
      if (i === 3) {
        console.log(i.toString())
      } else {
        await delay(1000)
        console.log(i.toString())
      }
    }
  }
  printMessagesWithTimeout()

  // Solution 2
  // const printMessagesWithTimeout2 = async () => {
  //   await delay(1000)
  //   console.log("1")
  //   await delay(1000)
  //   console.log("2")
  //   console.log("3")
  //   await delay(1000)
  //   console.log("4")
  // }
  // printMessagesWithTimeout2()
}
exercise22()

//Done -----------------------------------------------------------------------------------------------------