"use strict";
// ✔ Use double assertion
// ✔ TODO:Create two types: TPoint2D and TPoint3D
// ✔ TODO: add definition for x and y props for coordinates
// ✔ TODO: add definition for x, y and z props for coordinates
// ✔ TODO: fix the error by adding double assertion
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise35 = () => {
    let point2D = { x: 1, y: 2 };
    let point3D = { x: 1, y: 2, z: 3 };
    point3D = point2D;
};
exercise35();
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
    };
    function toString() {
        this.name = `${data.firstName} ${data.lastName}`;
        return `${this.name}, ${this.age}, ${this.role}`;
    }
    data.toString = toString;
    console.log(data.toString());
    console.log(data + "");
};
exercise36();
// Done -----------------------------------------------------------------------------------------------------
// ✔ Use generic constraints
// TODO: ✔ add generic constraints to enforce type checking, add return type annotation
// TODO: ✔ implement the method sayHello that returns a greeting string
// TODO: ✔ in the function generate variable fullName = `${obj.firstName} ${obj.lastName}`
// TODO: ✔ use fullName variable to generate a greeting string, for example: "Hello Joe Smith"
// TODO: ✔ make sure the obj is not modified, and new object is returned
// TODO: ✔ use firstName lastName props to generate a greeting string, for example: "Hello Joe Smith"
const exercise37 = () => {
    function addGreeting(obj) {
        const fullName = `${obj.firstName} ${obj.lastName}`;
        const sayHello = () => `Hello ${fullName}`;
        return { ...obj, sayHello };
    }
    const person = addGreeting({
        firstName: "Joe",
        lastName: "Smith",
        age: 30,
        email: "john@sample.com",
    });
    // ✔ TODO: uncomment the following line and fix the error
    console.log(person.sayHello());
};
exercise37();
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
    const count = (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        let callCount = 0;
        descriptor.value = (...args) => {
            callCount++;
            console.log(`Function '${propertyKey}' has been called ${callCount} times.`);
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
    const time = (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = (...args) => {
            const startTime = performance.now();
            const result = originalMethod.apply(this, args);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            console.log(`Function '${propertyKey}' took ${executionTime} milliseconds to execute.`);
            return result;
        };
        return descriptor;
    };
    class Calculation {
        // "experimentalDecorators": true
        // @count
        // @time
        add(a, b) {
            return a + b;
        }
    }
    const calculator = new Calculation();
    console.log(calculator.add(1, 1));
    console.log(calculator.add(1, 2));
    console.log(calculator.add(2, 3));
    console.log(calculator.add(3, 5));
};
exercise38();
// Done -----------------------------------------------------------------------------------------------------
// ✔ Use 2023 decorators (Stage 3 decorator)
// ✔ TODO: implement decorator to print call count of the function
// ✔ TODO: implement decorator to print execution time of the function
// ✔ TODO: add both decorators to the following method
// ✔ TODO: create instance of Calculation class and call add method
function exercise39() {
    const count = (originalMethod, context) => {
        let callCount = 0;
        function printCallCount(...args) {
            callCount++;
            console.log(`Function '${context.name}' has been called ${callCount} times.`);
            const result = originalMethod.apply(this, args);
            return result;
        }
        return printCallCount;
    };
    const time = (originalMethod, context) => {
        function printCallTime(...args) {
            const startTime = performance.now();
            const result = originalMethod.apply(this, args);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            console.log(`Function '${context.name}' took ${executionTime} milliseconds to execute.`);
            return result;
        }
        return printCallTime;
    };
    let Calculation = (() => {
        var _a;
        let _instanceExtraInitializers = [];
        let _add_decorators;
        return _a = class Calculation {
                add(a, b) {
                    return a + b;
                }
                constructor() {
                    __runInitializers(this, _instanceExtraInitializers);
                }
            },
            (() => {
                const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
                _add_decorators = [count, time];
                __esDecorate(_a, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: obj => "add" in obj, get: obj => obj.add }, metadata: _metadata }, null, _instanceExtraInitializers);
                if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            })(),
            _a;
    })();
    const calculator = new Calculation();
    console.log(calculator.add(1, 1));
    console.log(calculator.add(1, 2));
    console.log(calculator.add(2, 3));
    console.log(calculator.add(3, 5));
}
exercise39();
// Done -----------------------------------------------------------------------------------------------------
