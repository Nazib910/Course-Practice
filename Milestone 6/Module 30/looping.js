const numbers = [12, 15, 16, 17, 85, 45, 7, 5, 12, 23];

// for(let i = 0; i< numbers.length; i++) {}
// while

for (const numb of numbers) {
  // console.log(numb);
}

const nobab = "Siraj Ud Doula";
for (const nob of nobab) {
  // console.log(nob);
}

const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

// for(const key of glass){
//     console.log(key);   
// };
for(const key in glass){
    const value = glass[key];
    // console.log(key, value);   
};
 

// optional 

const keys = Object.keys(glass);
// console.log(keys);

for (const key of keys) {
    const value = glass[key];
    console.log(key, value);
}
