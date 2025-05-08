/*
Task: Build a Simple Inheritance Model
Requirements:
Create a Person class with:

a name property

a method introduce() that returns:
"Hi, my name is <name>"

Create a Student class that extends Person and adds:

a school property

overrides introduce() to return:
"Hi, my name is <name> and I study at <school>"
(Hint: use super.introduce())

Create a GraduateStudent class that extends Student and adds:

a degree property

overrides introduce() to return:
"Hi, my name is <name>, I study at <school> and I'm pursuing a <degree> degree"
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
}

const grad = new GraduateStudent("Alice", "MIT", "PhD");
console.log(grad.introduce());
