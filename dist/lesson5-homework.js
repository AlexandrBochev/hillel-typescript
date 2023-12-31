"use strict";
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
    // Classes
    class Human {
        constructor(name, age, driverLicenseId) {
            this.name = name;
            this.age = age;
            this.driverLicenseId = driverLicenseId;
        }
    }
    class Animal {
        constructor(name, age, species) {
            this.name = name;
            this.age = age;
            this.species = species;
        }
    }
    // Passengers
    const human = {
        name: "Frank",
        age: 23,
        driverLicenseId: "DL12345"
    };
    const animal = {
        name: "Rexy",
        age: 6.8e7,
        species: "Tyrannosaurus"
    };
    const human2 = new Human("Chester", 32, "DL54321");
    const animal2 = new Animal("Sharky", 2.1e7, "Megalodon");
    // Print
    const printPassengerInfo = (passenger) => {
        console.log(`Name: ${passenger.name}`);
        console.log(`Age: ${passenger.age}`);
        if (passenger === human || // Using human check to narrow the type of the passenger
            passenger instanceof Human || // Using instanceof operator to narrow the type of the passenger
            'driverLicenseId' in passenger // Using property check to narrow the type of the passenger
        ) {
            console.log(`Driver license: ${passenger.driverLicenseId}`);
        }
        if (passenger === animal || // Using animal check to narrow the type of the passenger
            passenger instanceof Animal || // Using instanceof operator to narrow the type of the passenger
            'species' in passenger // Using property check to narrow the type of the passenger
        ) {
            console.log(`Species: ${passenger.species}`);
        }
    };
    printPassengerInfo(human);
    printPassengerInfo(animal);
    printPassengerInfo(human2);
    printPassengerInfo(animal2);
};
exercise23();
//Done -----------------------------------------------------------------------------------------------------
// ✔ use discriminated union to narrow the type of the object
// ✔ TODO: add type property to TBlogMessage, TBlogImage, TBlogComment with literal type of 'message', 'image', 'comment'
// ✔ TODO: use discriminated union to narrow the type of the object
// ✔ TODO: add missing type property to the objects
// ✔ TODO: compile and run the code
const exercise24 = () => {
    const printBlogPost = (post) => {
        if (post.type === "comment")
            console.log("comment: ", post.text);
        if (post.type === "image")
            console.log("image: ", post.url);
        if (post.type === "message")
            console.log("message: ", post.text);
    };
    printBlogPost({ type: "message", text: "abc" });
    printBlogPost({ type: "image", url: "abc" });
    printBlogPost({ type: "comment", text: "abc", messageId: "123" });
};
exercise24();
//Done -----------------------------------------------------------------------------------------------------
// ✔ use non-null assertion operator
// ✔ TODO: add check for null and undefined - throw error if person.email is null or undefined
// ✔ TODO: uncomment code below and check that it compiles,  use non-null assertion operator to fix compile time error
// ✔ Add inline check for null and undefined - throw error if person.email is null or undefined
// ✔ TODO: uncomment code below and check that it compiles
// ✔ TODO: print the result to console
// ✔ TODO: compile and run the code
const exercise25 = () => {
    const sendEmail = (email) => {
        console.log("sending email to", email);
    };
    const ensureContactable = (person) => {
        if (person.email == null) {
            throw new Error("Email is null or undefined");
        }
    };
    const contact = (person) => {
        ensureContactable(person);
        sendEmail(person.email);
    };
    const contact2 = (person) => {
        if (person.email == null) {
            throw new Error("Email is null or undefined");
        }
        sendEmail(person.email);
    };
    const person1 = {
        name: "John",
        email: "asdf@asdf.com",
    };
    const person2 = {
        name: "John",
        email: null,
    };
    contact(person1);
    contact2(person1);
    // contact(person2) // Error
};
exercise25();
//Done -----------------------------------------------------------------------------------------------------
// ✔ Create an assertion function
const exercise26 = () => {
    // ✔ TODO: add your code to make the following function assert correctly
    function asserWidget(value) {
        if (typeof value !== "object" || value === null || value === undefined) {
            throw new TypeError("value must be an object");
        }
    }
    // ✔ TODO: add your code to make the following function assert correctly
    function asserGadget(value) {
        if (typeof value !== "object" || value === null || value === undefined) {
            throw new TypeError("value must be an object");
        }
    }
    const thing1 = { name: "widget" };
    const thing2 = { os: "ubuntu" };
    // ✔ TODO: uncomment the following lines after assertion is added
    asserWidget(thing1);
    thing1.name = 'weather widget';
    console.log(thing1.name);
    // ✔ TODO: uncomment the following lines after assertion is added
    asserGadget(thing2);
    thing2.os = 'android';
    console.log(thing2.os);
};
exercise26();
//Done -----------------------------------------------------------------------------------------------------
// ✔ use interface and compare with type alias
// ✔ TODO: add TPersonWithPhone type definition - extend TPerson with phone property
// ✔ TODO: add IPersonWithPhone interface definition - extend IPerson with phone property
// ✔ TODO: compile and run the code
const exercise27 = () => {
    // ✔ TODO: uncomment the code below and check that it compiles
    const person = {
        name: 'John',
        age: 18,
        phone: '123-456-7890',
    };
    console.log('person data: ', person.name, person.age, person.phone);
    // ✔ TODO: uncomment the code below and check that it compiles
    const person2 = {
        name: 'John',
        age: 18,
        phone: '123-456-7890',
    };
    console.log('person data: ', person2.name, person2.age, person2.phone);
};
exercise27();
//Done -----------------------------------------------------------------------------------------------------
// ✔ use implements keyword to implement interface
// ✔ TODO: declare interface IWidget with name property
// ✔ TODO: declare interface IWidgetWithSize which extends IWidget and adds width, height and color properties
// ✔ TODO: add resize method to IWidgetWithSize interface
// ✔ TOOD: declare interface IDesktopWidget which extends IWidgetWithSize and adds os property
// ✔ TODO: add open method to IDesktopWidget interface
// ✔ TODO: declare interface IMobileWidget which extends IWidgetWithSize and adds space property
// ✔ TODO: add install method to IMobileWidget interface
// ✔ TODO: declare class Widget which implements IWidget
// ✔ TODO: declare class WidgetWithSize which implements IWidgetWithSize
// ✔ TODO: declare class DesktopWidget which implements IDesktopWidget
// ✔ TODO: declare class MobileWidget which implements IMobileWidget
// ✔ TODO: declare class DesktopAndMobileWidget which implements IDesktopWidget and IMobileWidget
// ✔ TODO: declare interface IWidgetPrintable wich has toString method
// ✔ TODO: add IWidgetPrintable to each of the classes above
// ✔ implementation returns class name and all properties
// ✔ TODO: create instance of each class
// ✔ TODO: print each instance to console
// ✔ TODO: compile and run the code
const exercise28 = () => {
    class Widget {
        constructor(name) {
            this.name = name;
        }
        toString() {
            return `Widget { name: ${this.name} }`;
        }
    }
    class WidgetWithSize {
        constructor(name, width, height, color) {
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
        }
        resize(width, height) {
            this.width = width;
            this.height = height;
        }
        toString() {
            return `WidgetWithSize {
        name: ${this.name},
        width: ${this.width},
        height: ${this.height},
        color: ${this.color}
      }`;
        }
    }
    class DesktopWidget {
        constructor(name, width, height, color, os) {
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
            this.os = os;
        }
        resize(width, height) {
            this.width = width;
            this.height = height;
        }
        open() {
            console.log(`Opening desktop widget: ${this.name}`);
        }
        toString() {
            return `DesktopWidget {
        name: ${this.name},
        width: ${this.width},
        height: ${this.height},
        color: ${this.color},
        os: ${this.os}
      }`;
        }
    }
    class MobileWidget {
        constructor(name, width, height, color, space) {
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
            this.space = space;
        }
        resize(width, height) {
            this.width = width;
            this.height = height;
        }
        install() {
            console.log(`Installing mobile widget: ${this.name}`);
        }
        toString() {
            return `MobileWidget {
        name: ${this.name},
        width: ${this.width},
        height: ${this.height},
        color: ${this.color},
        space: ${this.space}
      }`;
        }
    }
    class DesktopAndMobileWidget {
        constructor(name, width, height, color, os, space) {
            this.name = name;
            this.width = width;
            this.height = height;
            this.color = color;
            this.os = os;
            this.space = space;
        }
        resize(width, height) {
            this.width = width;
            this.height = height;
        }
        open() {
            console.log(`Opening widget: ${this.name}`);
        }
        install() {
            console.log(`Installing widget: ${this.name}`);
        }
        toString() {
            return `DesktopAndMobileWidget {
        name: ${this.name},
        width: ${this.width},
        height: ${this.height},
        color: ${this.color},
        os: ${this.os},
        space: ${this.space}
      }`;
        }
    }
    const widget = new Widget("Widget");
    const widgetWithSize = new WidgetWithSize("WidgetWithSize", 200, 300, "red");
    const desktopWidget = new DesktopWidget("DesktopWidget", 300, 200, "blue", "Windows");
    const mobileWidget = new MobileWidget("MobileWidget", 100, 50, "green", 100);
    const desktopAndMobileWidget = new DesktopAndMobileWidget("DesktopAndMobileWidget", 200, 100, "purple", "IOS", 80);
    desktopAndMobileWidget.resize(300, 200);
    desktopWidget.open();
    mobileWidget.install();
    console.log(widget.toString());
    console.log(widgetWithSize.toString());
    console.log(desktopWidget.toString());
    console.log(mobileWidget.toString());
    console.log(desktopAndMobileWidget.toString());
};
exercise28();
//Done -----------------------------------------------------------------------------------------------------
