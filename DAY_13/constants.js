// constants.js
const PI = 3.14;
const E = 2.71;

function circleArea(radius) {
  return PI * radius * radius;
}

function naturalLog(base) {
  return Math.log(base) / Math.log(E);
}

module.exports = { PI, E, circleArea, naturalLog };
