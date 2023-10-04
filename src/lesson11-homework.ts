// У репозиторії є набір файлів lesson11-homework

//    - src/lesson11-homework.ts - містить class Users який потрібно розширити і змінити так щоб тести проходили

//    - src/lesson11-homework-test.ts - містить юніт-тести, деякі з них задісейблані - їх потрібно виправити так, щоб вони правильно перевіряли необхідні умови, і дописати необхідний код у class User

//    - src/users-data.ts - це дані користувачів, які необхідно передати у конструктор класу User. Зверніть увагу - дані зафрізані, їх неможна змінювати (Object.freeze(data);)  Це важливо, наприклад коли потрібно апдейтнути дату народження - потрібно замапити список користувачів так щоб не міняти існуючий об'єкт data, а створити новий з правильною датою

//    - lesson11-homework.html - цей файл запускає юніт-тести

// Потрібно зробити наступне:
// реалізувати методи класу User

//  ✔  - updateUsersAge <- важливо тут потрібно створити список користувачів так щоб не міняти існуючий об'єкт data - він  зафрізаний, і при зміні властивостей буде падати помилка 

//  ✔  - getUsersFromUkraine

//  ✔  - getStatePostalCodes

//  ✔  - getMostCommonWoomanHairColor

//  ✔  - getMostCommonManBlodType


// поправити задісейблені юніт-тести методів

//  ✔  - updateUsersAge

//  ✔  - getUsersFromUkraine

//  ✔  - getStatePostalCodes


// написати юніт-тести до методів

//  ✔  - getMostCommonWoomanHairColor
//  ✔  - getMostCommonManBlodType

type TUser = typeof data.users[0]
type TypeUser = TUser & {
  hairColor: string
  bloodType: string
}


class Users {
  // ✔ TODO: Add type for list property, remove `any` type annotation
  constructor(public list: TypeUser[]) {}

  // ✔ TODO: Write method that returns array of users names in format "John, Smith" ("firstName, lastName")
  // ✔ TODO: Need to fix code to use this.list property data
  getUsersNames() {
    return this.list.map(user => `${user.firstName}, ${user.lastName}`)
  }

  // ✔ TODO: Write method that updates users age to current date (2023 year)
  // ✔ TODO: Need to fix code to use this.list property data
  // ✔ TODO: Need to not mutate this.list property, but return new array of users with updated age
  updateUsersAge() {
    const updatedList = this.list.map(user => {
      const birthDate = new Date(user.birthDate)
      const usersAges = new Date().getFullYear() - birthDate.getFullYear()

      return {
        ...user,
        age: usersAges
      }
    })

    this.list = updatedList
    return this.list
  }

  // ✔ TODO: Implement method that returns users from Ukraine (phone number +380)
  // ✔ TODO: Use this.list property data
  getUsersFromUkraine() {
    return this.list.filter(user => user.phone.startsWith("+380"))
  }

  // ✔ TODO: Implement method that returns postal codes grouped by state, using this.list user data
  getStatePostalCodes() {
    const stateInfo: Record<string, string[]> = {}

    const extractStateAndPostalCode = (address: any) => {
      const state = address.state;
      const postalCode = address.postalCode;

      if (stateInfo[state]) {
        if (!stateInfo[state].includes(postalCode)) {
          stateInfo[state].push(postalCode)
        }
      } else {
        stateInfo[state] = [postalCode]
      }
    }

    for (const user of this.list) {
      extractStateAndPostalCode(user.address)

      if (user.company && user.company.address) {
        extractStateAndPostalCode(user.company.address);
      }
    }

    const result = Object.entries(stateInfo).map(([name, postalCodes]) => ({
      name,
      postalCodes,
    }))

    return result
  }

  getAverageWomenAge() {
    const women = this.list.filter(user => user.gender === "female")
    if (women.length === 0) {
      return 0
    }
    const totalAge = women.reduce((sum, user) => sum + user.age, 0)
    return totalAge / women.length
  }

  getMostCommonWoomanHairColor() {
    const women = this.list.filter(user => user.gender === "female")
  
    if (women.length === 0) {
      return null
    }
  
    const hairColorCountMap = new Map<string, number>()
  
    women.forEach(user => {
      const hairColor = user.hairColor
      if (hairColorCountMap.has(hairColor)) {
        hairColorCountMap.set(hairColor, hairColorCountMap.get(hairColor)! + 1)
      } else {
        hairColorCountMap.set(hairColor, 1)
      }
    })
  
    let mostCommonHairColor = null
    let maxCount = 0
  
    for (const [hairColor, count] of hairColorCountMap) {
      if (count > maxCount) {
        maxCount = count
        mostCommonHairColor = hairColor
      }
    }
  
    return mostCommonHairColor;
  }

  getMostCommonManBlodType() {
    const men = this.list.filter(user => user.gender === "male")
  
    if (men.length === 0) {
      return null
    }
  
    const bloodTypeCountMap = new Map<string, number>()
  
    men.forEach(user => {
      const bloodType = user.bloodType;
      if (bloodTypeCountMap.has(bloodType)) {
        bloodTypeCountMap.set(bloodType, bloodTypeCountMap.get(bloodType)! + 1)
      } else {
        bloodTypeCountMap.set(bloodType, 1)
      }
    })
  
    let mostCommonBloodType = null
    let maxCount = 0
  
    for (const [bloodType, count] of bloodTypeCountMap) {
      if (count > maxCount) {
        maxCount = count
        mostCommonBloodType = bloodType
      }
    }
  
    return mostCommonBloodType
  }
}

