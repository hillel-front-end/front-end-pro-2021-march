console.log('Lecture 20. Storage');

/*

Lecture 20. Storage

Структура:

  – Web Developer Path –> Storage
  – WebStorage + Cookies
    – LocalStorage
    – SessionStorage
    – Cookies
    – Состояние приложения
    – Пользовательское Тестирование (User Testing)

  – JSON
  – Fetch + XHR

 */


const storageKey = 'tasks';

const list1 = document.querySelector('#taskListLocalStorage');
const list2 = document.querySelector('#taskListSessionStorage');
const taskInput = document.querySelector('#taskInput');

const clearButton = document.querySelector('#clearButton');
const saveButton = document.querySelector('#saveButton');

const list1Tasks = getLocalStorageTasks();
const list2Tasks = getSessionStorageTasks();

list1Tasks.forEach(function(taskText) {
  const element = createTaskElement(taskText);
  list1.append(element);
});

list2Tasks.forEach(function(taskText) {
  const element = createTaskElement(taskText);
  list2.append(element);
});

saveButton.addEventListener('click', function() {
  list1Tasks.push(taskInput.value)
  list2Tasks.push(taskInput.value)

  const element1 = createTaskElement(taskInput.value);
  list1.append(element1);

  const element2 = createTaskElement(taskInput.value);
  list2.append(element2);

  saveTasks()
  taskInput.value = '';
})

clearButton.addEventListener('click', function() {
  clearSavedTasks();
  list1.innerHTML = '';
  list2.innerHTML = '';
})

function clearSavedTasks() {
  localStorage.removeItem(storageKey);
  sessionStorage.removeItem(storageKey);
}

function saveTasks() {
  localStorage.setItem(storageKey, JSON.stringify(list1Tasks));
  sessionStorage.setItem(storageKey, JSON.stringify(list2Tasks));
}

function getLocalStorageTasks() {
  const tasks = localStorage.getItem(storageKey);
  if (!tasks) {
    return [];
  }
  return JSON.parse(tasks);
}

function getSessionStorageTasks() {
  const tasks = sessionStorage.getItem(storageKey);
  if (!tasks) {
    return [];
  }
  return JSON.parse(tasks);
}

function createTaskElement(taskText) {
  const listItem = document.createElement('li');
  listItem.innerHTML = taskText;
  return listItem;
}
