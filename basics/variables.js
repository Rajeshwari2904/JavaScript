const accountID = 12345
let accountName = "Rajeshwari"
var accountEmail = "rajeshwari@gmail.com"  //We don't use var because it has issue in functional Scope
accountCity = "Nanded"    //Do not use this type of  variable declaration
let accountNumber;


// accountID = 998877;   We cant change a constant variable

 console.log(accountID)

 accountName = "Santosh"
 accountEmail = "santosh@gmail.com"
 accountCity = "Pune"
 accountNumber = 99217286;

 console.table([accountName, accountEmail, accountCity, accountNumber]);  //console.table for printing all values at one time