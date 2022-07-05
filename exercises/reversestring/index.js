// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // One solution - ... concatonates what follows into the array - so creating an array with the str  variable being passed in to be able to use the reverse function,
  //then joining all parts of the array together to form the word
  // return [...str].reverse().join('');

  // Second solution without reverse helper - use a for loop to run through each letter and then return it in front of the last one
  // let reversed = '';
  // for (let character of str) {
  //   reversed = character + reversed;
  // }
  // return reversed;

  // Third solution - similar to the first option
  // return str.split('').reverse().join('');

  // Fourth solution - reduct function takes the last thing returned and puts it back into the calculation
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
