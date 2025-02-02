// singleton

//object literals

const mysym = Symbol("key1")

const JsUser = {
    name: "Rajeshwari",
    age : 20,
    location: "Nanded",
    email: "rajeshwari@gmail.com",
    isLoggedIn: true,
    [mysym]: "mykey1"

}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser[mysym]);

JsUser.email = "akshara@gmail.com";
//Object.freeze(JsUser);      //After freez no one can change the value

JsUser.email = "anushka@gmail.com";

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
 console.log(JsUser.greeting); //[Function (anonymous)]

 console.log(JsUser.greeting()); //Hello JS User
                                 //undefined

                                 