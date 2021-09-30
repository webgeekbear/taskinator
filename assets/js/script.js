var buttonEl = document.querySelector("#save-task");

buttonEl.addEventListener("click", createTaskHandler);

function createTaskHandler() {
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "Hello World";
    taskItemEl.className = "task-item";

    var tasksEl = document.querySelector("#tasks-to-do");
    tasksEl.appendChild(taskItemEl);
}