// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

let num = 7;
function diamond(num) {
    if (num <= 0 || num % 2 === 0) return null;

    let rows = [];

    let padRows = function(i, num) {
        let stars = 2 * i - 1;
        let spaces = (num - stars) / 2;
        return " ".repeat(spaces) + "*".repeat(stars);
    };

    for (let i = 1; i <= Math.ceil(num / 2); i++) {
        rows.push(padRows(i, num));
    }
    for (let i = Math.floor(num / 2); i >= 1; i--) {
        rows.push(padRows(i, num));
    }

    return rows.map(row => row + "\n").join("");
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(4));
console.log(diamond(-5));



module.exports = diamond;

//my code didnt work
// for (let i = 1; i < num - 1; i++){
//     rows.push(padRows(i, num));
// }

// for (let i = num/2; i >1; i--){
//     rows.push(padRows(i, num));
// }

//AI code : Math.ceil(x) rounds x up to the next whole number, Math.floor(x) rounds x down.
// Math.ceil(2.5) → 3
// Math.floor(2.5) → 2

