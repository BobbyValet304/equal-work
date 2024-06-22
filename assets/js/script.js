// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 0;

function saveTask(task) {
  // Todo: save the new task object to localStorage
  taskList.push(task);
  // Todo: save the taskList and nextId to
  localStorage.setItem("tasks", JSON.stringify(taskList));
  localStorage.setItem("nextId", JSON.stringify(nextId));
  // Todo: re-render the task list
  renderTaskList();
}
// Todo: create a function to generate a unique task id
function generateTaskId() {
  return nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  console.log(dayjs());
  let today = dayjs();
  cardColor = "";
  console.log(task.dueDate);
  console.log(today);
  if (today.isAfter(task.dueDate, "day")) {
    console.log("This task is overdue");
    cardColor = "bg-danger";
  }
  if (today.isSame(task.dueDate, "day")) {
    cardColor = "bg-warning";
  }
  if (today.isBefore(task.dueDate, "day")) {
    cardColor = "bg-success";
  }

  return `
    <div class="card ${cardColor}" id="${task.id}">
      <div class="card-body">
        <h5 class="card-title">${task.title}</h5>
        <p class="card-text">${task.description}</p>
        <p class="card-text">${task.dueDate}</p>
      </div>
    </div>
    `;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  $("#todo-cards").empty();
  for (let index = 0; index < taskList.length; index++) {
    //console.log(taskList[index]);
    const createCard = createTaskCard(taskList[index]);
    //console.log(createCard);
    $("#todo-cards").append(createCard);
  }
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  event.preventDefault();
  let taskTitleInput = $("#task-title-input");
  let taskDateInput = $("#task-date-input");
  let taskDescriptionInput = $("#task-description-input");
  //console.log(taskTitleInput.val());
  //console.log(taskDateInput.val());
  //console.log(taskDescriptionInput.val());
  let newTask = {
    id: generateTaskId(),
    title: taskTitleInput.val(),
    dueDate: taskDateInput.val(),
    description: taskDescriptionInput.val(),
  };
  taskTitleInput.val("");
  taskDateInput.val("");
  taskDescriptionInput.val("");
  saveTask(newTask);
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  let addTaskButton = $("#add-task-button");
  addTaskButton.on("click", handleAddTask);
  renderTaskList();
});
