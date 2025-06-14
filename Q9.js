// The action of a Caesar cipher is to replace each plaintext letter (plaintext letters are from 'a' to 'z' or from 'A' to 'Z') with a different one a fixed number of places up or down the alphabet.

// This program performs a variation of the Caesar shift. The shift increases by 1 for each character (on each iteration).

// If the shift is initially 1, the first character of the message to be encoded will be shifted by 1, the second character will be shifted by 2, etc...

// Coding: Parameters and return of function "movingShift"
// param s: a string to be coded

// param shift: an integer giving the initial shift

// The function "movingShift" first codes the entire string and then returns an array of strings containing the coded string in 5 parts (five parts because, to avoid more risks, the coded message will be given to five runners, one piece for each runner).

// If possible the message will be equally divided by message length between the five runners. If this is not possible, parts 1 to 5 will have subsequently non-increasing lengths, such that parts 1 to 4 are at least as long as when evenly divided, but at most 1 longer. If the last part is the empty string this empty string must be shown in the resulting array.

// For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string. If the length is 11, equal parts would be of length 2.2, hence parts will be of lengths 3, 3, 3, 2, 0.

// You will also implement a "demovingShift" function with two parameters

// Decoding: parameters and return of function "demovingShift"
// an array of strings: s (possibly resulting from "movingShift", with 5 strings)

// an int shift

// "demovingShift" returns a string.

// Example:
// u = "I should have known that you would have a perfect answer for me!!!"

// movingShift(u, 1) returns :

// v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]

// (quotes added in order to see the strings and the spaces, your program won't write these quotes, see Example Test Cases)

// and demovingShift(v, 1) returns u. #Ref:



// Shifts a letter using the arrays
const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');



// Shifts a letter using the arrays
function shiftLetter(letter, shift) {
  if (lowercase.includes(letter)) {
    let index = lowercase.indexOf(letter);
    let newIndex = ((index + shift) % 26 + 26) % 26;
    return lowercase[newIndex];
  }

  if (uppercase.includes(letter)) {
    let index = uppercase.indexOf(letter);
    let newIndex = ((index + shift) % 26 + 26) % 26;
    return uppercase[newIndex];
  }

  return letter;
}

// Encoding: Caesar cipher with increasing shift
function movingShift(str, shift) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    result.push(shiftLetter(str[i], shift + i));
  }

  let fullEncoded = result.join("");

  const baseLen = Math.floor(fullEncoded.length / 5);
  const extra = fullEncoded.length % 5;

  let parts = [];
  let start = 0;

  for (let i = 0; i < 5; i++) {
    let partLen = baseLen + (i < extra ? 1 : 0);
    parts.push(fullEncoded.slice(start, start + partLen));
    start += partLen;
  }

  return parts;
}


// Decoding: undo the shift
function demovingShift(parts, shift) {
  let joined = parts.join("");
  let result = [];

  for (let i = 0; i < joined.length; i++) {
    result.push(shiftLetter(joined[i], -(shift + i)));
  }

  return result.join("");
}

// 🧪 Example
const input = "I should have known that you would have a perfect answer for me!!!";
const shift = 1;

const encoded = movingShift(input, shift);
console.log("Encoded parts:", encoded);

const decoded = demovingShift(encoded, shift);
console.log("Decoded message:", decoded);

module.exports = {
  movingShift,
  demovingShift
};


