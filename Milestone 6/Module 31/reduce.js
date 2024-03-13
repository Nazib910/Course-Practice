const numbers = [1, 4, 8, 14, 7];

const total = numbers.reduce((previous, current) => previous + current, 0);

// console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0);

console.log(sum);
