// ✔ fix issues related to temporal uncertainty

function exercise40() {
  interface FetchDocument {
    date: number
    hours: number
  }

  type DataArray = FetchDocument[]

  interface GroupDocument {
    name: string
    data: DataArray
  }

  // ✔ TODO: fix the type of fetchResult variable to be union of array of GroupDocument objects / null
  let fetchResult: GroupDocument[] | null = null

  // ✔ TODO: keep this code as is
  fetchResult = [
    {
      name: "John",
      data: [
        {
          date: 13,
          hours: 14,
        },
        {
          date: 12,
          hours: 433,
        },
      ],
    },
    {
      name: "Ringo",
      data: [
        {
          date: 13,
          hours: 41,
        },
        {
          date: 11,
          hours: 233,
        },
      ],
    },
  ]

  const userNames = ["John", "Ringo"]

  if (fetchResult !== null) {
    // NOTE: observe taht type narrowing works here
    console.log(fetchResult.length)

    userNames.forEach((name) => {
      // ✔ TOOD: explain why type narrowing does not work here and fix the error (and remove any type annotations)
      // The narrowing type doesn't work here because TypeScript can't infer the exact type inside the find callback function
      let result = fetchResult?.find((obj) => obj.name === name)

      if (result) {
        console.log(result.data)
      }
    })
  }
}
exercise40()

// Done -----------------------------------------------------------------------------------------------------

// ✔ Use typeof operator

function exercise41() {
  // for this exercise, use the following data
  const user = {
    id: 1,
    firstName: "Terry",
    lastName: "Medhurst",
    maidenName: "Smitham",
    age: 50,
    gender: "male",
    email: "atuny0@sohu.com",
    phone: "+63 791 675 8914",
    username: "atuny0",
    password: "9uQFF1Lh",
    birthDate: "2000-12-25",
    image: "https://robohash.org/hicveldicta.png",
    bloodGroup: "A−",
    height: 189,
    weight: 75.4,
    eyeColor: "Green",
    hair: {
      color: "Black",
      type: "Strands",
    },
    domain: "slashdot.org",
    ip: "117.29.86.254",
    address: {
      address: "1745 T Street Southeast",
      city: "Washington",
      coordinates: {
        lat: 38.867033,
        lng: -76.979235,
      },
      postalCode: "20020",
      state: "DC",
    },
    macAddress: "13:69:BA:56:A3:74",
    university: "Capitol University",
    bank: {
      cardExpire: "06/22",
      cardNumbers: ["50380955204220685", "6762303175774717"],
      cardType: "maestro",
      currency: "Peso",
      iban: "NO17 0695 2754 967",
    },
    company: {
      address: {
        address: "629 Debbie Drive",
        city: "Nashville",
        coordinates: {
          lat: 36.208114,
          lng: -86.58621199999999,
        },
        postalCode: "37076",
        state: "TN",
      },
      department: "Marketing",
      name: "Blanda-O'Keefe",
      title: "Help Desk Operator",
    },
    ein: "20-9487066",
    ssn: "661-64-2976",
    userAgent:
      "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
  } 

  // ✔ TODO: for each property of the user object, print its type using js typeof operator
  function printAllUserPropTypes() {
    // ✔ TODO: get lis of own keys of the user object
    const keysOfUser = Object.keys(user) as Array<keyof typeof user>

    // ✔ TODO: iterate over the keys with foreach
    // ✔ TODO: console.log the typeof for each property
    keysOfUser.forEach(key => console.log(`${key}: ${typeof user[key]}`))
  }
  printAllUserPropTypes()

  // TODO: create function that returns coordinates of the user copany address,
  // TODO: set the return type of that function using typeof operator

  // everything in the task has already been implemented ¯\_(ツ)_/¯
  function getCoordinates(): typeof user.company.address.coordinates {
    return user.company.address.coordinates, user.company.address.coordinates
  }
  console.log(getCoordinates())
}
exercise41()

// Done -----------------------------------------------------------------------------------------------------

// ✔ Use lookup types

function exercise42() {
  // imagine you have a list of products received from the API
  // and you need to display the location coordinates of every product's warehouse
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        {
          url: "https://i.dummyjson.com/data/products/1/1.jpg",
          title: "user photo 1",
        },
        {
          url: "https://i.dummyjson.com/data/products/1/2.jpg",
          title: "user photo 2",
        },
      ],
      warehouse: {
        address: {
          address: "629 Debbie Drive",
          city: "Nashville",
          coordinates: {
            lat: 36.208114,
            lng: -86.58621199999999,
          },
          postalCode: "37076",
          state: "TN",
        },
        name: "Blanda-O'Keefe",
        phoneNumbers: ["1-615-843-3426", "1-615-843-3427"],
      },
    },
  ];

  // ✔ TODO: for a given products data, implement a single TProduct type, write type annotation for every property
  type TProduct = {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: {
      url: string
      title: string
    }[]
    warehouse: {
      address: {
        address: string
        city: string
        coordinates: {
          lat: number
          lng: number
        };
        postalCode: string
        state: string
      };
      name: string
      phoneNumbers: string[]
    }
  }

  // ✔ TODO: create a type TCoodinates that represents coordinates, using lookup type
  //  (product->warehouse->address->coordinates)
  type TCoordinates = TProduct["warehouse"]["address"]["coordinates"]

  // ✔ TODO: fix/add type annotation for the function (remove any type annotation)
  function printProductLocationCoordinates(coordinates: TCoordinates) {
    // NOTE: this could be using google map api to display the location on the map, but for now just console.log
    console.log(coordinates.lat)
    console.log(coordinates.lng)
  }

  printProductLocationCoordinates(products[0].warehouse.address.coordinates)

  // you also need a function which returns a phone number of given product's warehouse
  // ✔ TODO: add return type annotation using lookup type, instead of hardcoded string type
  function getProductWarehousePhoneNumber(product: TProduct): TProduct["warehouse"]["phoneNumbers"][0] {
    // ✔ TODO: fix the return value to be a type of a phone number for the product warehouse
    // HINT: use lookup types, and the result for that should equal to string type
    // ✔ TODO: make sure the function gets a phone number from product object
    return product.warehouse.phoneNumbers[0]
  }

  const phoneNumber = getProductWarehousePhoneNumber(products[0])
  console.log(phoneNumber)
}
exercise42()

// Done -----------------------------------------------------------------------------------------------------

// ✔ Use keyof type operators

function exercise43() {
  // ✔ TODO: implement functions to get and set property of an object in type safe way
  // ✔ TODO: for type sefty use generics and keyof type operator to ensure that key is a valid property of the object
  function getProperty<T>(obj: T, key: keyof T) {
    console.log("getProperty", obj[key])

    return obj[key]
  }

  // ✔ TODO: use generics and lookup type, add types T, K and use T[K] for value param type
  function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
    obj[key] = value
    console.log("setProperty", obj, key, obj[key])
  }

  const user = {
    firstName: "John",
    lastName: "Doe",
    role: "admin",
  }

  getProperty(user, "role") // admin
  setProperty(user, "role", "user")
}
exercise43()

// Done -----------------------------------------------------------------------------------------------------

// ✔ Use conditional types
// ✔ TODO: create a coditional type that will check if the type is a primitive type (unites all string, number, boolean)
// ✔ TODO: if the type is primitive, return literal type 'primitive'
// ✔ TODO: if the type is not primitive, return literal type 'not primitive'

function exercise44() {
  type TIsPrimitive<T> = T extends string | number | boolean ? 'primitive' : 'not primitive'

  // ✔ TODO uncomment the following lines
  type T1 = TIsPrimitive<number> // hint: should be 'primitive'
  type T2 = TIsPrimitive<string>
  type T3 = TIsPrimitive<0>
  type T4 = TIsPrimitive<{}>  // hint: should be 'not primitive'
  type T5 = TIsPrimitive<Function> // hint: should be 'not primitive'
}
exercise44()

// Done -----------------------------------------------------------------------------------------------------

// ✔ Use conditional types with unions and never

function exercise45() {
  // ✔ TODO: create a type that excludes number from a union type
  type ExcludeNumberFromType<T> = T extends number ? never : string // ✔ TODO: replace with your code

  type TNumberOrString = number | string

  type TExcludeNumberFromType = ExcludeNumberFromType<TNumberOrString> // ✔ Hint - should equal to string

  // ✔ TODO: uncomment the following lines and make sure there are no errors
    const a: TExcludeNumberFromType = "test"
    console.log(a)
}
exercise45()

// Done -----------------------------------------------------------------------------------------------------

// ✔ Use infer keyword
// ✔ create a type that extracts the type of the first argument of a function

function exercise46() {
  type FirstParameter<T> = T extends (...args: infer P) => any ? P[0] : never

  function createUser(firstName: string, lastName: string, age: number) {
    const id = (Math.random() * 100000).toString();

    return {
      firstName,
      lastName,
      age,
      id,
    }
  }

  // ✔ TODO: uncomment the following line and fix the error
  type TCreateUserFirstArg = FirstParameter<typeof createUser> // string
}
exercise46()

// Done -----------------------------------------------------------------------------------------------------

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
// ✔ TODO: create a function to determine if two strings are an anagram
// HINT: A word is an anagram of another if you can rearrange its characters to produce the second word.
// HINT: consider exercise33 for code reuse ideas

function exerciseExtra1() {
  function areAnagrams(s1: string, s2: string): boolean {
    const cleanStr = (str: string) => str.replace(/\s/g, '').toLowerCase()

    // Solution 1 (from exercise 33)
    // const charCountObj = (str: string) => {
    //   let charCount: { [key: string]: number } = {}
    //   for (const char of str) charCount[char] ? charCount[char]++ : charCount[char] = 1
    //   return charCount
    // }
    
    // const keys1 = Object.keys(charCountObj(cleanStr(s1)))
    // const keys2 = Object.keys(charCountObj(cleanStr(s2)))

    // if (keys1.length !== keys2.length) {
    //   return false
    // } else {
    //   for (const key of keys1) {
    //     if (charCountObj(cleanStr(s1))[key] !== charCountObj(cleanStr(s2))[key]) {
    //       return false
    //     }
    //   }
    // }

    // return true

    // Solution 2 (the best way in my opinion)
    const sortedStr = (str: string) => str.split('').sort().join('')
    return sortedStr(cleanStr(s1)) === sortedStr(cleanStr(s2))
  }

  console.assert(areAnagrams("listen", "silent") === true)
  console.assert(areAnagrams("listen", "silenta") === false)
  console.assert(areAnagrams("LiSten", "silENt") === true)
  console.assert(areAnagrams("lissten", "sileent") === false)
  console.assert(areAnagrams("abc", "cba") === true)
  console.assert(areAnagrams("a bc", "cb a") === true)
  console.assert(areAnagrams("abc", "cbd") === false)
}
exerciseExtra1()

// Done -----------------------------------------------------------------------------------------------------