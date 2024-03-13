const products = [
  { id: 1, name: "lenevo", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "mac", price: 150000 },
];

// has some properties, method
class Product {
  country = "Bangladesh";
  constructor(name) {
    this, (name = name);
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenevo = new Product("this is lenevo");

// console.log(lenevo);

// lenevo.speak('classssss');

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("Sir is teaching Math");
  }
}

const tapan = new Teacher("Tapan Sir", "Physics");

console.log(tapan);

const rashid = new Teacher("Rashid Sir", "Chemistry");
