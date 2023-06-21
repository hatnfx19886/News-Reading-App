'use strict';
// <li class="checked">Pay bills<span class="close">×</span></li>
// Choose Elements
const taskInput = document.getElementById('input-task');
const addBtn = document.getElementById('btn-add');
const todoList = document.getElementById('todo-list');

// Check login
let currentUser = JSON.parse(getFromStorage('current'));
if (!currentUser) {
  alert('Please Login to continue');
}

// Class Task
const Task = class {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
};
const getTaskCl = (oj) => new Task(oj.task, oj.owner, oj.isDone);

// Load todoArr from local storage
let todoArr = JSON.parse(getFromStorage('task'));
if (!todoArr) {
  todoArr = [];
} else todoArr = todoArr.map((oj) => getTaskCl(oj));

// Function show todo list
const renderTask = function () {
  todoList.innerHTML = '';
  for (let i = 0; i < todoArr.length; i++) {
    if (todoArr[i].owner === currentUser.username) {
      const html = `<li ${
        todoArr[i].isDone ? `class= "checked"` : ''
      }><p onclick="toggleTask(${i})">${
        todoArr[i].task
      }</p><span class="close" onclick="deleteTask(${i})">×</span></li>`;
      todoList.insertAdjacentHTML('beforeend', html);
    }
  }
};

// Delete task
const deleteTask = function (i) {
  todoArr.splice(i, 1);
  renderTask();
  saveToStorage('task', JSON.stringify(todoArr));
};

// Toggle task
const toggleTask = function (i) {
  todoArr[i].isDone = !todoArr[i].isDone;
  renderTask();
  saveToStorage('task', JSON.stringify(todoArr));
};

// Click Add
addBtn.addEventListener('click', function () {
  if (!taskInput.value) {
    alert('Please input for your Task');
  } else {
    const task = taskInput.value;
    todoArr.push(new Task(task, currentUser.username, false));
    taskInput.value = '';
    renderTask();
    saveToStorage('task', JSON.stringify(todoArr));
  }
});

// Show todo list
if (todoArr !== []) {
  renderTask();
}
