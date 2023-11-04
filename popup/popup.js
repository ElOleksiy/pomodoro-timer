const addTaskBtn = document.getElementById("add-task-btn");

const tasks = [];

function renderTask(taskNum) {
  const taskRow = document.createElement("div");
  const text = document.createElement("input");
  text.type = "text";
  text.placeholder = "Enter a task";
  text.value = tasks[tasks.length];

  text.addEventListener("change", () => {
    tasks[tasks.length] = text.value;
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => {
    deleteBtn(tasks.length);
  });

  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  const taskContainer = document.getElementById("task-container");
  taskContainer.appendChild(taskRow);
}

addTaskBtn.addEventListener("click", () => addTask());
function addTask() {
  tasks.push("");
  renderTask(tasks.length);
}

function deleteBtn(taskNum) {
  tasks.splice(taskNum, 1);
  renderTask();
}

function renderTask() {
  const taskContainer = document.getElementsById("task-container");
  taskContainer.textContent = "";
  tasks.forEach((taskText, taskNum) => {
    renderTask(taskNum);
  });
}

const startTimerBtn = document.getElementById("start-timer-btn");
