
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

// Testing all elements

// Check if all

const exemple2 = [-2, 3, 1];

const allPositive = exemple2.every(function(value) {
  return value >= 0;
});

// Check if any
const atLeastOnePositive = exemple2.some(function(value) {
  return value >= 0;
});

console.log(allPositive);
console.log(atLeastOnePositive);

// 12 - Filtering an Array
const filtered = exemple2.filter(n => n >= 0);

console.log(filtered);

// 13 - Mapping an Array
const exemple3 = [1, -1, -2, 3, 1];
const filtered2 = exemple3.filter(n => n >= 0);
const items = filtered2.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>'

// console.log(html);
const items2 = filtered2.map(n => {
  return { value: n };
});

const items3 = filtered2.map(n => ({ value: n }));

// Chaining methods
const items4 = exemple3
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);


console.log(items4);

// 14 - Reducing an Array

const nbs = [1, -1, 2, 3];

let sum = 0;

for (let n of nbs)
  sum += n;

console.log(sum);

// Reduce Method (looping method)

const sum2 = nbs.reduce(
  (accumulator, currentValue) => accumulator + currentValue
, 0); //  0 here is the initial value (optionnal)

console.log(sum2);

// Exercice 1 - Array from Range

const createnb = arrayFromRange(-10, -4);

function arrayFromRange(min, max) {
  let numbers = [];
  for (let i = min; i <= max; i++)
    numbers.push(i);
  return numbers;
}

console.log(createnb);

// Exercice 2 = Includes

const nb2 = [1, 2, 3, 4];

function includes(array, searchElement) {
  return array.indexOf(searchElement) !== -1
}

console.log(nb2.includes(1));

// Exercice 3 - Except

const nb3 = [1, 2, 3, 4, 1, 1, 2, 16, 2, 0, 1];

const output = except(nb3, [1, 2]);

console.log(output);

function except(array, excluded) {
  excluded.forEach(function(number) {
    while(array.indexOf(number) !== -1)
      array.splice(array.indexOf(number), 1);
  })
  return array;
}

// Exercice 4

const nb4 = [1, 2, 3, 4]

const out4 = move(nb4, 0, 2);

console.log(out4);

function move(array, index, offset) {


  const position = index + offset;
  if(position >= array.length || position < 0) {
    console.error("Invalid offset");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0]; // [0] to get the element spliced
  output.splice(position, 0, element);
  return output;
}

// Exercice 5

const nb5 = [1, 1, 2, 3, 4, 1]

const count = countOccurrences(nb5, 1);

console.log(count);

function countOccurrences(array, searchElement) {
  // Version 1
  // let nbocc = 0
  // array.forEach(function (number) {
  //   if(number === searchElement)
  //     nbocc += 1;
  // })

  return array.reduce((accumulator, currentValue) => {
    const nbocc = (currentValue === searchElement) ? 1 : 0;
    console.log(accumulator, currentValue, searchElement);
    return accumulator + nbocc;
  }, 0);
}

// Exercice 6

const nb6 = [1, 2, 3, 4, 81, 16, 23, 0, 2];

const max = getMax(nb6);

console.log("max is :", max);

function getMax(array) {
  if (array.length === 0) return undefined;
  // Version 1
  // let max = array[0];
  // array.forEach(number => {
  //   if (number > max)
  //     max = number;
  // })
  // return max;
  return array.reduce((maxi, currentValue) => (maxi > currentValue) ? maxi : currentValue);
}

// Exercice 7

const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
]

const titles = movies
  .filter(movie => movie.year === 2018 && movie.rating > 4)
  .sort((a, b) => b.rating - a.rating)
  .map(m => m.title);

console.log(titles);
