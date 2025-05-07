function greet(name){
    console.log(`Hello ${name}!`);
    // alert(`Hello ${name}!`);
}

//this is called function overloading
function greet(name, phrase){
    phrase = phrase ?? "Hello"; //null coalescing operator '??' doesn't allow undefined value
    console.log(`${phrase} ${name}!`);

}

let ToGreet = "Mark";
// let ToGreet = prompt("Enter your name");
greet(ToGreet);
greet(ToGreet, "Hi");


function add(a, b=3){
    return a + b;
}
sum = add(2, 3);
console.log(sum);

//In JS, we can treat functions the same way as variables

//function assignment:
let sayHello = function(){
    console.log("Hello!");
}

let sayHelloAnother = sayHello;

console.log("sayHello:");
sayHello(); //this will print "Hello"
console.log("sayHelloAnother:");
sayHelloAnother(); //this will also print "Hello"

console.log("----------------Higher Order Function:--------------------")
/*
function as argument: The function that takes other function as argument is called HIGHER ORDER FUNCTION 
and the function that is passed as argument is called CALLBACK FUNCTION

Also we can return a function
*/

function higherOrderFunc(callBackFunction){
    callBackFunction();

    let returnedFunc = function(){
        console.log("returned function");
    }

    return returnedFunc;
}

let returnedFunc =higherOrderFunc(sayHello); 
returnedFunc();


//ternary operator and functions:

age = 12;

let welcome = (age < 18)? function(){console.log("Hello you are below 18")}:function(){console.log("Hello you are above 18")}
welcome();

//arrow notation of function:

let add_second = (a, b) =>{
    return a + b
}

//for a single lined function, we can omit the curly braces

let say_haloo = (name)=> console.log(name + " Haloo!");

console.log(add_second(2, 3))
say_haloo("Rakesh");



// let ask = (question, yes, no) => confirm(question)?yes():no()

// ask("are you sure you want to delete?", ()=>console.log("delete"), ()=>console.log("don't delete"))