let addEdit = true;
let taskIndex = null;
let taskCount = null;

let tasks = localStorage.getItem("tasks");
tasks = tasks?tasks.split(","):[];
const errorText = document.getElementById("error");
const taskList = document.querySelector("ul");
const addEditButton = document.getElementById("addEdit");
const taskInput = document.getElementById("taskInput");

//display tasks
function placeTasks() {
  tasks.sort();
  taskCount = tasks.length;
  document.getElementById("count").textContent = taskCount;
  taskList.innerHTML = tasks
    .map((task, index) => {
      return `
    <li class="task-item" id="${index}">
      ${task}
      <button class="delete">Delete</button>
      <button class="edit">Edit</button>
    </li>
  `;
    })
    .join("");
}
placeTasks();

document.addEventListener("click", (e) => {
  //adding/editing tasks
  if (e.target.id === "addEdit") {
    if (taskInput.value === "") {
      errorText.textContent = "Enter a task";
      errorText.style.display = "block";
    } else {
      errorText.textContent = "";
      errorText.style.display = "none";
      if (addEdit) {
        tasks.push(taskInput.value);
      } else {
        tasks[taskIndex] = taskInput.value;
        addEditButton.textContent = "Add Task";
        addEdit = true;
      }
      taskInput.value = "";
      localStorage.setItem("tasks", tasks);
    }
  }

  //removing tasks
  if (e.target.matches("button.delete")) {
    const li = e.target.closest("li");
    tasks.splice(li.id, 1);
    localStorage.setItem("tasks", tasks);
  }
  //editing tasks
  if (e.target.matches("button.edit")) {
    const li = e.target.closest("li");
    taskIndex = li.id;
    taskInput.value = tasks[taskIndex];
    addEditButton.textContent = "Edit Task";
    addEdit = false;
  }

  placeTasks();
});
