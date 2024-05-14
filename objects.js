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
// const address1 = createAddress("4 Rue", "Paris", "75000");

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
let address1 = new Address("4 Rue", "Paris", "75000");
let address2 = new Address("4 Rue", "Pa0ris", "75900");
let address3 = address1;
let address4 = new Address("4 Rue", "Paris", "75000");
address4.country = 'France';

console.log(address1);
console.log(address2);

// Exercice 3

function areSame(address1, address2) {
  return address1 === address2;
}

function areEqual(address1, address2) {
  const keys1 = Object.keys(address1);
  const keys2 = Object.keys(address2);

  if (keys1.length !== keys2.length)
    return false;

  for (let key of keys1)
    if (address1[key] !== address2[key])
      return false;

  return true;
}

console.log(areEqual(address1, address2));

// Exercice 4

let post = {
  title: 'review',
  body: 'This is good',
  author: 'Me',
  views: 42,
  comments: [
    {auhtor: 'Me', body: 'It is'},
    {auhtor: 'New user', body: 'Well'}
  ],
  isLive: true
}

console.log(post)

// Exerice 5
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let newpost = new Post('a', 'b', 'c');
console.log(newpost);

// Exercice 6

function PriceRange(label, description, minPerPerson, maxPerPerson) {
  this.label = label,
  this.description = description,
  this.minPerPerson = minPerPerson,
  this.maxPerPerson = maxPerPerson
}

const cheap = new PriceRange('$', 'Cheap', 0, 10);
const average = new PriceRange('$$', 'Average', 11, 20);
const expensive = new PriceRange('$$$', 'Expensive', 21, 50);

let pricearray = [cheap, average, expensive];
console.log(pricearray);
