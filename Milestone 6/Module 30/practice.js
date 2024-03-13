// const multiply = (a, b, c) => {
//   const z = a * b * c;
//   return z;
// };

// // console.log(multiply(2, 4, 5));

// const string = `I am a web developer.
// I love to code.
// I love to eat biriyani`;

// // console.log(string);

// const arrow = (a, b = 5) => a + b;

// // console.log(arrow(10));

// const names = ["joshim", "korim", "hamid", "karim", "akib"];
// 9
// const check = (array) => {
//   let items = [];
//   for (const arr of array) {
//     if (arr.length % 2 === 0) {
//       items.push(arr);
//     }
//   }

//   return items;
// };
// const show = check(names);
// console.log(show);

const merge = (a, b) => {
  const combine = [...a, ...b];
  const maxNumber = Math.max(...combine);
  return maxNumber;
};

const numOne = [12, 56, 89, 45, 34, 61, 755, 41, 5];
const numTwo = [78854, 12, 45, 78, 88, 11, 44, 5];

const show = merge(numOne, numTwo);

console.log(show);
