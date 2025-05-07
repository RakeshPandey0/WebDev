// Exercise 1: Variables and Data Types
console.log("Exercise 1: Variables and Data Types")

// Declare variables
let fname = "Alice"; // string
let age = 25; // number
let isStudent = true; // boolean
let hobbies = ["reading", "hiking", "coding"]; // array
let address = { city: "Kathmandu", country: "Nepal" }; // object

// Print variables
console.log("Name:", fname);
console.log("Age:", age);
console.log("Is student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Address:", address);

console.log("");
console.log("");

// Exercise 2: Data Types
console.log("Exercise 2: Data Types")

function printDataType(variable) {
    console.log(typeof variable);
}

printDataType("Hello, world!"); // string
printDataType(42); // number
printDataType(false); // boolean
printDataType([1, 2, 3]); // object
printDataType({ key: "value" }); // object

console.log("");
console.log("");

// Exercise 3: Type Conversion
console.log("Exercise 3: Type Conversion")

// Convert number to string
let num = 100;
let numToStr = String(num);
console.log(numToStr); // "100"
console.log(typeof numToStr); // string

// Convert string to number
let str = "123";
let strToNum = Number(str);
console.log(strToNum); // 123
console.log(typeof strToNum); // number

// Convert boolean to string
let bool = true;
let boolToStr = String(bool);
console.log(boolToStr); // "true"
console.log(typeof boolToStr); // string

// Convert string to boolean
let strBool = "true";
let strToBool = (strBool === "true");
console.log(strToBool); // true
console.log(typeof strToBool); // boolean

console.log("");
console.log("");

//Exercise 4: Use Operators
console.log("Exercise 4: Use Operators")

//Arithemic Operators
console.log("Arithemic Operators")
let a = 10;
let b = 3;

console.log("Addition: ", a+b); //13
console.log("Subtraction: ", a-b); //7
console.log("Multiplication: ", a*b); //30
console.log("Division: ", a/b); //3.3333333333333335
console.log("Modulus: ", a%b); //1

//Comparison Operators
console.log("Comparison Operators")
console.log("Equal to: ", a == b); //false
console.log("Not equal to: ", a != b); //true
console.log("Strict equal to: ", a === b); //false
console.log("Strict not equal to: ", a !== b); //true
console.log("Greater than: ", a > b); //true
console.log("Less than: ", a < b); //false
console.log("Greater than or equal to: ", a >= b); //true
console.log("Less than or equal to: ", a <= b); //false

console.log("");
console.log("");

//Logical Operators
console.log("Logical Operators")
let x = true;
let y = false;

console.log("x: ", x, "\ny: ", y);

console.log("AND:", x && y); // false
console.log("OR:", x || y); // true
console.log("NOT x:", !x); // false
console.log("NOT y:", !y); // true

console.log("");
console.log("");