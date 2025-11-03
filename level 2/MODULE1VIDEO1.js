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