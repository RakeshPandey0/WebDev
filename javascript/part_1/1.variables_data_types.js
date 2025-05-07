/*
Variables:

1. Let : Declaring variables that can change
2. Const : Declaring variables that cannot change
3. Var : Older way of declaring variables that can change

'Var' not in use nowadays because of some issues.(more explanation in code below)
*/

//Declaring variables:

let f_name = "Alan";
const age = 22;
var address = "Somewhere";

console.log("Name:", f_name, "Age", age, "Address:", address); //unformatted output
console.log(`Name:${f_name} \nAge:${age} \nAddress:${address}`); //formatted output

//we can change values of 'var' and 'let'
f_name = "Mark";
address = "Here";
console.log(`Name:${f_name} \nAge:${age} \nAddress:${address}`); //formatted output

//but we cannot change the value of 'const'
//age = 24 //this line will throw error in the console because we cannot assign to constant values.

//Why 'let' instead of 'var'

/* 
1. Scope
Scope of a variable defines where in the code a variable can be accessed or modified.

There are 3 types of scopes:
. Global Scope: variables declared outside any function or block is accessible anywhere
. Function Scope: variables declared inside function is only accessible within that function.
. Block Scope: variables declared inside a block(like a loop or conditional statement) are accessible within that block only.

--- var is a function scope ---
--- let(and const) is a block scope ---
Example:
*/
if (true) {
  var x = 10;
  let y = 20;
}

console.log("x: ", x); // Outputs: 10
// console.log("y: ",y);  // Error: y is not defined
//Hence let is block scope

function display() {
  if (true) {
    var z = 10;
  }
  console.log(`Inside display function: ${z}`);
}

// console.log(`Outside display function: ${z}`); //This line will give error
display();
//Hence var is function scope

/*
2. Hoisting
Hoisting refers to when javascript moves the variable and function declaration to the top of their scope before executing the code.

var and hoisting:
variables declared with var are hoisted on top of their scope and initialized with 'undefined' i.e. it will have a value 'undefined' until the actual assignment is reached.

let and hoisting:
variables declared with let are not hosited hence showing error if the variable is accessed before its initialization
*/
console.log(a); // Outputs: undefined (hoisted but uninitialized)
var a = 5;

// console.log(b);  // Error: Cannot access 'b' before initialization
// let b = 10;

/* 
Data Types:
1. Primitive
number
string
boolean
null
undefined
BigInt

2. Non-Primitive
Object
Array
Function
RegExp
Date
Error
*/

//primitive data types:
const bigNumber = 12345678901234567890n;
address = "address";
const isActive = true;
const college = null;
const graduation = undefined;

console.log(
  address,
  ": ",
  typeof address,
  "\n",
  age,
  ": ",
  typeof age,
  "\n",
  bigNumber,
  ": ",
  typeof bigNumber,
  "\n",
  isActive,
  ": ",
  typeof isActive,
  "\n",
  college,
  ": ",
  typeof college,
  "\n",
  graduation,
  ": ",
  typeof graduation,
  "\n"
);

//non-primitive data types:

const person = {
  name: "John",
  age: 30,
  address: "123 Main St.",
};
const colors = ["red", "green", "blue"];
const greet = function () {
  console.log("Hello");
};
const date = new Date();
const error = new Error("This is an error");
const regex = /abc/;

console.log(`Person: ${JSON.stringify(person)} \nType: ${typeof person}\n`);
console.log(`Colors: ${colors} \nType: ${typeof colors}\n`);
console.log(`Greet: ${greet} \nType: ${typeof greet}\n`);
console.log(`Date: ${date} \nType: ${typeof date}\n`);
console.log(`Error: ${error} \nType: ${typeof error}\n`);
console.log(`Regex: ${regex} \nType: ${typeof regex}\n`);
