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
let char = "*";
let rows = [];
let res = "";
let padRows = function (i,num) {
    if (num > 0 && num % 2 !== 0) {  
        return " ".repeat(num - i) + char.repeat( 2*i-1 ) + " ".repeat(num - i);
    }
}

// for (let i = 1; i < num - 1; i++){
//     rows.push(padRows(i, num));
// }

// for (let i = num/2; i >1; i--){
//     rows.push(padRows(i, num));
// }

for (let i = 1; i <= Math.ceil(num / 2); i++) {
    rows.push(padRows(i, num));
}
for (let i = Math.floor(num / 2); i >= 1; i--) {
    rows.push(padRows(i, num));
}

for (let row of rows) {
    res = res + row + "\n";
}
console.log(res);
