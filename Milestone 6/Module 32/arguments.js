function sum(a,b,c){
  const args= [...arguments];
  console.log(args);
    const result = a+b+c;
    return result;
}

const total = sum(45,6,8,42,78,15,68);
console.log(total);