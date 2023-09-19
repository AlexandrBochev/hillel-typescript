// ✔ Use double assertion
// ✔ TODO:Create two types: TPoint2D and TPoint3D
// ✔ TODO: add definition for x and y props for coordinates
// ✔ TODO: add definition for x, y and z props for coordinates
// ✔ TODO: fix the error by adding double assertion

import { type } from "os"

const exercise35 = () => {
  interface IPoint2D {
    x: number
    y: number
  }
  interface IPoint3D {
    x: number
    y: number
    z: number
  }

  let point2D: IPoint2D = { x: 1, y: 2 }
  let point3D: IPoint3D = { x: 1, y: 2, z: 3 }

  point3D = point2D as IPoint3D
}
exercise35()

//Done -----------------------------------------------------------------------------------------------------

// ✔ Use this parameter type annotation to fix the error in this code
// Note: this object does not have a name property
// but the toString function expects it to be there, and there is no type check
// ✔ TODO: add this param annotation, to enforce that this function
// can only be called on an object with name, age and role properties

const exercise36 = () => {
  const data = {
    firstName: "Joe",
    lastName: "Doe",
    age: 30,
    role: "Developer",
  }

  interface IPerson {
    name: string
    age: number
    role: string
  }
  
  function toString(this: IPerson) {
    this.name = `${data.firstName} ${data.lastName}`
    return `${this.name}, ${this.age}, ${this.role}`
  }

  data.toString = toString

  console.log(data.toString())
  console.log(data + "")
}
exercise36()

// Done -----------------------------------------------------------------------------------------------------

// ✔ Use generic constraints
// TODO: ✔ add generic constraints to enforce type checking, add return type annotation
// TODO: ✔ implement the method sayHello that returns a greeting string
// TODO: ✔ in the function generate variable fullName = `${obj.firstName} ${obj.lastName}`
// TODO: ✔ use fullName variable to generate a greeting string, for example: "Hello Joe Smith"
// TODO: ✔ make sure the obj is not modified, and new object is returned
// TODO: ✔ use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"

const exercise37 = () => {
  interface IPerson {
    firstName: string
    lastName: string
  }

  function addGreeting<T extends IPerson>(obj: T): T & { sayHello: () => string } {
    const fullName = `${obj.firstName} ${obj.lastName}`
    const sayHello = () => `Hello ${fullName}`
    return { ...obj, sayHello }
  }

  const person = addGreeting({
    firstName: "Joe",
    lastName: "Smith",
    age: 30,
    email: "john@sample.com",
  })

  // ✔ TODO: uncomment the following line and fix the error
  console.log(person.sayHello())
}
exercise37()

// Done -----------------------------------------------------------------------------------------------------

// ✔ Use experimental decorators
// ✔ TODO: implement decorator to print call count of the function
// ✔ add params here
// ✔ TODO: implement decorator
// ✔ TODO: before calling the function increment callCount
// ✔ TODO: after calling the function print callCount

// ✔ TODO: implement decorator to print execution time of the function
// ✔ add params here
// ✔ TODO: before calling the function get current time
// ✔ TODO: after calling the function get current time
// ✔ TODO: print the difference between the two times after calling the function

// ✔ TODO: add both decorators to the following method
// ✔ TODO: create instance of Calculation class and call add method

const exercise38 = () => {
  const count = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {  
    const originalMethod = descriptor.value
    let callCount = 0
    
    descriptor.value = (...args: any[]) => {
      callCount++
      console.log(`Function '${propertyKey}' has been called ${callCount} times.`)
      return originalMethod.apply(this, args)
    }

    return descriptor
  }
  
  const time = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = (...args: any[]) => {
      const startTime = performance.now()
      const result = originalMethod.apply(this, args)
      const endTime = performance.now()
      const executionTime = endTime - startTime
      console.log(`Function '${propertyKey}' took ${executionTime} milliseconds to execute.`)
      return result
    }

    return descriptor
  }

  class Calculation {
    // "experimentalDecorators": true
    // @count
    // @time
    add(a: number, b: number) {
      return a + b
    }
  }
  
  const calculator = new Calculation()

  console.log(calculator.add(1, 1))
  console.log(calculator.add(1, 2))
  console.log(calculator.add(2, 3))
  console.log(calculator.add(3, 5))
}
exercise38()

// Done -----------------------------------------------------------------------------------------------------

// ✔ Use 2023 decorators (Stage 3 decorator)
// ✔ TODO: implement decorator to print call count of the function
// ✔ TODO: implement decorator to print execution time of the function
// ✔ TODO: add both decorators to the following method
// ✔ TODO: create instance of Calculation class and call add method

function exercise39() {
  const count = (originalMethod: Function, context: ClassMethodDecoratorContext ) => {
    let callCount = 0

    function printCallCount(this: any, ...args: any[]) {
      callCount++
      console.log(`Function '${<string>context.name}' has been called ${callCount} times.`)
      const result = originalMethod.apply(this, args)
      return result
    }

    return printCallCount
  }

  const time = (originalMethod: Function, context: ClassMethodDecoratorContext ) => {
    function printCallTime(this: any, ...args: any[]) {
      const startTime = performance.now()
      const result = originalMethod.apply(this, args)
      const endTime = performance.now()
      const executionTime = endTime - startTime
      console.log(`Function '${<string>context.name}' took ${executionTime} milliseconds to execute.`)
      return result
    }

    return printCallTime
  }
  
  class Calculation {
    @count
    @time
    add(a: number, b: number) {
      return a + b;
    }
  }

  const calculator = new Calculation()

  console.log(calculator.add(1, 1))
  console.log(calculator.add(1, 2))
  console.log(calculator.add(2, 3))
  console.log(calculator.add(3, 5))
}
exercise39()

// Done -----------------------------------------------------------------------------------------------------