// map ===> loops through each element of the array and do the operation that you passed in the callback function and hold the result from each operation in an array and finally returns you the array

const numbers = [10, 15, 4, 8, 7];

// function doubleIt(num) {
//   console.log("num now", num);
//   return num * 2;
// }

// const result = numbers.map(doubleIt);

// console.log(result);
const double2 = (n) => n * 2;
const output = numbers.map(double2);
// console.log(output);

const output2 = numbers.map(n => n * 2);
console.log(output2);
// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled);
