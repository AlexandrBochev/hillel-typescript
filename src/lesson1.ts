// install node.js
// install VSCode
// check if all installed - check node version
// open terminal
// % node -v
// % node --version
// check npm version
// % npm -v
// check npx version
// % npx -v
// version is not important, but it should be installed

// create a folder for the project
// % mkdir ts-learning
// % cd ts-learning
// init npm project
// % npm init -y
// install typescript - install typescript compiler tsc
// % npm i typescript
// create tsconfig.json
// % npx tsc --init --rootdir src --outdir dist

let greetingText: string = "Hello world!"
console.log(greetingText)

const example1 = () => {
  let isDone: boolean = false
  let age:number = 42
  let firstName:string = "Alexandr"
  let nothing:null = null
  let notDefined: undefined = undefined
  let largeNumber: bigint = 100n
  let id: symbol = Symbol("id")
  let id2: symbol = Symbol("id")
}
example1()

const example2 = () => {
  // Array, Date, RegExp, Map, Set
  let a = []
  let pricesList: number[] = [1, 2, 3]
  let pricesList2: Array<number> = [1, 2, 3]
  let todayDate: Date = new Date()
  let regExp: RegExp = /ab+c/
  let set: Set<number> = new Set([1, 2, 3, 4, 5])

  class Queue {
    private data: any[] = []

    push(item : any) {
      this.data.push(item)
    }

    pop() {
      this.data.shift()
    }
  }

  const queue: Queue = new Queue()
  console.log(queue)
}
example2()

