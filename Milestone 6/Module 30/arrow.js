// normal function
function add(a, b) {
  const result = a + b;
  return result;
}

// direct return

function add(a, b) {
  return a + b;
}
// function expression
const add2 = function (a, b) {
  return a + b;
};
// arrow function which is similar to function expression

const add3 = (a, b) => a + b;
const add4 = (a, b, c, d) => a + b + c + d;

// console.log(add4(2, 5, 2, 3));


