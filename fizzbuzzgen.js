"use strict";

module.exports = function* fizzBuzz() {
  let i = 1;
  while (true) {
    if (i % 15 === 0) {
      yield "FizzBuzz";
    } else if (i % 3 === 0) {
      yield "Fizz";
    } else if (i % 5 === 0) {
      yield "Buzz";
    } else {
      yield i;
    }
    i = i + 1;
  }
}