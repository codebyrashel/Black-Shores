// const obj = {};

// obj[course2] = { courseId: "level2" };
// obj[course1] = { courseId: "level1" };

// console.log(obj);

const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

const courses = [
  [course1, "Level1"],
  [course2, "Level2"],
];

const map = new Map(courses);

// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });

// map.forEach((value, key) => (key.name = "Shohoz Shorol Simple " + key.name));

// for (let key of map.keys()) {
//   key.name = "Shohoz Shorol Simple " + key.name;
// }

console.log(map);






// map and forEach recap

const names = ["Rashel", "Tomjid", "Anamul"];

// Using forEach to print
names.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

// Using map to transform
const greetings = names.map((name) => `Hello, ${name}!`);

console.log(greetings);


// forEach recap

const names = ["Rashel", "Tomjid", "Anamul"];

names.forEach((name, index, arr) => {
  console.log(index, name, arr);
});






const courses = [
  { name: "JavaScript Basics", enrolled: 30 },
  { name: "React Fundamentals", enrolled: 45 },
  { name: "Node.js Essentials", enrolled: 20 },
];


// For each course in courses, print “course name → course enrolled students”.


courses.forEach((courses) => {
    console.log(courses.name + ` and ` + courses.enrolled + ` student`);
});







const courses = [
  { name: "JavaScript Basics", enrolled: 30 },
  { name: "React Fundamentals", enrolled: 45 },
  { name: "Node.js Essentials", enrolled: 20 },
];

const courseNames = courses.map((course) => {
  return course.name;
});

console.log(courseNames);


// ["JavaScript Basics", "React Fundamentals", "Node.js Essentials"]



const courses = [
  { name: "JavaScript Basics", enrolled: 30 },
  { name: "React Fundamentals", enrolled: 45 },
  { name: "Node.js Essentials", enrolled: 20 },
];

const updatedCourses = courses.map((course) => {
  return {
    name: course.name,
    enrolled: course.enrolled,
    status: course.enrolled >= 30 ? "popular" : "normal",
  };
});

console.log(updatedCourses);


const NewUpdateCourse = courses.map((courses) => {
    return {
        names: courses.enrolled,
        enrolled: courses.enrolled,
        status: courses.enrolled >= 30 ? "Sold" : "Not sold"
    }
})

console.log(NewUpdateCourse);




const users = [
  { name: "Rashel", points: 90 },
  { name: "Tomjid", points: 75 },
  { name: "Anamul", points: 82 },
];


users.forEach((users) => {
    console.log(`${users.name} + ${users.points}`);
});


const NewArr = users.map((users) => {
    return {
        name: users.name,
        points: users.points,
        rank: users.points >= 85 ? "Gold" : "Silver"

    }
});

console.log(NewArr);







// Problem 1: Course Info Formatter

const courses = [
  { title: "HTML Basics", students: 25 },
  { title: "CSS Mastery", students: 40 },
  { title: "JavaScript Advanced", students: 55 },
];


// Tasks:

// Use forEach() to print each course like this:

// HTML Basics has 25 students.
// CSS Mastery has 40 students.
// JavaScript Advanced has 55 students.

// Use map() to create a new array of course titles only.
// Example output:

// ["HTML Basics", "CSS Mastery", "JavaScript Advanced"]

// Use map() to create a new array of objects where each object includes an extra property:

// {
//   title: "HTML Basics",
//   students: 25,
//   category: "popular" // if students >= 40 else "regular"
// }

// Answer

courses.forEach((courses) => {
    console.log(`${courses.title} has ${courses.students} students`);
});


const courseTitleOnly = courses.map((courses) => {
    return courses.title
});

console.log(courseTitleOnly);


const extraProperty = courses.map((courses) => {
    return {
        title: courses.title,
        students: courses.students,
        category: courses.students >= 40 ? "popular" : "regular" // if students >= 40 else "regular"
    };
});

console.log(extraProperty);






// Problem Set 2 — “Library Books”

const books = [
  { name: "Atomic Habits", pages: 300 },
  { name: "Deep Work", pages: 270 },
  { name: "Clean Code", pages: 420 },
];

// Tasks:

// Use forEach() to print each book in this format:
// "Book: Atomic Habits has 300 pages."

// Answer:

books.forEach((books) => {
    console.log(`Book: ${books.name} has ${books.pages} pages`);
});



// Use map() to create an array of page counts.
// Example output: [300, 270, 420]

// Answer:

const arrPageCount = books.map((books) =>{
    return books.pages;
});

console.log(arrPageCount);



// Use map() to create a new array where you add isLong property:
// true if pages > 300, else false.


// Answer:

const longProperty = books.map((books) =>{
    return {
        name: books.name,
        pages: books.pages,
        islong: books.pages >= 300 ? "true" : "false"
    };
});

console.log(longProperty);





// Problem Set 4 — “Store Inventory”


const items = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 50 },
];

// Tasks:

// Use forEach() to print:
// "Laptop costs $800"

// Answer:

items.forEach((items) => {
    console.log(`${items.name} cost ${items.price}`);
});


// Use map() to return an array of prices multiplied by 1.1 (10% tax added).
// Example: [880, 22, 55]

//Answer:

const multiplied = items.map((items) =>{
    return Math.floor((items.price * 1.1));
});

console.log(multiplied);


// Use map() to create a new array of objects adding a category:

// "expensive" if price ≥ 100

// "cheap" otherwise


// Answer:

const newMap = items.map((items) => {
    return {
        name: items.name,
        price: items.price,
        category: items.price >= 100 ? "expensive" : "cheap"
    };
});

console.log(newMap);




// Bonus Problem — combine logic thinking

// You have this:

const languages = ["JavaScript", "Python", "C++", "Java", "Go"];

// Tasks:

// Use forEach() to print the index + language name (e.g., "1: JavaScript").

languages.forEach((name, index) => { 
    console.log(index, name);
});



// Use map() to return a new array of string lengths (how many characters each language has).
// Example: [10, 6, 3, 4, 2]

//Answer:

// const characterCount = languages.map((languages) => {

//     return languages.length
    
// });

const characterCount = languages.map((languages) => languages.length );  // one liner solution


console.log(characterCount);



// Use map() to create an array of objects like this:

// { name: "JavaScript", length: 10 }

// Answer

const arrObj = languages.map((lang) => {
  return {
    name: lang,
    length: lang.length
  };
});

console.log(arrObj);

const shorterVersion = languages.map((languages) => ({name: languages, length: languages.length})); // one liner version

console.log(shorterVersion);