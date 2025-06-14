// Description:
// The problem with truly random numbers in games is that they tend to not feel random to humans. For example, if you flip a coin 100 times, you'll probably see four heads or four tails in a row during that time.

// But if that happens in a game, the player tends to think that the game is "broken" and will get frustrated.

// The task here is to implement a new random number generator called RNG that follows different rules.

// The constructor will take a parameter, n, which gives the upper bound. The generator will output integers between 0 and n (not including n).

// The rand method will output the next random number.

// rand will work in cycles of length n, and during each cycle, it will output every possible number. So if n = 2, then the sequences:

// 1, 0, 1, 0
// 0, 1, 0, 1
// 0, 1, 1, 0
// 1, 0, 0, 1
// are all possible, but

// 1, 1, 0, 1
// 1, 1, 1, 1
// 0, 0, 0, 1
// are not possible, because they do not output every number in each cycle.

// Note: The test suite includes a mean and variance test on one value in each cycle. There is an outside chance that a correct implementation will fail these tests. If you fail them by a small margin, just run the test again.

function RNG(n) {
    let values = [];
  
    function shuffle() {
      values = [];
      for (let i = 0; i < n; i++) {
        values.push(i);
      }
  
      // Fisher-Yates Shuffle
      for (let i = values.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
      }
    }
  
    function rand() {
        if (values.length === 0) shuffle();
        return values.pop();
      }
    
      return rand;
}

const rand = RNG(2);

console.log(rand()); 
console.log(rand()); 
console.log(rand()); 
console.log(rand()); 
  
  
module.exports = RNG;
