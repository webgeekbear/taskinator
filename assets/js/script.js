var formEl = document.querySelector("#task-form");

formEl.addEventListener("submit", createTaskHandler);

function createTaskHandler(event) {
    event.preventDefault();
    
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "Hello World";
    taskItemEl.className = "task-item";

    var tasksEl = document.querySelector("#tasks-to-do");
    tasksEl.appendChild(taskItemEl);
}