function sayHello(name) {
  console.log(`Hello ${name}`);
}

const sayHi = (name) => {
  console.log(`Hi ${name}`);
};
const findSum = (a, b) => {
  return a + b;
};

const sum = (a, b) => a + b;

sayHello("Anuj Sharma");
sayHi("Manju Sinha");
console.log("sum=", findSum(5, 6));
console.log("sum=", sum(5, 6));
