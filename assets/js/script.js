// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

function saveTask(task) {
  // Todo: create a new task object
  let newTask = {};
  // Todo: save the new task object to localStorage
  localStorage.setItem("tasks", JSON.stringify(taskList));
  localStorage.setItem("nextId", JSON.stringify(nextId));
  // Todo: re-render the task list
  renderTaskList();
}
// Todo: create a function to generate a unique task id
function generateTaskId() {}

// Todo: create a function to create a task card
function createTaskCard(task) {}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  let taskTitleInput = $("#task-title-input");
  let taskDateInput = $("#task-date-input");
  let taskDescriptionInput = $("#task-description-input");
  console.log(taskTitleInput.val());
  console.log(taskDateInput.val());
  console.log(taskDescriptionInput.val());
  let newTask = {
    id: generateTaskId(),
    title: taskTitleInput.val(),
    dueDate: taskDateInput.val(),
    description: taskDescriptionInput.val(),
  };
  saveTask(newTask);
  renderTaskList();
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  let addTaskButton = $("#add-task-button");
  addTaskButton.on("click", handleAddTask);
});
