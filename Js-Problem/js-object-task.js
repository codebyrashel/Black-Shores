/* 
Task-1
Access the golden rod color value in output.
*/

//Task 1 Answer:
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors['golden rod']);

/*

Task-2
For this object below add a property named passenger capacity with value 5
*/

//Answer:
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// 1. Dot Notation (Most common and simple)
car.passengerCapacity = 5;
console.log("1. Dot Notation:", car);

// 2. Bracket Notation (Useful for dynamic keys or special characters)
car["passengerCapacity"] = 5;
console.log("2. Bracket Notation:", car);

// 3. Object.assign() (Merges new property into the existing object)
Object.assign(car, { passengerCapacity: 5 });
console.log("3. Object.assign():", car);

// 4. Spread Operator (Creates a new object, original is untouched)
const newCar = { ...car, passengerCapacity: 5 };
console.log("4. Spread Operator (new object):", newCar);

// 5. Object.defineProperty() (For advanced control over property settings)
Object.defineProperty(car, "passengerCapacity", {
    value: 5,
    writable: true,      // allows value to be changed
    enumerable: true,    // makes it show up in loops
    configurable: true   // allows deletion or redefinition
});
console.log("5. Object.defineProperty():", car);

// 6. Reflect.set() (Modern alternative to setting properties)
Reflect.set(car, "passengerCapacity", 5);
console.log("6. Reflect.set():", car);

// 7. During Object Creation (if editing the original definition)
const carWithCapacity = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    passengerCapacity: 5
};
console.log("7. Added During Creation:", carWithCapacity);


/*

Task-3
Display the physics marks as output.
*/

//Answer:
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks);
console.log(student['physics']['marks']); // Experiment

/*

Task-4
Count the number of properties.
*/

// Input:
let studentTwo = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
//Output: 4

// Answer:

// 1. Using Object.keys() - Most common method
let count1 = Object.keys(studentTwo).length;
console.log("1. Using Object.keys():", count1); // Output: 4

// 2. Using Object.entries() - Works similarly
let count2 = Object.entries(studentTwo).length;
console.log("2. Using Object.entries():", count2); // Output: 4

// 3. Using Object.getOwnPropertyNames()
let count3 = Object.getOwnPropertyNames(studentTwo).length;
console.log("3. Using Object.getOwnPropertyNames():", count3); // Output: 4

// 4. Using for...in loop (Manual count)
let count4 = 0;
for (let key in studentTwo) {
    if (studentTwo.hasOwnProperty(key)) {
        count4++;
    }
}
console.log("4. Using for...in loop:", count4); // Output: 4

// 5. Using Reflect.ownKeys()
let count5 = Reflect.ownKeys(studentTwo).length;
console.log("5. Using Reflect.ownKeys():", count5); // Output: 4


/*
Task-5 (Hard)
Loop through an object and print the key-value pairs with their types
*/


// Input:

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

/* 
Output:

key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
*/

// Answer:

// 1. Using for...in loop (Simple and common)
for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(`key: ${key} | type: ${typeof myObject[key]}`);
    }
}

// 2. Using Object.keys() with forEach
Object.keys(myObject).forEach(key => {
    console.log(`key: ${key} | type: ${typeof myObject[key]}`);
});

// 3. Using Object.entries() with for...of
for (let [key, value] of Object.entries(myObject)) {
    console.log(`key: ${key} | type: ${typeof value}`);
}
