// Define a object

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log('draw');
  }
};

circle.draw(); // Method

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Factory Functions

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

// Constructor Functions
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

// const circle2 = new Circle(1);
// console.log(circle2);

// Dynamic Nature of Objects
const circ = {
  radius: 1
};

circ.color = 'yellow';
circ.draw = function() {}

delete circ.color;
delete circ.drax;

console.log(circ)

// Constructor Property

let x = {};
new String(); // '', "", ```
new Boolean(); // true, false
new Number(); // 1, 2, 3

// Functions are Objects

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);
const another = new Circle(1);

// Value vs References Types

let a = { value: 10};
let b = a;

a.value = 20;

// Primitives are copied by their value
// Object are copied by their reference

// Enumerating Properties of an Object

const cercle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

for (let key in cercle)
  console.log(key, cercle[key]);

// cercle is an Object and it's not iterable, so we use this :
for (let key of Object.keys(cercle))
  console.log(key);

for (let entry of Object.entries(cercle))
  console.log(entry);

if ('radius' in circle) console.log('yes');

// Cloning Object

// const anothers = {};
// for (let key in circle)
//   anothers[key] = circle[key];

// const anothers = Object.assign({
//   color: 'yellow'
// }, circle);

const anothers = { ...circle };

console.log(anothers);

// Math Object

// Exemple

console.log(Math.random())

// Math.round(), Math.max() ..

// String

// You can call method on string
// message.toUpperCase()

// Template Litterals

const name = 'John';

const anotherss =
`Hi ${name} ${2 + 3},

Thank you for joining my mailing list.

Regards,
Mosh`;

// Date (constructor function)

const now = new Date(); // Actual Date
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

// now.setFullYear(2017);
// now.toDateString(); // Sun May 14 2017
// now.toTimeString(); // 10:00:34 GMT+0200 (heure d’été d’Europe centrale)
let now2 = now.toISOString();

console.log(now2);

// Exercice 1

const address = {
  street: '4 Rue Michel',
  city: 'Bordeaux',
  zipCode: '33000',
};

function showAddress(address){
  for (let key in address)
    console.log(key, address[key]);
}
showAddress(address);

// Exercice 2

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}
const address1 = createAddress("4 Rue", "Paris", "75000");
console.log(address1);

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address2 = new Address("5 Rue", "Pariss", "75900");
console.log(address2);

// Exercice 3
