// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// My answer
function capitalize(str) {
  const splitWords = str.split(' ');

  for (var i = 0; i < splitWords.length; i++) {
    splitWords[i] = splitWords[i][0].toUpperCase() + splitWords[i].slice(1);
  }

  return splitWords.join(' ');
}

module.exports = capitalize;

// instructor solution 1
// function capitalize(str) {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return words.join(' ');
// }

// instructor solution 2
// function capitalize(str) {
//   let result = str[0].toUpperCase();
//
//   for (var i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//
//   return result;
// }
