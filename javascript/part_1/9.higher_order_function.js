/* 
Higher order functions

Functions that take other functions as arguments and/or return function as result.
*/

let sayHello = function () {
  console.log("Hello.");
};

function highOrdeFunc(callBackFunction) {
  callBackFunction();

  let returnedFunc = function () {
    console.log("test");
  };

  return returnedFunc;
}

let returnedFunc = highOrdeFunc(sayHello); //the callback function is now sayHello()

returnedFunc();

/*
Higher order functions in JS:

map()
filter()
reduce()
forEach()
find()
push()
pop()
shift()
unshift()
slice()
splice()
*/

const products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 300 },
  { name: "Tablet", price: 500 },
  { name: "Minitor", price: 600 },
];

//map() function
//suppose we want to give 10% discount on every item

const discountedProducts = products.map((product) => {
  product.price *= 0.9;
  return product;
});

console.log(discountedProducts);

//filter() function
//we want only the products whose price is less than 500.

const affordableProducts = discountedProducts.filter(
  (product) => product.price < 500
);

console.log(affordableProducts);

//reduce() function
//Calculate the total price

const totalPrice = affordableProducts.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log("Total:", totalPrice);

//forEach() function
//Show the actual price and discounted price for each product. We need to use both objects.

products.forEach((product) => {
  console.log(`
    Product: ${product.name}
    Price: ${product.price}
    Discounted Price: ${product.price * 0.9}
    `);
});

//find() function
//find product that costs more than 300

products.find((product) => {
  return product.price > 300;
});

/*
We can also write the above function as:
const expensivePRoducts=products.find((product)=>product.price>300)
*/

//push() and pop()

//create an empty array
const arr = new Array();

arr.push("Alice");
arr.push("Bob");
arr.push("Mark");
arr.push("Harry");
arr.push("Henry");
arr.push("Alan");
arr.push("Dillian");
arr.push("Harper");
arr.push("Charles");

console.log("original array:\n", arr);

arr.pop();
console.log("array after one pop():\n", arr);

//shift() and unshift()

const removedValue = arr.shift(); //<- Removes the first element from the array
console.log("array after shift():\n", arr);
console.log("removed value:", removedValue);

const newLenght = arr.unshift("Josh"); //<-adds Josh to the beginning of the array
console.log(`array after unshift("Josh"):\n`, arr);
console.log("new length of array: ", newLenght);

//slice()
//Returns shallow copy of a portion of array without modifying the original array

const fruits = ["apple", "banana", "cherry", "date"];
const sliced = fruits.slice(1, 3); //from slice from index 1(included) to index 3(not included)
console.log("sliced:\n", sliced);
console.log("fruits:\n", fruits); //not affected

//splice
//Modifies original array by adding, removing or replacing

//removing elements
const removed = fruits.splice(1, 2); // Removes 2 items starting at index 1
console.log(removed); // ["banana", "cherry"]
console.log(fruits); // ["apple", "date"]

//add/replace elements
fruits.splice(1, 0, "banana", "cherry"); // Add items at index 1 without removing
console.log(fruits); // ["apple", "banana", "cherry", "date"]
