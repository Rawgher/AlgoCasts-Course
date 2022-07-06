// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Course solution
function maxChar(str) {
  let chars = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    chars[char] = ++chars[char] || 1;
  }

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

// My initial solution
// function maxChar(str) {
//   let chars = {};
//   let max = '';
//
//   for (let char of str) {
//     // condensed form of if statement from below
//     chars[char] = ++chars[char] || 1;
//
//     // if (!chars[char]) {
//     //   chars[char] = 1
//     // } else {
//     //   ++chars[char]
//     // }
//
//     if (max === '' || chars[char] > chars[max]) {
//       max = char
//     }
//   }
//
//   return max;
// }
