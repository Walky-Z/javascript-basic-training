// This is my first Javascript code!
console.log('Hello World')

// Variable declatation
let firstName = 'Mosh';
let lastName = 'Hanedeni';
console.log(firstName);

// Values declaration : Primitives vs Reference Types
const interestRate = 0.3;
// interestRate = 1; // Can't do it because it's a constant
console.log(interestRate);

let name = 'Mike'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstTest = undefined;
let selectedColor = null; // When we want to clear the value of a variable

// Static vs Dynamic
// We can use 'typeof' to check the type of a variable
// Static : Variables can't change

// Object
let person = {
  name: 'Mosh',
  age: 30
};
// Dot Notation
person.name = "John";

// Bracket Notation
person['name'] = 'Mary';
console.log(person.name)


// arays

let selectedColors = ['red', 'blue'];
console.log(selectedColors[0]);

// In JavaSCript we can store multiple types in a array


// Functions

function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
} // No needs of ';'

greet('Mike', 'Test');
greet('Mary');

function square(number) {
  return number * number;
}

console.log(square(2));
