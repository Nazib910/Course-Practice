// diff arrow functons

const diff = (x, y) => x - y;

const multALot = (first, second, third) => first * second * third;


// you can omit the parenthesis if theres a single parameter in arrow function
const getAge = person => person.age;

const student = {
  name: "joshim",
  age: 25,
};

const age = getAge(student);
console.log(age);
