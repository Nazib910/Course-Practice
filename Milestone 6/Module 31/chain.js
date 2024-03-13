// data access

const data = [{ id: 1, name: "abul", address: "kochu khet" }];

// console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "lenevo laptop", price: 65000 },
    { id: 2, name: "macbook", price: 185000 },
    { id: 3, name: "asus laptop", price: 85000 },
]
};

// console.log(products.data[1].price);



const user = {
    id: 5001,
    name: 'shoriful raj',
    address: {
        street: {
            first: '54/1 uttara dhaka',
            second: '52/1 uttara dhaka',
            third: '51/1 uttara dhaka'
        },
        city: 'dhaka city'
    }
}
const user2 = {
    id: 5002,
    name: ' raj',
    address: [{
        city: 'dhaka city',
        country: 'Bangladesh'
    }]
}

console.log(user.address.street?.third);
console.log(user2.address[0]);