//  filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const numbers = [12, 15, 14, 8, 7, 4, 5];
const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter(p => p > 70);
const selected = players.filter((p) => p % 2 === 0);
// console.log(selected);


const friends = ["tom", "micheal", "karim", "joshim"];

const oddChar = friends.filter(f => f.length > 4);

console.log(oddChar);
