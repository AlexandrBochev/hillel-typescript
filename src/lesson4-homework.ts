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
      await delay(1000)
      console.log(i.toString())
    }
  }
  printMessagesWithTimeout()

  // Solution 2
  // const printMessagesWithTimeout2 = async () => {
  //   await delay(1000)
  //   console.log("1")
  //   await delay(1000)
  //   console.log("2")
  //   await delay(1000)
  //   console.log("3")
  //   await delay(1000)
  //   console.log("4")
  // }
  // printMessagesWithTimeout2()
}
exercise22()

//Done -----------------------------------------------------------------------------------------------------

//========================================== ✩ Extra Tasks ✩ ==============================================

// ✔ use type narrowing to print the passanger info
// ✔ TODO: define THuman type with properties name, age, driverLicenseId
// ✔ TODO: define TAnimal type with properties name, age, species
// ✔ TODO: define TPassanger type as union of THuman and TAnimal
// ✔ TODO: annotate the function to accept TPassanger type
// ✔ TODO: use type narrowing to print the passanger info
// ✔ TODO: print driverLicenseId if passanger is human
// ✔ TODO: print species if passanger is animal
// ✔ TODO: add missing properties to human and animal objects
// ✔ TODO: Implement function printPassangerInfo using instanceof operator to narrow the type of the passanger
// ✔ TODO: Add implementation of the printPassangerInfo using property check to narrow the type of the passanger
// ✔ TODO: compile and run the code

const exercise23 = () => {
  // Types
  type THuman = {
    name: string,
    age: number,
    driverLicenseId: string
  }
  type TAnimal = {
    name: string,
    age: number,
    species: string
  }
  type TPassenger = THuman | TAnimal

  // Classes
  class Human {
    constructor(
      public name: string,
      public age: number,
      public driverLicenseId: string
    ) {}
  }
  class Animal {
    constructor(
      public name: string,
      public age: number,
      public species: string
    ) {}
  }

  // Passengers
  const human: THuman = {
    name: "Frank",
    age: 23,
    driverLicenseId: "DL12345"
  }
  const animal: TAnimal = {
    name: "Rexy",
    age: 6.8e7,
    species: "Tyrannosaurus"
  }
  const human2 = new Human("Chester", 32, "DL54321")
  const animal2 = new Animal("Sharky", 2.1e7, "Megalodon")

  // Print
  const printPassengerInfo = (passenger: TPassenger) => {
    console.log(`Name: ${passenger.name}`)
    console.log(`Age: ${passenger.age}`)

    if (
      passenger === human || // Using human check to narrow the type of the passenger
      passenger instanceof Human || // Using instanceof operator to narrow the type of the passenger
      'driverLicenseId' in passenger // Using property check to narrow the type of the passenger
    ) {
      console.log(`Driver license: ${passenger.driverLicenseId}`)
    }
    
    if (
      passenger === animal || // Using animal check to narrow the type of the passenger
      passenger instanceof Animal || // Using instanceof operator to narrow the type of the passenger
      'species' in passenger // Using property check to narrow the type of the passenger
    ) {
      console.log(`Species: ${passenger.species}`)
    }
  }
  
  printPassengerInfo(human)
  printPassengerInfo(animal)

  printPassengerInfo(human2)
  printPassengerInfo(animal2)
}
exercise23()

//Done -----------------------------------------------------------------------------------------------------

// ✔ use discriminated union to narrow the type of the object
// ✔ TODO: add type property to TBlogMessage, TBlogImage, TBlogComment with literal type of 'message', 'image', 'comment'
// ✔ TODO: use discriminated union to narrow the type of the object
// ✔ TODO: add missing type property to the objects
// ✔ TODO: compile and run the code

const exercise24 = () => {
  type TBlogMessage = {
    type: "message"
    text: string
  };
  type TBlogImage = {
    type: "image"
    url: string
  };
  type TBlogComment = {
    type: "comment"
    text: string
    messageId: string
  };

  type TBlogPost = TBlogMessage | TBlogImage | TBlogComment;

  const printBlogPost = (post: TBlogPost): void => {
    if (post.type === "comment") console.log("comment: ", post.text)
    if (post.type === "image") console.log("image: ", post.url)
    if (post.type === "message") console.log("message: ", post.text)
  }

  printBlogPost({ type: "message", text: "abc" })
  printBlogPost({ type: "image", url: "abc" })
  printBlogPost({ type: "comment", text: "abc", messageId: "123" })
}
exercise24()

//Done -----------------------------------------------------------------------------------------------------