// ✔ Use mappping types

function exercise47() {
  // ✔ implement mapped type that takes two types T and K
  // ✔ K must be a union of strings or numbers or symbols
  // ✔ the mapped type should create a new type that has all properties included in list K, and the value of each property is T
  type TRecord<K extends string | number | symbol, T> = {
    [P in K]: T;
  };
  // ✔ TODO: uncomment the following code and check if your mapped type works
  type TPoint = TRecord<"x" | "y" | "z", number>;
  const point: TPoint = {
    x: 1,
    y: 2,
    z: 3,
  };
}
exercise47();

// Done -----------------------------------------------------------------------------------------------------

// ✔ Use mappping types modifiers

function exercise48() {
  // ✔ implement mapped type that makes all properties of T optional and nullable
  type TPartialNullable<T> = {
    [K in keyof T]?: T[K] | null;
  };

  type TPoint = {
    x: number;
    y: number;
    z: number;
    name: string;
  };

  type TNullablePoint = TPartialNullable<TPoint>;
  const p1: TNullablePoint = { x: 10 };
  const p2: TNullablePoint = { x: 10, y: null };
}
exercise48();

// Done -----------------------------------------------------------------------------------------------------

// ✔ Template Literal Type
// ✔ TODO: create a type that represents a string that contains Tshirts sizes (S, M, L, XL, XXL)
// ✔ TODO: create a type that represents a string that contains Tshirts colors (red, green, blue)
// ✔ TODO: create a type that represents a string that contains Tshirts sizes and colors (e.g. "S-red", "M-green", "L-blue")
// ✔ TODO: create a function that takes a size and a color and returns a Tshirt size and color
// ✔ TOOD: make sure you annotate the params and return type of the function

function exercise49() {
  type TSize = 'S' | 'M' | 'L' | 'XL' | 'XXL'
  type TColor = 'red' | 'green' | 'blue'
  type TTshirt = `${TSize}-${TColor}`
  function createTshirt(size: TSize, color: TColor): TTshirt {
    return `${size}-${color}`;
  }
  const tshirt = createTshirt("S", "red");
}
exercise49();

// Done -----------------------------------------------------------------------------------------------------

// ✔ Fix autocoplete problem for literal union types
// ✔ TODO: observe the problem with autocomplete in the line createCar("BMW");
// ✔ TODO: fix the problem by using the approach from the lesson
// ✔ TODO: check if autocomplete works before and after the fix

function exercise50() {
  type Brands = "BMW" | "Mercedes" | "Audi" | (string & {});

  function createCar(brand: Brands) {
    return `${brand} car`;
  }
  
  const car = createCar("BMW");
  const car2 = createCar("Porsche");
}
exercise50();

// Done -----------------------------------------------------------------------------------------------------

// ✔ Use satisfies constraint

function exercise51() {
  // ✔ TODO: create a tuple type that represents a 3d point
  type TPoint = [x: number, y: number, z: number];
  // ✔ TODO: create a type that represents a 3d shapes (key is a string, value is an array of 3d points)
  type TShapes = Record<string, TPoint[]>;

  const shapes = {
    circle: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    square: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  } satisfies TShapes;

  // ✔ TODO: create a function that takes a list points and prints them into console
  function drawShape(points: TPoint[]) {
    console.log(points);
  };

  // drawShape(shapes.circle123); // ✔ TOOD: uncomment and fix this to have compile check error, using satisfies constraint
  drawShape(shapes.square);
  drawShape(shapes.circle);
}
exercise51();

// Done -----------------------------------------------------------------------------------------------------

// ✔ This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it

function exerciseExtra2() {
  /**
  * ✔ Write a program that prints the integers from 1 to 100 (inclusive).
  * But:
  * ✔ - for multiples of three, print Fizz (instead of the number)
  * ✔ - for multiples of five, print Buzz (instead of the number)
  * ✔ - for multiples of both three and five, print FizzBuzz (instead of the number)
  */

  function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
        continue
      } else if (i % 3 === 0) {
        console.log("Fizz")
        continue
      } else if (i % 5 === 0) {
        console.log("Buzz")
        continue
      }
      console.log(i)
    }
  }
  fizzBuzz();
  /**
   * 1
   * 2
   * Fizz
   * 4
   * Buzz
   * ...
   */

  // TODO: convert fizzBuzz to generate a string instead of printing to console
  function fizzBuzzToString() {
    // TODO: add your code here
  }
  fizzBuzzToString();
  // TODO: write a test to validate fizzBuzz output using console.assert
  console.assert(false, "ok" );
}
exerciseExtra2();