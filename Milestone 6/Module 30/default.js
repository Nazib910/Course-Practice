//  Default value in function parameters if not given any


function add(num1 = 0, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}

const sum = add(5, 7);
