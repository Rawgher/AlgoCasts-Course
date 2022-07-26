// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (n === row) {
    return;
  }

  if (n + n-1 === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  let mid = Math.floor((n + n-1)/2);

  let add;

  if (mid - row <= level.length && mid + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add);
}

module.exports = pyramid;

// function pyramid(n) {
//   let mid = Math.floor((n + n-1)/2);
//   for (var i = 0; i < n; i++) {
//       let level = '';
//
//       for (var j = 0; j < n + n-1; j++) {
//         if (mid - i <= j && mid + i >= j) {
//           level += '#';
//         } else {
//           level += ' ';
//         }
//       }
//       console.log(level);
//     }
// }
