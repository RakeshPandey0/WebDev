// Control Statements in JS



// Conditional Statements
// 1. if/else statement

x = 10
y = 20

if (x > y) {
    console.log("x is greater than y");
} else {
    console.log("x is less than y");
}

// 2. switch statement

day = 1
switch (day) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Invalid day")
}



// Loops
// 1. for loop
const temperatures = [72, 75, 79, 80, 68];
for (let i = 0; i < temperatures.length; i++) {
    console.log(`Day ${i + 1}: ${temperatures[i]}°F`);
}

// 2. for-in loop
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    job: "Software Engineer"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 3. for-of loop
const books = [
    { title: "The Cat in the Hat", author: "Dr. Seuss" },
    { title: "The Little Prince", author: "Antoine de Saint-Exupery" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" }
];

for (const book of books) {
    console.log(`${book.title} by ${book.author}`);
}

// Remember 'in' is used for objects and 'of' is used for arrays

// 4. for-each loop
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const fruitPrices = { apple: 1.2, banana: 0.5, cherry: 2.5, date: 3.0, elderberry: 1.5 };

fruits.forEach((fruit) => {
    console.log(`The price of ${fruit} is $${fruitPrices[fruit]}`);
});

// 4. while loop
let num = 0;
while (num < 10) {
    console.log(`Number is ${num}`);
    num++;
}

// 5. do-while loop
let num2 = 0;
do {
    console.log(`Number is ${num2}`);
    num2++;
} while (num2 < 10);

// Jump Statements
// 1. break: exit the loop

// 2. continue: skip the current iteration

// 3. return: exit the function
