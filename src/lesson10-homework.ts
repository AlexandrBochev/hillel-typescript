// string manipulation utilities type
function exercise52() {
  // ✔ TODO: write a utility type that for given object type T
  // ✔ will create a new type with all properties plus methods to get and set properties
  // ✔ plus methods to validate earch of the property
  type TObjectWithProperty<T> = {
    [K in keyof T]: T[K]
  }

  type TObjectWitName = {
    name: string;
  }
  // ✔ TODO: declare utility type TGettersSettersValidators (union of TGetters, TSetters, TValidators)
  // ✔ hint: TGetters for each of the property generates getXxxx method that returns property value
  // ✔ hint: TSetters for each of the property generates setXxxx method that sets property value
  // ✔ hint: TValidators for each of the property generates validateXxxx method that returns true if property value is valid
  type TGetters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
  }
  
  type TSetters<T> = {
    [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void;
  }
  
  type TValidators<T> = {
    [K in keyof T as `validate${Capitalize<string & K>}`]: () => boolean;
  }

  type TGettersSettersValidators<T> = TGetters<T> & TSetters<T> & TValidators<T>

  const obj = {
    name: "point",
  }

  // ✔ TODO: generate this type from TGettersSettersValidators using utility type
  // ✔ type TObjectMethods = TGettersSettersValidators<typeof obj>;
  type TObjectMethods = TGettersSettersValidators<typeof obj>

  // ✔ TODO: remvoe this declaration below and replac it with the one above
  // type TObjectMethods = {
  //   getName(): string
  //   setName(name: string): void
  //   validateName(): boolean
  // }

  const object: TObjectWitName & TObjectMethods = {
    name: "point",
    getName() {
      return this.name
    },
    setName(name: string) {
      this.name = name
    },
    validateName() {
      return this.name.length > 0
    },
  }

  // ✔ TODO: add property age to object and check if you get type check errors
  // object.age = 25 // Error: Property 'age' does not exist on type 'TObjectWitName & TObjectMethods'.
}
exercise52()

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
  enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
  }

  function getColor(color: number): string {
    let result = ""

    if ((color & Color.Red) === Color.Red) {
      result += Color[Color.Red]
    }
    if ((color & Color.Green) === Color.Green) {
      result.length ? result += `, ${Color[Color.Green]}` : result += Color[Color.Green]
    }
    if ((color & Color.Blue) === Color.Blue) {
      result.length ? result += `, ${Color[Color.Blue]}` : result += Color[Color.Blue]
    }

    return result
  }

  console.assert(getColor(0) === "")
  console.assert(getColor(1) === "Red")
  console.assert(getColor(2) === "Green")
  console.assert(getColor(3) === "Red, Green")
  console.assert(getColor(4) === "Blue")
  console.assert(getColor(5) === "Red, Blue")
  console.assert(getColor(6) === "Green, Blue")
  console.assert(getColor(7) === "Red, Green, Blue")
}
exercise53();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
// ✔ TODO: write a function to merge two sorted arrays of numbers into one sorted array
// ✔ TODO: convert mergeSortedArrays to a generic function to support strings and numbers

const exerciseExtra3 = () => {
  const mergeSortedArrays = <T>(arr1: T[], arr2: T[]): T[] => {
    return [...arr1, ...arr2].sort((a, b) => a > b ? 1 : -1)
  }

  console.assert(
    mergeSortedArrays([1, 2, 3], [4, 5, 6]).toString() ===
      [1, 2, 3, 4, 5, 6].toString()
  )
  console.assert(
    mergeSortedArrays([3, 4, 5], [4, 5, 6]).toString() ===
      [3, 4, 4, 5, 5, 6].toString()
  )
  console.assert(
    mergeSortedArrays([3, 4, 5, 6, 6, 10, 20], [4, 5, 6]).toString() ===
      [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString()
  )
  console.assert(
    mergeSortedArrays(['a', 'b', 'd', 'f', 'g'], ['b', 'c', 'c', 'g']).toString() ===
      ['a', 'b', 'b', 'c', 'c', 'd', 'f', 'g', 'g'].toString()
  )
}
exerciseExtra3()