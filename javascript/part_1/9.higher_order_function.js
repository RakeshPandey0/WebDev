/* 
Higher order functions

Functions that take other functions as arguments and/or return function as result.

Higher order functions in JS:

map()
filter()
reduce()
forEach()
find()
slice()
splice()
pop()
push()
shift()
unshift()
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

console.log("Total:",totalPrice);
