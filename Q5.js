// See this property again: 135=1^1+3^2+5^3
// Task
// We need a function to collect these numbers, that may receive two integers  a, b that defines the range [a,b]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

let start = 1;
let end = 100;

let res = function(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        let digits = i.toString().split('');
        let sum = 0;
        for (let j = 0; j < digits.length; j++) {
            sum += Math.pow(Number(digits[j]), j + 1); // position starts at 1
        }
        if (sum === i) {
            arr.push(i);
        }
    }
    return arr;

};

console.log(res(start, end));