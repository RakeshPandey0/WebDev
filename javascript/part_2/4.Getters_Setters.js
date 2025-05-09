//Getters and setters are special methods that look like properties but let you control access to private or protected fields.

class Example {
  #value;
  constructor(val) {
    this.#value = val;
  }

  get value() {
    return this.#value;
  }

  set value(val) {
    if (val < 0) throw new Error("Negative value not allowed.");
    this.#value = val;
  }
}

const e = new Example(10);
console.log(e.value); //calls getter - 10
e.value = 20; //calls setter
console.log(e.value); //20

//Note: we donot use parantheses. e.value (not e.value())

/*
Exercise:
Update your GraduateStudent class:

1. Replace getDegree() with a getter.
2. Add a setter to update the #degree (e.g., only allow “PhD”, “Masters”, “MPhil”).
3. Replace getSchool() with a getter for _school too.
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
    this._school = school;
  }

  get school() {
    return this._school;
  }

  introduce() {
    return `${super.introduce()} and I study at ${this.school}`;
  }
}

class GraduateStudent extends Student {
  #degree;
  static validDegrees = ["PhD", "Masters", "MPhil"];
  constructor(name, school, degree) {
    super(name, school);
    this.#degree = degree;
  }

  set degree(degree) {
    if (!GraduateStudent.validDegrees.includes(degree)) {
      throw new Error("Not a valid degree");
    }
    this.#degree = degree;
  }

  get degree() {
    return this.#degree;
  }

  introduce() {
    return `${super.introduce()} and I'm pursuing a ${this.degree} degree`;
  }
}

const grad = new GraduateStudent("Alice", "MIT", "PhD");

console.log(grad.degree);
grad.degree = "Masters";
// grad.degree = "Bachelors"; //throws error

console.log(grad.school);
