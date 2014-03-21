"use strict";

const _ = require('underscore'),
      fizzBuzz = require('./FizzBuzz'),
      fb = fizzBuzz();

_(100).times(function () {
  console.log(fb.next().value);
});