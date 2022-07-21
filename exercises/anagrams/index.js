// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
  let sortA = cleanString(stringA);
  let sortB = cleanString(stringB);

  if (sortA === sortB) {
    return true;
  } else {
    return false;
  }
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//       return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = ++charMap[char] || 1;
//   }
//
//   return charMap;
// }

module.exports = anagrams;

// function anagrams(stringA, stringB) {
  // My attempt below - 4 of 6 tests pass -- didn't work since I forgot to join at the end
  // let sortA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort();
  // let sortB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort();
  //
  // console.log(sortA);
  // console.log(sortB);
  //
  // if (sortA === sortB) {
  //   return true;
  // } else {
  //   return false;
  // }
// }
