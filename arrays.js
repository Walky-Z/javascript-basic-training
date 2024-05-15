
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

// 6 - Combining and Slicing Arrays

const firstarray = [1, 2, 3];
const secondarray = [4, 5, 6];

// const combined = firstarray.concat(secondarray);

// const slice = combined.slice(2, 4);

const firstobj = [{id: 1}]
// if element are primitive (number), they are copied by value
// if they are reference (object) they are copied by reference

// 7 - Spread Operator

const combined = [...firstarray, 'a', ...secondarray, 'b'];
console.log(combined); // [1, 2, 3, 'a', 4 ,5 , 6, 'b']

const copy =[...combined];
console.log(copy);

// 8 - Iterating an Array

const nombre = [1, 2, 3];

// Solution 1
for (let number of nombre)
  console.log(number);
// Solution 2
nombre.forEach(function (number) {
  console.log(number);
})
// solution 3
nombre.forEach(number => console.log(number));

nombre.forEach((number, index) => console.log(index, number));

// 9 - Joining Arrays

const joined = nombre.join(',');
console.log(joined); // 1, 2, 3

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts); // ["This", "is", "my", "first", "message"]

const combined2 = parts.join('_');
console.log(combined2);

// 10 - Sorting Arrays

// For numbers
const exemple = [2, 3, 1];
exemple.sort();
console.log(exemple)

// For objects
const cours = [
  {id: 1, name: 'Node.js'},
  {id: 2, name: 'JavaScript'}
];

cours.sort(function(a, b) {
  // a < b => -1
  // a > b => 1
  // a == b => 0
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;

})

console.log(cours);

// 11 - Testing the Elements of an Array
