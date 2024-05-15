
// 1 - Adding Elements

const numbers = [3, 4, 1];

// End
numbers.push(5, 6);

// Begenning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);

// 2 - Finding Elements (Primitives)

console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1);
// Equivalent
console.log(numbers.includes(1));

// Search begin with a specific index
console.log(numbers.indexOf(1, 2)); // => 6

// 3 - Finding Elements (Reference Types)

const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
];

// return the element
const course = courses.find(function(course) {
  return course.name === 'a';
});

// return the index
const course2 = courses.findIndex(function(course) {
  return course.name === 'a';
});

console.log(course, course2);

// 4 - Arrow Functions
const course3 = courses.find(course => course.name === 'a');
console.log(course3);

// 5 - Removing Elements

const nombres = [1, 2, 3 ,4];

// End
//const last = nombres.pop(); // remove and return the last element

// Begenning
//const first = nombres.shift(); // remove and return the first element

// Middle
nombres.splice(2, 1); // remove the specify element indexed
// The second number indicate how many element to be removed
console.log(nombres);

// 5 - Emptying an Array
let nb = [1, 2, 3 ,4];

// Solution 1 - reassign (not erase the memory)
// nb = [];

// Solution 2 - Truncate (recommended)
//nb.length = 0;

// Solution 3 - Splice method
// nb.splice(0, nb.length);

// Solution 4 - Pop method (not recommended for big arrays)
// while(nb.length > O)
//   nb.pop();
