let firstNumber = prompt(
  'Indtast to tal, og se hvilket er størst \n\nFørste tal:'
);
let secondNumber = prompt('Andet tal:');

if (firstNumber > secondNumber) {
  alert('Det første tal er større end det andet tal');
} else if (firstNumber < secondNumber) {
  alert('Det andet tal er større end det første tal');
}
