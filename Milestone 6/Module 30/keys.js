const glass = { name: "glass", color: "golden", price: 12, isCleaned: true };

const { name, color: banglaNam, } = glass;
// console.log(banglaNam);
const keys = Object.keys(glass);
const values = Object.values(glass);
// console.log(keys);
// console.log(values);

const entries = Object.entries(glass);

// console.log(entries);
// two dimenstional array or array within array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]
// console.log(glass);
// removing with delete syntax
// delete glass.isCleaned;

// console.log(glass);

//  removing by destructuring

const { isCleaned, ...shortGlass } = glass;

// console.log(shortGlass);

// // freeze 
// Object.freeze(glass);
// glass.source = 'Bangladesh';
// glass.price = 5000;
// delete glass.name;
// console.log(glass);

// Seal
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);

