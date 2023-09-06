// ✔ try different target compiler options
// ✔ TODO: declare a Rectangle class, with width and height properties
// ✔ TODO: add a constructor which takes width and height as parameters
// ✔ TODO: add a method `getArea` which returns the area of the rectangle
// ✔ TODO: add a method `getPerimeter` which returns the perimeter of the rectangle
// ✔ TODO: create an instance of the Rectangle class, with width 10 and height 20
// ✔ TODO: call the method `getArea` and print the result to console
// ✔ TODO: call the method `getPerimeter` and print the result to console
// ✔ TODO: compile and run the code
// ✔ TODO: change compiler target to ES5, complile and see the compiled code
// ✔ TODO: change width and height properties to private, recomplile and
// ✔ TODO: change compiler target to ES2015, complile and see the compiled code
// ✔ TODO: change width and height properties to be prefixed with #, to use ESNext private fields support
// ✔ TODO: change compiler target to ESNext, complile and see the compiled code
// ✔ TODO: change compiler target to ES5, try to compile, check if you get the error Private identifiers are only available when targeting ECMAScript 2015 and higher.(18028)
// ✔ TODO: compile and run the code

const exercise10 = () => {
  class Rectangle {
    #width: number
    #height: number

    constructor(width: number, height: number) {
      this.#width = width
      this.#height = height
    }

    getArea(): number {
      return this.#width * this.#height
    }

    getPerimeter(): number {
      return (this.#width + this.#height) * 2
    }
  }

  const newRectangle = new Rectangle(10, 20)

  console.log(`The area of the rectangle is ${newRectangle.getArea()}`)
  console.log(`The perimeter of the rectangle is ${newRectangle.getPerimeter()}`)
}
exercise10();

//Done -----------------------------------------------------------------------------------------------------

// ✔ create a generic Stack class (Stack is a FILO data structure, push and pop methods are used to add and remove items from the top of the stack)
// ✔ TODO: create a generic Stack class
// ✔ TODO: add a private data property of type array of T
// ✔ TODO: add a push method which takes an item of type T as a parameter and adds it to the top of the stack
// ✔ TODO: add a pop method which removes and returns the item from the top of the stack
// ✔ TODO: create an instance of the Stack class with number type
// ✔ TODO: push two numbers to the stack
// ✔ TODO: pop an item from the stack and print it to console, calling toFixed method on it
// ✔ TODO: create an instance of the Stack class with string type
// ✔ TODO: push two strings to the stack
// ✔ TODO: pop an item from the stack and print it to console, calling toUpperCase method on it
// ✔ TODO: compile and run the code

const exercise11 = () => {
  class Stack<T> {
    private data: T[]

    constructor() {
      this.data = []
    }

    push(item: T): void {
      this.data.push(item)
    }

    pop(): T | undefined {
      return this.data.pop()
    }
  }

  const stackOfNums = new Stack<number>()

  stackOfNums.push(3.564)
  stackOfNums.push(5.8765)

  const poppedNum = stackOfNums.pop()
  poppedNum !== undefined ? console.log(`The popped number is ${poppedNum.toFixed()}`) : console.log("Stack is empty")

  const stackOfStrs = new Stack<string>()

  stackOfStrs.push("Hello there")
  stackOfStrs.push("How are you?")

  const poppedStr = stackOfStrs.pop()
  poppedStr !== undefined ? console.log(`The popped string is ${poppedStr.toUpperCase()}`) : console.log("Stack is empty")
}
exercise11();

//Done -----------------------------------------------------------------------------------------------------

// ✔ add type safety to the code which uses any
// ✔ TODO: declare a type for user object, which has a name property of type string
// ✔ TODO: fix the fetchUsers function to return an array of users, not any type
// function fetchUsers() {
  // ✔ TODO: add type safety to the data variable
  // const data: unknown = JSON.parse(
  //   '{"users": [{"name": "John"}, {"name": "Jane"}]}'
  // );

  // ✔ TODO: add check for the data type to contain list of users
  // return data;
// }
// ✔ TODO: fix typings of the users variable (currently it is of type any)
// const users = fetchUsers();
// ✔ TODO: add type safety to the code to print the names of the users to console
// users.forEach((user) => console.log(user.name));
// ✔ TODO: compile and run the code

const exercise12 = () => {
  type TUser = { name: string }

  const fetchUsers = (): TUser[] => {
    const data: { users: TUser[] } = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}'
    )

    if (!Array.isArray(data.users)) {
      throw new Error('Invalid data format: "users" should be an array.')
    }

    return data.users
  }

  const users: TUser[] = fetchUsers()
  users.forEach((user) => console.log(user.name))
}
exercise12()

//Done -----------------------------------------------------------------------------------------------------

// ✔ add type assertion to the code
// ✔ NOTE: do not change this function
// ✔ TODO: uncomment the following code and add type assertion to fix the error
// ✔ TODO: compile and run the code

const exercise13 = () => {
  const fetchUserAge = (): unknown => {
    const responseText = '{"name": "John", "age": 18}'
    return JSON.parse(responseText).age
  }

  const userAge = fetchUserAge() as number
  console.log(userAge + 1)
}
exercise13()

//Done -----------------------------------------------------------------------------------------------------

// ✔ use type casting to fix the mistake in the code
// ✔ run the code before and after adding type casting to see the difference
// ✔ TODO: run the code below and observe the result, explain why it is happening,
// ✔ TODO: add type casting to the function above, to fix the error
// ✔ TODO: compile and run the code

const exercise14 = () => {
  const fetchUserAge = () => {
    const responseText = '{"name": "John", "age": "16"}' // Age is a string!
    return Number(JSON.parse(responseText).age) // Type casting to number
  }

  const userAge = fetchUserAge()
  
  if (userAge === 16) {
    console.log("Time to get your driver license");
  } else if (userAge > 16) {
    console.log("You are old enough to drive");
  } else {
    console.log("You are not old enough to drive");
  }
}
exercise14()

//Done -----------------------------------------------------------------------------------------------------

// ✔ add type safety to the code which uses any
// ✔ TODO: declare a type for user object, which has a name property of type string
// ✔ TODO: fix the fetchUsers function to return an array of users, not any type
// ✔ TODO: add type safety to the data variable, annotate it with the type of users
// ✔ TODO: add check for the data type to contain list of users
// ✔ TODO: fix typings of the users variable (currently it is of type any)
// ✔ TODO: add type safety to the code to print the names of the users to console
// ✔ TODO: compile and run the code

const exercise15 = () => {
  type TUser = { name: string }

  const fetchUsers = (): TUser[] => {
    const data: { users: TUser[] } = JSON.parse(
      '{"users": [{"name": "John"}, {"name": "Jane"}]}'
    )

    if (Array.isArray(data.users)) {
      return data.users
    } else {
      throw new Error("Invalid data format")
    }
  }

  const users: TUser[] = fetchUsers();

  users.forEach(user => typeof user.name === "string" ? console.log(user.name) : console.log("Invalid username"))
}
exercise15()

//Done -----------------------------------------------------------------------------------------------------

// ✔ use type declarations to fix the comments in the code
// ✔ TODO: add code which uses process.env.NODE_ENV variable,
// ✔ TODO: try to compile and see the error
// Error: Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.

// ✔ TODO: add type declaration for process.env.NODE_ENV variable in global.d.ts file
// ✔ TODO: try to compile and see the error fixed
// ✔ TODO: remove global.d.ts file, copile and see the error again.
// Renamed the file "global.d.ts" to "global.--d.ts"

// ✔ TODO: install type declarations from error message -  @types/node
// The error disappeared after installation `npm i --save-dev @types/node`.

// NOTE: For the most part, type declaration packages should always have the same name as the package name on npm, but prefixed with @types/
// ✔ TODO: compile and run the code

const exercise16 = () => {
  const environment = process.env.NODE_ENV
  console.log(environment) 
}
exercise16();

//Done -----------------------------------------------------------------------------------------------------

//========================================== ✩ Extra Tasks ✩ ==============================================

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
  console.log(rockPaperSizorsVins("rock", "paper")); // false
  console.log(rockPaperSizorsVins("paper", "scissors")); // false
  console.log(rockPaperSizorsVins("scissors", "rock")); // false
  console.log(rockPaperSizorsVins("rock", "scissors")); // true

  // console.log(rockPaperSizorsVins("papapaper", "scissors")); // true - no type check
  // Error: Argument of type '"papapaper"' is not assignable to parameter of type 'TMove'.
}
exercise20()

//Done -----------------------------------------------------------------------------------------------------

// The rest next time...