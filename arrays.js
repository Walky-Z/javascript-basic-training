
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

courses.find()
