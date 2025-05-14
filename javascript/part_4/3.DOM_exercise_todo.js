let tasks = [];
let addEdit = true;
let taskIndex = null;
let taskCount = null;
const deleteButton = `<button class="delete">Delete</button>`;
const editButton = `<button class="edit">Edit</button>`;

const errorText = document.getElementById("error");
const taskList = document.querySelector("ul");
const addEditButton = document.getElementById("add/edit");
const taskInput = document.getElementById("taskInput");

//display tasks
function placeTasks() {
  taskCount = tasks.length;
  document.getElementById("count").textContent = taskCount;
  taskList.innerHTML = tasks
    .map((task, index) => {
      const li = `<li class="task-item" id="${index}">${task}</li>${deleteButton}${editButton}`;
      return li;
    })
    .join("");
}
placeTasks();

document.addEventListener("click", (e) => {
  //adding/editing tasks
  if (e.target.id === "add/edit") {
    if (taskInput.value === "") {
      errorText.textContent = "Enter a task";
      errorText.style.display = "block";
    } else {
      errorText.textContent = "";
      errorText.style.display = "none";
      if (addEdit) {
        tasks.push(taskInput.value);
        taskInput.value = "";
      } else {
        tasks[taskIndex] = taskInput.value;
      }
    }
  }

  //removing tasks
  if (e.target.matches("button.delete")) {
    const taskIndex = e.target.previousSibling.id;
    tasks.splice(taskIndex, 1);
  }

  //editing tasks
  if (e.target.matches("button.edit")) {
    taskIndex = e.target.previousSibling.previousSibling.id;
    taskInput.value = tasks[taskIndex];
    addEditButton.textContent = "Edit Task";
    addEdit = false;
  }

  placeTasks();
});
