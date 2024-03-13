const user = { id: 1, name: "amir khan", job: "actor" };
// JavaScript Object Notation (JSON)

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
  owner: "alia",
  address: {
    street: "kochukhet",
    city: "dhaka",
    country: "bd",
  },
  products: ["laptop", "keyboard", "microphone", "mobile phone"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
// console.log(shop);

const shopJSON = JSON.stringify(shop)

console.log(shopJSON);

const shopObject = JSON.parse(shopJSON);

console.log(shopObject);