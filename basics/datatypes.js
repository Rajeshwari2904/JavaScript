"use Strict";  // treate all js code as a newer version

console.log (3 + 3); 
console.log("Nalbalwar") // Code redability should be high

//alert(1 +2) ----We are using node js not Browser 

//Datatypes-->

let name = "Rajeshwari"   //String
let age = 21              //number
let isLoggedIn = true;     //Boolean


//Null   -- standalone value
//undefined
//symbol  --Unique

console.log(typeof "Rajeshwari");
console.log(typeof 21);
console.log(typeof undefined);
console.log(typeof null);


//Object

//datatypes [7 types]  Primitive Datatypes
//String, Number, Boolean, BigInt, symbol, null, Undifined

const Name = "Dipali";       //returnType string
const Score = 100;           //returnType number
const isLogged = true;       //returnType boolean
const BigInt = 12345678n;    //returnType 
const temp = null;           //returnType object
let result;                  //returnType undefined

const id = symbol("123");   //Symbol means Unique

//Reference [Non Premitive]
//Array, Object , Functions

const names = ["Rajeshwari", "Santosh", "Nalbalwar"];   //Array  returnType array

let myObj = {          //declaring and initializing Object    returnType object
    Name : "Anushka",
    age : 12,
}

const myFunction = function(){        //Declaring Functions   returnType function object
      console.log("Hello world");
}


console.log(typeof names);
