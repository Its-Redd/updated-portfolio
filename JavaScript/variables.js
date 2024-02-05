'use strict';

// Opgave 1
let greeting = 'Hej verden';
console.log('Opgave 1: ' + greeting); // Hej verden

// Opgave 2
let firstName = 'John';
let middleName = 'F.';
let lastName = 'Kennedy';
let fullName = firstName + ' ' + middleName + ' ' + lastName;
console.log('Opgave 2: ' + fullName); // John F. Kennedy

// Opgave 3
let salary = 5000;
console.log('Opgave 3: ' + salary); // 5000

// Opgave 4
let calculate = (5 + 5) * 3;
console.log('Opgave 4: ' + calculate); // 30

// Opgave 5
let deci1 = 2.25;
let deci2 = 3.5;
let sum2 = Math.ceil(deci1 + deci2);
console.log('Opgave 5: ' + sum2); // 6

// Opgave 6
let deci3 = 2.55;
let deci4 = 1.44;
let roundDown = Math.floor(deci3 + deci4);
console.log('Opgave 6: ' + roundDown); // 3

// Opgave 7
let squareRoot = Math.sqrt(65);
console.log('Opgave 7: ' + squareRoot); // 8.06225774829855

// Opgave 8
let toPull = 'John Doe is 25 years old';
let pulled = toPull.match('Doe');
console.log('Opgave 8: ' + pulled); // Doe

// Opgave 9
let compare = false;
console.log('Opgave 9: ' + compare); // false

// Opgave 10
let fullNameType = typeof fullName;
let salaryType = typeof salary;
let deci3Type = typeof deci3;
let compareType = typeof compare;

let result =
  'fullName = ' +
  fullNameType +
  ', ' +
  'salary = ' +
  salaryType +
  ', ' +
  'deci3 = ' +
  deci3Type +
  ', ' +
  'compare = ' +
  compareType;
console.log('Opgave 10: ' + result);
// fullName = string,
//  salary = number,
//  deci3 = number,
//  compare = boolean
