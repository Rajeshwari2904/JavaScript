//array

const myArray = [1, 2, 3, 4, "abc", true];
const myArray2 = ["Rajeshwari", "akanksha"];

console.log(myArray);
console.log(myArray2);

const array = new Array(1, 2, 3, 4)
console.log(array);

//array.push(5);
//console.log(array);

// array.pop();
// console.log(array);

//array.unshift(6);
//console.log(array);  //[ 6, 1, 2, 3, 4 ]

array.shift();
console.log(array);  //[ 2, 3, 4 ]

console.log(array.includes(4));

const newArr = array.join()
console.log(array);
console.log( typeof newArr); //string

//slice, splice

console.log("A", array);

const myn1 = array.slice(1,3);
console.log("B", myn1);

const myn2 = array.splice(1, 3);
console.log("C", myn2);
console.log(myn2);



