// Arithmetics operators

let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

console.log(++x)
console.log(--x)

// Assignement operators

x++;
x = x + 5;
x += 5;

x = x * 3;
x *= 3;

// Comparison operators

let i = 1;

// Relational
console.log(i > 0);
console.log(i >= 1);
console.log(i < 1);
console.log(i <= 1);

// Equality
console.log(i === 1);
console.log(x !== 1);

// Strict Equality
console.log(1 === 1); // true
console.log('1' === 1); // false

// Lose Equality
console.log(1 == 1); // true
console.log('1' == 1); // true
console.log(true == 1) // true

// Ternary Operators

// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

// Logical Operators
// Logical AND (&&)
// Returns TRUE if both operands are TRUE

console.log(true && true) // true
console.log(true && false) // false

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one operands is TRUE
highIncome = false;
goodCreditScore = true;
eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan);

// NOT (!)

let applicationRefused = !eligibleForLoan; // It's the opposite of eligibleForLoan
console.log(applicationRefused);

// Logical Operators with Non-Booleans

console.log(false || true); // true
console.log(false || 'Mosh'); // 'Mosh'
console.log(false || 1); // 1

// Falsy : undefined, null, 0, false, '', NaN
// If not Falsy => It's Truthly

// SHort-circuiting => Can't do more that One comparison false || 1 || 2 => 1

// BitWise Operators
// 1 = 00000001
// 2 = 00000010
// R = 00000011 = 3
// R = 00000000 = 0

console.log(1 | 2); // Bitwise OR => 3
console.log(1 & 2); // Bitwise AND => 0

// Read, Write, Execute
// 00000100
// 00000110
// 00000111

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message)

// Operator Precedence
// *, / > +, -

// Exercice

let a = 'red';
let b = 'blue';
let tmp = a

a = b
b = tmp

console.log(a);
console.log(b);
