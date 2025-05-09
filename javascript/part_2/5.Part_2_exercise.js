/**
Mini Project: University Management System

Requirements:
You're going to build a system that manages people in a university: professors, students, and graduate students.

Classes to Implement:
1. Person (base class)
    name, age

    introduce() → "Hi, I'm <name> and I'm <age> years old."

2. Student (extends Person)
    _school, #studentID (private)

    getter/setter for studentID

    override introduce() → add "I study at <school>."

3. GraduateStudent (extends Student)
    #degree, with validation (PhD, Masters, MPhil)

    getter/setter for degree

    override introduce() → add "I'm pursuing a <degree> degree."

4. Professor (extends Person)
    department, #employeeID (private)

    static method: isProfessor(obj) → returns true/false

    override introduce() → add "I teach in the <department> department."
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

class Student extends Person {
  #studentID;
  constructor(name, age, school, studentID) {
    super(name, age);
    this._school = school;
    this.#studentID = studentID;
  }

  set school(school) {
    this._school = school;
  }

  set studentID(sID) {
    this.#studentID = sID;
  }

  get studentID() {
    return this.#studentID;
  }

  introduce() {
    return `${super.introduce()} I study at ${this._school}.`;
  }

  static isStudent(obj) {
    return obj instanceof Student;
  }
}

class GraduateStudent extends Student {
  #degree;
  static validDegrees = ["PhD", "Masters", "MPhil"];

  constructor(name, age, school, studentID, degree) {
    super(name, age, school, studentID);
    if (!GraduateStudent.validDegrees.includes(degree))
      throw new Error("Not valid degree");
    this.#degree = degree;
  }

  set degree(degree) {
    if (!GraduateStudent.validDegrees.includes(degree))
      throw new Error("Not valid degree");
    this.#degree = degree;
  }

  get degree() {
    return this.#degree;
  }

  introduce() {
    return `${super.introduce()} I'm pursuing a ${this.#degree} degree.`;
  }

  static isGraduateStudent(obj) {
    return obj instanceof GraduateStudent;
  }
}

class Professor extends Person {
  #employeeID;
  constructor(name, age, department, empID) {
    super(name, age);
    this.department = department;
    this.#employeeID = empID;
  }

  static isProfessor(obj) {
    return obj instanceof Professor;
  }

  introduce() {
    return `${super.introduce()} I teach in the ${this.department} department.`;
  }
}

const prof = new Professor("Dr. Smith", 50, "Physics", "EMP123");
const grad = new GraduateStudent("Alice", 28, "MIT", "STU456", "PhD");

console.log(prof.introduce());
// Hi, I'm Dr. Smith and I'm 50 years old. I teach in the Physics department.

console.log(grad.introduce());
// Hi, I'm Alice and I'm 28 years old. I study at MIT. I'm pursuing a PhD degree.

console.log(Professor.isProfessor(grad)); // false

//A bit challenging:

//Add university class that can hold and display the list of students and professors.

class University {
  constructor(name) {
    this.name = name;
    this.people = [];
  }

  addPeople(person) {
    if (!this.people.includes(person)) this.people.push(person);
  }

  listPeople() {
    this.people.forEach((p) => console.log(p.introduce()));
  }

  listProfessors() {
    this.people
      .filter((p) => Professor.isProfessor(p)) //checks if p is an instance of professor or not.
      .forEach((p) => {
        console.log(p.introduce()); //calls introduce method of each verified professor.
      });
  }

  listStudents() {
    this.people
      .filter((p) => Student.isStudent(p))
      .forEach((p) => {
        console.log(p.introduce());
      });
  }

  listGraduateStudents() {
    this.people
      .filter((p) => GraduateStudent.isGraduateStudent(p))
      .forEach((p) => console.log(p.introduce()));
  }
}

// Create some instances
const prof1 = new Professor("Dr. Smith", 50, "Physics", "EMP123");
const prof2 = new Professor("Dr. Jane", 45, "Computer Science", "EMP456");

const student1 = new Student("Bob", 20, "Harvard", "STU001");
const student2 = new Student("Carol", 22, "MIT", "STU002");

const grad1 = new GraduateStudent("Alice", 28, "MIT", "STU456", "PhD");
const grad2 = new GraduateStudent("Dan", 26, "Stanford", "STU789", "Masters");

// Create University and add people
const uni = new University("International University");

uni.addPeople(prof1);
uni.addPeople(prof2);
uni.addPeople(student1);
uni.addPeople(student2);
uni.addPeople(grad1);
uni.addPeople(grad2);

// List all people (raw list)
console.log("=== Raw People List ===");
uni.listPeople(); // Should show all objects in an array

// List Professors
console.log("\n=== Professors ===");
uni.listProfessors();
// Should print introduction of prof1 and prof2

// List Students (includes GraduateStudents)
console.log("\n=== Students ===");
uni.listStudents();
// Should print student1, student2, grad1, grad2 introductions

console.log("\n=== Graduate Students ===");
uni.listGraduateStudents();
// Should print grad1 and grad2 instruction only.
