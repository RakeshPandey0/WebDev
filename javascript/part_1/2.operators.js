//Basic Operators:
//1. Arithmetic: +, -, *, /, %
//2. Relational: ==, ===, !=, !==, <, >, <=, >=
//3. Logical: &&, ||, !
//4. Bitwise: &, |, ^, ~, <<, >>, >>>
//5. Ternary: ?:
//6. Assignment: =, +=, -=, *=, /=, %=
//7. Comma: ,
//8. Conditional: ?:

// Something different in JS: Rest and spread operators (...)

//Example of spread:
console.log("spread operator");
const numbers = [1, 2, 3, 4, 5];
console.log("numbers:", numbers);
const newNumbers = [...numbers, 6, 7, 8, 9, 10];
console.log("newNumbers", newNumbers);

//Example of rest:
console.log("rest operator");
const [a, b, ...rest] = newNumbers;
console.log(a, b, rest);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const newArray = [...array, 13, 14, 15];
console.log(newArray);

const [first, second, third, fourth, ...remaining] = newArray;
console.log(
  `first: ${first}\nsecond: ${second}\nthird: ${third}\nfourth: ${fourth}\nremaining:${remaining}`
);
