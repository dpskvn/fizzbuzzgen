"use strict";

const _ = require('underscore'),
      fizzBuzz = require('./fizzbuzzgen'),
      fb = fizzBuzz();

_(100).times(function () {
  console.log(fb.next().value);
});