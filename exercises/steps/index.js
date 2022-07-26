// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solution with recursion
// adding in row and stair to give variables to stop the recursion when needed
function steps(n, row = 0, stair = '') {

  // tell the function to stop when n is equal to number of rows
  if (n === row) {
    return;
  }

  // tell n to move to the next row when the current stair is finished
  if (n === stair.length) {
    console.log(stair);
    // move on to the next row of the stairs
    return steps(n, row + 1);
  }

  if (stair.length <=  row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  // run the function again to grab the next number on the current stair
  steps(n, row, stair);
}

module.exports = steps;

// function steps(n) {
//
//   for (var i = 0; i < n; i++) {
//     let stair = '';
//
//     for (var j = 0; j < n; j++) {
//       if (j <= i) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }
