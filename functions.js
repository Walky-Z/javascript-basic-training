// You can call the function walk before its declaration
// Because Javascript engine do Hoisting (moving all declaration function to the top)
// Function Declaration
function walk() {
  console.log('walk');
}
// Cannot call the function walk before the declaration
// Anonymous Function Expression
let run = function() {
  console.log('run')
}

let move = run;
run();
move();

// Arguments

function sum() {
  let total = 0;
  for (let value of arguments)
    total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// The Rest Operator
function sums(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sums(1, 2, 3, 4, 5));

function som(discount, ...prices) {
  const total =  prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(som(0.1, 1, 2, 3, 4, 5));

// Default Parameters
function interest(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;

  return principal * rate / 100 * years;
}

console.log(interest(10000));

function interest2(principal, rate=3.5, years=5) {
  return principal * rate / 100 * years;
}

console.log(interest2(10000));

// Getters and Setters / Try and Catch

const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  fullName: function() {
    return `${person.firstName} ${person.lastName}`
  },
  get fullNames() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullNames(value) {
    if (typeof value !== 'string')
      throw new Error('Value is not a string.')

    const parts = value.split(' ');
    if (parts.length !== 2)
      throw new Error('Enter a first and last name')

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// console.log(person.fullName());

// getters => access properties
// setters => change (mutate) them
try {
  person.fullNames = 'My Name';
}
catch (e) {
  alert(e);
}

console.log(person)

// Local vs Global Scope
const color = 'red'; // global scope

function start() {
  const message = 'hi'; // local scope
  const color = 'blue';
  console.log(color); // 'blue'
}

function stop() {
  const message = 'bye'; // local scope
  console.log(color); // 'red'
}

start();

// Let vs Var

function start2() {
  for (var i =0; i<5; i++)
    console.log(i);

  console.log(i);

}

// let is limited to the loop
// var is limited to the function

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped
start2();

var colors = 'red';
let age = 30;

// Global function
function sayHi() {
  console.log('hi');
}

// THey can be call in the window object, for example window.sayHi() or window.colors

// The Thus Keyword

// method -> obj
// function -> global (window, global)

const video = {
  titel: 'a',
  play() {
    console.log(this);
  }
};

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video('b'); // this reference to a new empty object

const video2 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }, this);
  }
};

video2.showTags();

// Changing This

const video3 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self = this;
    this.tags.forEach(function(tag) {
      console.log(self.title, tag);
    }, this);
  }
};

video3.showTags();

function playVideo() {
  console.log(this);
}

playVideo.call({ name: 'Mosh'}, 1, 2);
playVideo.apply({ name: 'Mosh'}, [1, 2]);
playVideo.bind({ name: 'Mosh'})(); // It always refer to the object refered

playVideo(); // window object

// bind() method

const video4 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self = this;
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    }.bind(this));
  }
};

video4.showTags();

// arrow function
const video5 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self = this;
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    });
  }
};

video5.showTags();

// Recap
// Using self
// Using bind() method

// Exercice 1

function sum(...args) {
  if (args.length === 1 && Array.isArray(args[0]))
    args = [...args[0]];
  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4));

// Exercice 2

const cercle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius**2;
  }
}

console.log(cercle.area)
