const numbers = [12, 15, 14, 8, 7, 4, 5];

const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

const fiveAdded = numbers.map((num) => num + 5);

// console.log(fiveAdded);

const halved = numbers.map((num) => num / 2);

// console.log(halved);

const friends = ["tom", "micheal", "karim", "joshim"];

const lengths = friends.map((frnd) => frnd.length);

const firstLetter = friends.map((friend) => friend[0]);

console.log(firstLetter);
