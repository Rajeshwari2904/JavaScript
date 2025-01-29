const score = 500;
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toLocaleString());

const otherNumber = 123.897;
console.log(otherNumber.toPrecision(3));

const abc = 1000000;

console.log(abc.toLocaleString('en-IN'));

//+++++++++++Maths+++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));

console.log(Math.round(23.89));

console.log(Math.ceil(4.1));  //it gives ceiling value
console.log(Math.floor(4.1));  //it gives floor value

console.log(Math.min(3, 6,1, 5));
console.log(Math.max(3,2,1,8));


console.log(Math.random());  // it gives value in range of 0 and 1

console.log(Math.round(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.round(Math.random() * (max - min + 1)) + min);