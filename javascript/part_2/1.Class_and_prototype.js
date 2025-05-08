//constructor function

function Car(make, model) {
  this.make = make;
  this.model = model;
}

const car1 = new Car("Toyota", "Corolla");

//ES6 class
class CarClass {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `${this.make} ${this.model}`;
  }
}

const car2 = new CarClass("Honda", "Civic");

console.log(car1, car2);

//methods are added manually to the prototype in constructor function
//to add methods to class, we simply write the method inside the class body and they are automatically put in the prototype

//Add method to prototype for constructor function
Car.prototype.getDetails = function () {
  return `${this.make} ${this.model}`;
};

//Add method to class

console.log(car1.getDetails());
console.log(car2.getDetails());

console.log(car1.__proto__);
console.log(car2.__proto__);

//Prototype chain
//every object in JS has an internal link to another object called its prototype(__proto__). This chain continues until it ends at null

//Example
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound.`;
};

const dog = new Animal("Rex");

console.log(dog.speak()); //Rex makes a sound.
console.log(dog.__proto__ === Animal.prototype); //true
console.log(Animal.prototype.__proto__ === Object.prototype); //true
console.log(Object.prototype.__proto__); //null

//the chain is:
// dog --> Animal.prototype --> Object.prototype --> null

//exercise

class Vehicle {
  constructor(type) {
    this.type = type;
  }
  move() {
    return `${this.type} moves.`;
  }
}

class Cars extends Vehicle {
  constructor(type, brand) {
    super(type); //call to parent constructor
    this.brand = brand;
  }
  move() {
    return `${this.brand} ${super.move()}`;
  }
}

const toyota = new Cars("car", "Toyota");
console.log(toyota.move());

console.log(toyota.hasOwnProperty('move')); // false
console.log(toyota.__proto__.hasOwnProperty('move')); // true
console.log(toyota.__proto__.__proto__.hasOwnProperty('move')); // true if Vehicle.prototype has it
