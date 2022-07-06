// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // converting the input to a string to be able to use the reverse function on it, then converting back to a number, then multiplying it by the positive or negative sign
  // Math.sign() returns 1 or -1 depending on what n is (ex: -51 returns -1 vs 51 returning 1)
  // could use most of the methods from the reverse string exercise to make this happen
    return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
}

module.exports = reverseInt;
