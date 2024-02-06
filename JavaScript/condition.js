// ! Assignment 1
// Description: takes two numbers from the user and alerts the user of which number is the largest.
console.log('Assignment 1...');

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
// ! Assignment 2
// Description: takes three numbers from the user and alerts the user of which number is the lowest.
console.log('Assignment 2...');

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
*/

// ! Assignment 3
// Description: takes a number from the user and alerts the user if the number is even or odd.
console.log('Assignment 3...');


// Declare variables
let a3Number1;

// While loop to get the first number from the user and check if it is a number or not
doneFirst = false;
while (!doneFirst) {
  let firstNumber = prompt(
    'Indtast et tal, og jeg vil fortælle dig om det er lige eller ulige \n\nIndtast tallet: '
  );
  if (Number(firstNumber) === NaN) {
    alert('Du skal indtaste et tal');
  } else {
    a3Number1 = Number(firstNumber);
    console.log('Number confirmed...');
    doneFirst = true;
  }
}

// Compare the number and alert the result to the user
if (a3Number1 % 2 == 0) {
  console.log('Number is even...');
  alert('Tallet er lige');
}
if (a3Number1 % 2 != 0) {
  console.log('Number is odd...');
  alert('Tallet er ulige');
}

// ! Assignment 4
// Description: the user is asked how many correct answers they had, and the user is then given a grade based on the number of correct answers. With the max correct answers being 80. if the user enters a number higher than 80, the user is alerted that they are a cheater.
console.log('Assignment 4...');


let a4CorrectAnswers;
let a4Grade;

// While loop to get the number of correct answers from the user and check if it is a number or not
doneFirst = false;
while (!doneFirst) {
  let correctAnswers = prompt(
    'Hvor mange rigtige svar havde du? \n\nIndtast antal rigtige svar: '
  );
  if (Number(correctAnswers) === NaN) {
    alert('Du skal indtaste et tal');
  } else {
    a4CorrectAnswers = Number(correctAnswers);
    console.log('Number confirmed...');
    doneFirst = true;
  }
}

// Compare the number of correct answers and alert the result to the user
if (a4CorrectAnswers <= 80) {
  if (a4CorrectAnswers >= 71 && a4CorrectAnswers <= 80) {
    a4Grade = '12';
  } else if (a4CorrectAnswers >= 56 && a4CorrectAnswers < 70) {
    a4Grade = '10';
  } else if (a4CorrectAnswers >= 41 && a4CorrectAnswers < 55) {
    a4Grade = '7';
  } else if (a4CorrectAnswers >= 21 && a4CorrectAnswers < 40) {
    a4Grade = '4';
  } else if (a4CorrectAnswers >= 11 && a4CorrectAnswers < 20) {
    a4Grade = '02';
  } else if (a4CorrectAnswers >= 1 && a4CorrectAnswers < 10) {
    a4Grade = '00';
  } else if (a4CorrectAnswers == 0) {
    a4Grade = '-3';
  }
  alert(`Du fik karakteren ${a4Grade}`);
} else {
  alert('Du snyder, vi har meldt din IP til skoleinspektøren!');
}


// ! Assignment 5
// Description: takes a number from the user, henceforth referred to as x, x is multiplied by itself. We then find the square root of x and finally we find x to the power of x. The results are then alerted to the user.
console.log('Assignment 5...');


// Declare variables
let a5Number1;
let a5number1multiplied;
let a5Number1Squared;
let a5Number1powerOf;

// While loop to get the first number from the user and check if it is a number or not
doneFirst = false;
while (!doneFirst) {
  let firstNumber = prompt(
    'Indtast et tal, og jeg vil fortælle dig hvad der sker med tallet \n\nIndtast tallet: '
  );
  if (Number(firstNumber) === NaN) {
    alert('Du skal indtaste et tal');
  } else {
    a5Number1 = Number(firstNumber);
    console.log('Number confirmed...');
    doneFirst = true;
  }
}

// Multiply the number by itself
a5number1multiplied = a5Number1 * a5Number1;
console.log('Number multiplied...');

// Find the square root of the number
a5Number1Squared = Math.sqrt(a5Number1);
console.log('Number squared...');

// Find the number to the power of the number
a5Number1powerOf = Math.pow(a5Number1, a5Number1);
console.log('Number to the power of...');

// Alert the results to the user
alert(
  `${a5Number1} ganget med sig selv er: ${a5number1multiplied} \nKvadratroden af ${a5Number1} er: ${a5Number1Squared} \n${a5Number1} opløftet i sig selv. potens er: ${a5Number1powerOf}`
);


// ! Assignment 6
// Description: gets the current month number and alerts the user of the name of the month and the season that the month is in.
console.log('Assignment 6...');

// Declare variables
let a6MonthNumber;
let a6MonthName;
let a6Season;

// Get the current month number
a6MonthNumber = new Date().getMonth();
console.log('Month number found...');

// Find the name of the month
switch (a6MonthNumber) {
  case 0:
    a6MonthName = 'Januar';
    break;
  case 1:
    a6MonthName = 'Februar';
    break;
  case 2:
    a6MonthName = 'Marts';
    break;
  case 3:
    a6MonthName = 'April';
    break;
  case 4:
    a6MonthName = 'Maj';
    break;
  case 5:
    a6MonthName = 'Juni';
    break;
  case 6:
    a6MonthName = 'Juli';
    break;
  case 7:
    a6MonthName = 'August';
    break;
  case 8:
    a6MonthName = 'September';
    break;
  case 9:
    a6MonthName = 'Oktober';
    break;
  case 10:
    a6MonthName = 'November';
    break;
  case 11:
    a6MonthName = 'December';
    break;
  default:
    a6MonthName = 'Fejl';
    console.error('Something went wrong...');
    break;
}
console.log('Month name found...');

// Find the season of the month
if (a6MonthNumber >= 2 && a6MonthNumber <= 4) {
  a6Season = 'Forår';
}
if (a6MonthNumber >= 5 && a6MonthNumber <= 7) {
  a6Season = 'Sommer';
}
if (a6MonthNumber >= 8 && a6MonthNumber <= 10) {
  a6Season = 'Efterår';
}
if (a6MonthNumber == 11 || a6MonthNumber <= 1) {
  a6Season = 'Vinter';
}
console.log('Season found...');

// Alert the results to the user
alert(`Vi er i måneden ${a6MonthName}, og det er ${a6Season}`);
