function calculateMoney(ticketsale) {
  if (ticketsale <= 0) {
    return "Invalid Number";
  }
  const ticket = 120;
  const expense = 500 + 8 * 50;
  const total = ticketsale * ticket - expense;
  return total;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }
  const letters = [
    "A",
    "a",
    "Y",
    "y",
    "I",
    "i",
    "E",
    "e",
    "O",
    "o",
    "U",
    "u",
    "W",
    "w",
  ];
  const lastWord = name[name.length - 1];

  if (lastWord.includes(letters)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(inputs) {
  let resArray = [];
  if (!Array.isArray(inputs)) {
    return "Invalid Array";
  }
  for (const input of inputs) {
    if (typeof input === "number" && !isNaN(input)) {
      resArray.push(input);
    }
  }
  return resArray;
}

function password(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  const objName = obj.name;
  const objBirthYear = obj.birthYear;
  const objsiteName = obj.siteName;

  if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined
  ) {
    return "Invalid";
  }

  const result = objsiteName + "#" + objName + "@" + objBirthYear;
  return result;
}
const newobj = { name: "kolimuddin",  siteName: "google" };
console.log(password(newobj));
function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) && typeof livingCost !== "number") {
    return "Invalid Input";
  }
  let allPayment = 0;
  for (let ar of arr) {
    if (ar >= 3000) {
      let tax = (ar * 20) / 100;
      let taxfree = ar - tax;
      allPayment = allPayment + taxfree;
    } else {
      allPayment = allPayment + ar;
    }
  }
  let savings = allPayment - livingCost;

  if (savings >= 0) {
    return savings;
  } else {
    return "Earn More";
  }
}
