const name = "Akshara";
const id = 30;

console.log(`Hello my Name is ${name} and my id is ${id}`);//``backtext --- String interpulation--Good Practice

const newName = new String("Rajeshwari");

console.log(newName.length);
console.log(newName.toUpperCase());

console.log(newName.charAt(7))
console.log(newName.indexOf('i'));

const newString = newName.substring(0, 6);   // We can't use - values in Substring 
console.log(newString);

const anotherString = newName.slice(-2, 4);
//console.log(anotherString);


const stringOne = "    Raj";
console.log(stringOne);
console.log(stringOne.trim());

const url = "https://Rajeshwari_Nalbalwar//"
