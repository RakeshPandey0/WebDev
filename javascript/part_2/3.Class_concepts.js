//static method: belongs to the class itself, not to instances of the class

class Dog {
  bark() {
    return "Woof!";
  }

  static info() {
    return "Dogs are loyal animals.";
  }
}

const d = new Dog();

console.log(d.bark()); //Works - instance method
// console.log(d.info()) //Error - not accessible from instance
console.log(Dog.info()); //Works - class method

/*
Exercise:
Extend the previous model (Person → Student → GraduateStudent) with a static method.
Add a static method called isGraduateStudent(obj) in the GraduateStudent class that:

    1. Returns true if the object is an instance of GraduateStudent.
    2. Returns false otherwise.
*/

class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `Hi, my name is ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, school) {
    super(name);
    this.school = school;
  }

  introduce() {
    return `${super.introduce()} and I study at ${this.school}`;
  }
}

class GraduateStudent extends Student {
  constructor(name, school, degree) {
    super(name, school);
    this.degree = degree;
  }

  introduce() {
    return `${super.introduce()} and I'm pursuing a ${this.degree} degree`;
  }

  static isGraduateStudent(object) {
    return object instanceof GraduateStudent;
  }

  //static factory method for creating instances
  static fromObject(obj) {
    return new GraduateStudent(obj.name, obj.school, obj.degree);
  }
}

const grad = new GraduateStudent("Alice", "MIT", "PhD");
console.log(GraduateStudent.isGraduateStudent(grad));

const p = new Person("Bob");
console.log(GraduateStudent.isGraduateStudent(p));

const data = { name: "Harry", school: "VIT", degree: "Msc" };

//creating object using static factory method.
const gradStaticFactory = GraduateStudent.fromObject(data);
console.log(gradStaticFactory.introduce());

//Private fields (Truely private in JS)
//Introduced in ES2022, private fields uses # symbol and are inaccessible outside the class.

class BankAccount {
  #balance;

  constructor(initialAmount) {
    this.#balance = initialAmount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance());
//console.log(account.#balance); //shows error #balance is not accessible outside the scope of class BankAccount.

//Protected fields (javascript doesn't have true protected but we can simulate it)
/*
1. Underscore naming (_likeThis) - a conversion, not enforced
2. Protected via closure - using factory functions.
3. Using protected fields via symbols or WeakMaps(advanced).
*/

//Simulated protected

class Animal {
  constructor() {
    this._type = "mammal"; //simulated protected
  }
}

class Dog2 extends Animal {
  revealType() {
    return `This is a ${this._type}`;
  }
}

const dg = new Dog2();
console.log(dg.revealType());
console.log(dg._type); //shows the type as mammal. Works -> but should be treated as internal.

/*
Exercise:

Modify the GraduateStudent class:

1. Make degree a private field.
2. Add _school as a simulated protected field.
3. Add methods to access both safely.
*/

class Person2 {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `Hi, my name is ${this.name}`;
  }
}

class Student2 extends Person2 {
  constructor(name, school) {
    super(name);
    this._school = school;
  }

  introduce() {
    return `${super.introduce()} and I study at ${this._school}`;
  }

  getSchool() {
    return this._school;
  }
}

class GraduateStudent2 extends Student2 {
  #degree;
  constructor(name, school, degree) {
    super(name, school);
    this.#degree = degree;
  }

  introduce() {
    return `${super.introduce()} and I'm pursuing a ${this.#degree} degree`;
  }

  getDegree() {
    return this.#degree;
  }
}

const grad2 = new GraduateStudent2("Alice", "MIT", "PhD");

console.log(grad2.getDegree()); // PhD
console.log(grad2.getSchool()); // MIT

console.log(grad2.degree); // undefined
console.log(grad2._school); // Works but marked as protected
