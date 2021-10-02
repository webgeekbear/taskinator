var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

formEl.addEventListener("submit", taskFormHandler);

// Create a task element
function createTaskEl(taskDataObj) {
    // Create a list item
    let listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // Create div to hold task info andd add to list item
    let taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // Add entire item to list
    tasksToDoEl.appendChild(listItemEl);
}

// Handle task form event
function taskFormHandler(event) {
    event.preventDefault(); // Prevent screen refresh

    let taskNameInput = document.querySelector("input[name='task-name']").value;
    let taskTypeInput = document.querySelector("select[name='task-type']").value;

    // Package up data as an object
    let taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj);
}