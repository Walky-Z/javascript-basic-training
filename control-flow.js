// If else
let hour = 10;

if (hour >= 6 && hour < 12)
  console.log('Good morning!');
else if (hour >= 12 && hour < 18)
  console.log('Good afternoon!');
else
console.log('Good evening!');

// Switch case

let role = 'guest';

switch (role) {
  case 'guest':
    console.log('Guest User');
    break;

  case 'moderator':
    console.log('Moderator User');
    break;

  default:
    console.log('Unknown User');
}


// For Loops

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

// While loops

// let i = 0;
// while(i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// do-while loops
// In do-while loops, we always execute the code one time before testing condition

// let i = 0;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

// for-in

const person = {
  name: 'Mosh',
  age: 30
};

for (let key in person)
  console.log(key, person[key])

// Dot Notation
// person.name
// Bracket Notation
// person['name']

const colors = ['red', 'green', 'blue'];

for (let index in colors)
  console.log(index, colors[index]);

// for-of

for (let color of colors)
  console.log(color);

// Break continue

console.log('\nBreak continue');

let i = 0;
while (i <= 10) {
  // if (i == 5) break;
  if (i % 2 == 0) {
    i++;
    continue; // Permet d'aller directiement au début du while loop
  }
  console.log(i);
  i++;
}

function maxNumber(a, b) {
  // if (a > b) return a;
  // return b;
  return (a > b) ? a : b;
}

// console.log(maxNumber(5, 1))

function isLandscape (width, height) {
  return (width > height);
}

// console.log(isLandscape(150, 190))

function fizzBuzz(input) {

  if (typeof input !== 'number') return NaN;
  if (input % 3  === 0 && input % 5  === 0) return 'FizzBuzz';
  if (input % 3  === 0) return 'Fizz';
  if (input % 5  === 0) return 'Buzz';
  return input;

}
// let output = fizzBuzz(false);
// console.log(output)

// Math.floor(1.3) => 1
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const maxPoint = 12;

  let pointsCut = 0;
  if (speed > speedLimit) {
    let addSpeed = speed - speedLimit;
    pointsCut = Math.floor(addSpeed / kmPerPoint)
    if (pointsCut >= maxPoint) return 'License suspended'
  }
  return pointsCut + ' point(s)'
}

// let output = checkSpeed(75);
// console.log(output)

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0) ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

// showNumbers(10)

const array = [undefined, 1, 3, '', 18, null]

function countTruthy(array) {
  let counter = 0;
  for (let element of array)
    if (element) counter++;
  return counter;
}

// console.log(countTruthy(array))
const movie = {
  title: 'a',
  releaseYear: 2018,
  ratin: 4.5,
  director: 'b'
}

function showProperties(obj) {
  for (let e in obj) {
    if(typeof obj[e] === 'string')
      console.log(e, obj[e]);
  }
}

// showProperties(movie);

function sum(limit) {
  let counter = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0)
    counter+=i;
  }

  return counter;
}

// console.log(sum(10))

const marks = [80, 50, 100];

// console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks)
  switch (true) {
    case average <60:
      return 'F';

    case average <70:
      return 'D';

    case average <80:
      return 'C';

    case average <90:
      return 'B';

    default:
      return 'A';
  }
}

function calculateAverage(array) {
  let sum = 0;
  for (let mark of array) {
    sum += mark;
  }
  return sum / array.length;
}

function showStars(rows) {
  let printer = '';

  for (let i = 1; i <= rows; i++) {
    printer += '*'
    console.log(printer)
  }
}

// showStars(10)

console.log('////SHOW PRIMES////');

showPrimes(20);

function showPrimes(limit) {
  for (let i = 2; i <= limit; i++)
    if (testPrime(i)) console.log(i)
}

function testPrime(number) {
  for (let i = 2; i < number; i++)
    if (number % i === 0) return false;

  return true;
}
