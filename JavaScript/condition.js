// ! Assignment 1
// Description: takes two numbers from the user and alerts the user of which number is the largest.

/*

// Declare variables
let a1Number1;
let a1Number2; 

// ? I am sure there is a better way to do this, but I am not sure how to do it. So I will do it the way I know how to do it.

// While loop to get the first number from the user and check if it is a number or not
doneFirst = false;
while (!doneFirst) {
  let firstNumber = prompt(
    'Indtast to tal, og jeg vil fortælle dig hvilket tal der er størst \n\nIndtast det første tal: '
  );
  if (Number(firstNumber) === NaN) {
    alert('Du skal indtaste et tal');
  } else {
    a1Number1umber1 = Number(firstNumber);  // This is the line that was missing
    doneFirst = true;
  }
}

// While loop to get the second number from the user and check if it is a number or not
doneSecond = false;
while (!doneSecond) {
  let secondNumber = prompt('Indtast det andet tal: ');
  if (Number(secondNumber) === NaN) {
    alert('Du skal indtaste et tal');
  } else {
    a1Number2 = Number(secondNumber);  // This is the line that was missing
    doneSecond = true;
  }
}

// Compare the two numbers and alert the result to the user
if (Number(firstNumber) > Number(secondNumber)) {
  alert('Det første tal er størst');
} else if (number(firstNumber) < Number(secondNumber)) {
  alert('Det andet tal er størst');
} else if (number(firstNumber) === Number(secondNumber)) {
  alert('Tallene er ens');
} else {
  alert('Noget gik galt'); // Just in case 😉
}
*/
// ! Assignment 2
// Description: takes three numbers from the user and alerts the user of which number is the lowest.

// Declare variables
let a2Number1;
let a2Number2;
let a2Number3;

// While loop to get the first number from the user and check if it is a number or not
doneFirst = false;
while (!doneFirst) {
  let firstNumber = prompt(
    'Indtast tre tal, og jeg vil fortælle dig hvilket tal der er mindst \n\nIndtast det første tal: '
  );
  if (Number(firstNumber) === NaN) {
    alert('Du skal indtaste et tal');
  } else {
    a2Number1 = Number(firstNumber); // This is the line that was missing
    console.log('First number proccessed...');
    doneFirst = true;
  }
}

// While loop to get the second number from the user and check if it is a number or not
doneSecond = false;
while (!doneSecond) {
  let secondNumber = prompt('Indtast det andet tal: ');
  if (Number(secondNumber) === NaN) {
    alert('Du skal indtaste et tal');
  } else {
    a2Number2 = Number(secondNumber); // This is the line that was missing
    console.log('Second number proccessed...');
    doneSecond = true;
  }
}

// While loop to get the third number from the user and check if it is a number or not
doneThird = false;
while (!doneThird) {
  let thirdNumber = prompt('Indtast det tredje tal: ');
  if (Number(thirdNumber) === NaN) {
    alert('Du skal indtaste et tal');
  } else {
    a2Number3 = Number(thirdNumber); // This is the line that was missing
    console.log('Third number proccessed...');
    doneThird = true;
  }
}

// Compare the three numbers and alert the result to the user
if (a2Number1 < a2Number2 && a2Number1 < a2Number3) {
  console.log('First number is the smallest...');
  alert('Det første tal er mindst');
} else if (a2Number2 < a2Number1 && a2Number2 < a2Number3) {
  console.log('Second number is the smallest...');
  alert('Det andet tal er mindst');
} else if (a2Number3 < a2Number1 && a2Number3 < a2Number2) {
  console.log('Third number is the smallest...');
  alert('Det tredje tal er mindst');
} else if (a2Number1 == a2Number2 && a2Number1 == a2Number3) {
  console.log('All numbers are the same...');
  alert('Alle tal er ens');
} else {
  console.error('Something went wrong...');
  alert('Noget gik galt'); // Just in case 😉
}
