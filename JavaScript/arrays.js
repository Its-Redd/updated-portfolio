'use strict';

// ! Assignment 1
// * Description: Create an array with the name of four countries. Print the array to the console.
function assignment1() {
  console.log('Assignment 1...');
  let countries = ['Denmark', 'Sweden', 'Norway', 'Finland'];
  console.log(countries);
}

// ! Assignment 2
// * Description: Create an array with mixed data types. Print the number 2 to the console.
function assignment2() {
  console.log('Assignment 2...');
  let mixedData = ['Christian', 45, [1, 2, 3], 'Dorte'];
  console.log(mixedData[2][1]);
}

// ! Assignment 3
// * Description: Create an array with 3 fruits. Then add kiwi to the end of the array, add strawbeddy to the beginning of the array, and remove the last element of the array. Print the array, and the removed element to the console.
function assignment3() {
  console.log('Assignment 3...');
  let fruits = ['apple', 'banana', 'orange'];
  fruits.push('kiwi');
  fruits.unshift('strawberry');
  let removed = fruits.pop();

  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  console.log('Removed elements: ' + removed);
}

// ! Assignment 4
//  * Description: Create an associative array with the keys: firstName, lastName, address, city, and phone.
// * A: Print the array to the console.
// * B: Print the indexes only, to the console.
// * C: Print the values only, to the console.
// * D: Print both the indexes and the values to the console.
function assignment4() {
  console.log('Assignment 4...');
  let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: 'Fosse Way 1',
    city: 'London',
    phone: '4532 2341 7392',
  };
  console.log(person);
  console.log(Object.keys(person));
  console.log(Object.values(person));
  console.log(Object.entries(person));
}

// ! Assignment 5
// * Description: Get a number, between 1-10, from the user. As long as the user does not enter a number between 1-10, keep asking for a number. When the user enters a number between 1-10, send an alert to the user with the number.

function assignment5() {
  console.log('Assignment 5...');
  let number = prompt('Enter a number between 1-10');
  if (number < 1 || number > 10 || isNaN(number) || number === '') {
    do {
      number = prompt('Invalid input\n\nEnter a number between 1-10');
    } while (number < 1 || number > 10 || isNaN(number) || number === '');
  }

  alert('You entered: ' + number);
}
