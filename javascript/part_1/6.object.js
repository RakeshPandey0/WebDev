const person = {
  name: "Mark",
  age: 22,
  school: "The school",
  father: {
    name: "Harry",
    age: 48,
    salary: 10000,
  },
  address: "Somewhere",
};

console.log(person.name);
person.name = "Mark Edward Fisbach";
console.log(person.name);
delete person.age;
console.log(person); //age is deleted
console.log(person.college); //no college variable is defined so it is undefined

console.log(person.father.name);
console.log(person.mother?.name);
/*
The '?' will check whether mother variable exists in person or not.
If we don't use it, an error will be thrown because we are trying to access key 
inside a key that doesn't exist.
*/


//exploring contents of object
console.log("keys are: ", Object.keys(person)); //list all keys in an array
console.log("values are: ", Object.values(person)); //list all values in an array
console.log("entries: ", Object.entries(person)); //list all key-value pairs in an array

const personString = JSON.stringify(person); //convert object to a JSON string
console.log(personString);

const personObject = JSON.parse(personString); //convert JSON string back to object


//two same objects are not always equal
const firstPerson = {
  name: "rakes",
  age: 22,
};

const secondPerson = {
  name: "rakes",
  age: 22,
};

console.log(firstPerson == secondPerson); //false because the two objects point to different memory locations

console.log(JSON.stringify(firstPerson) == JSON.stringify(secondPerson)); //true because now we are comparing two JSON strings only.

const thirdPerson = firstPerson; //now the two objects point to the same memory location
console.log(firstPerson == thirdPerson); //true


// since both point at same memory, modifying one will modify the other
firstPerson.name = "Mark";
console.log(firstPerson);
console.log(thirdPerson);


// 'this' keyword
const person_2 = {
  name: "Mark",
  age: 22,
  school: "The school",
  father: {
    name: "Harry",
    age: 48,
    salary: 10000,
  },
  address: "Somewhere",
  greet: function () {
    // console.log("hello");
    console.log("Normal Func");
    console.log(this); //person. Own "this" of inside scope

    arrow_inside_normal = () => {
      console.log("Arrow func inside normal Func");
      console.log(this); //person. "this" of outside scope
    };

    arrow_inside_normal();
  },

  greetArrow: () => {
    console.log("Arrow Func");
    console.log(this); // this of outside scope i.e. window
  },
};
person_2.greet();
person_2.greetArrow();
