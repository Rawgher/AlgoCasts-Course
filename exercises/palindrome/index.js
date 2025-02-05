// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

  // my initial answer
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }

  if (str === reversed) {
    return true
  } else {
    return false
  }

  // MY OTHER POSSIBLE ANSWERS
  // reversed = [...str].reverse().join('');
  // return str === reversed

  // reversed = str.split('').reverse().join('');
  // return str === reversed

  // reversed = str.split('').reduce((rev, char) => char + rev, '');
  // return str === reversed

  // COURSE OTHER POSSIBLE ANSWER
  // .every is using a comparison on every element of an array - this isn't as optimal of a solution since it does extra work
  // comparing every character to the on at the end of the array moving inward with every iteration
  // return [...str].every((char, i) => {
  //   return char === str[str.length - i - 1];
  // });
}

module.exports = palindrome;
