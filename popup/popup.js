const addTaskBtn = document.getElementById("add-task-btn");

let tasks = [];
addTaskBtn.addEventListener("click", () => addTask());

chrome.storage.sync.get(["tasks"], (res) => {
  tasks = res.tasks ? res.tasks : [];
  tasks.forEach((task, taskNum) => {
    renderTask(taskNum);
  });
});

function saveTasks() {
  chrome.storage.sync.set({
    tasks,
  });
}
function renderTask(taskNum) {
  const taskRow = document.createElement("div");

  const text = document.createElement("input");
  text.type = "text";
  text.placeholder = "Enter a task...";
  text.value = tasks[taskNum];
  text.addEventListener("change", () => {
    tasks[taskNum] = text.value;
    saveTasks();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => {
    deleteTask(taskNum);
  });

  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  const taskContainer = document.getElementById("task-container");
  taskContainer.appendChild(taskRow);
}

function addTask() {
  const taskNum = tasks.length;
  tasks.push("");
  renderTask(taskNum);
  saveTasks();
}

function deleteTask(taskNum) {
  tasks.splice(taskNum, 1);
  renderAllTasks();
  saveTasks();
}

function renderAllTasks() {
  const textContainer = document.getElementById("task-container");
  textContainer.textContent = "";

  tasks.forEach((taskText, taskNum) => {
    renderTask(taskNum);
  });
}
