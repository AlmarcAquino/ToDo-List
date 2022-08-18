// SELECTORS
const formInputEl = document.querySelector('#todo__form--input');
const formSubmitEl = document.querySelector('#todo__form--submit');
const todoListEl = document.querySelector('.todo__list');

// EVENT LISTENERS
formSubmitEl.addEventListener('click', addNewTask);

// FUNCTIONS
function addNewTask(event) {
  // Stop page refresh on submit
  event.preventDefault();

  // Check for blank submission
  if (formInputEl.value === '') {
    console.log('thats blank please fill it in');

    return;
  }

  // Create new todo
  const newTaskContainer = document.createElement('div');
  newTaskContainer.classList.add('todo');

  const newTaskTitle = document.createElement('li');
  newTaskTitle.innerText = formInputEl.value;

  const checkButton = document.createElement('button');
  checkButton.innerHTML = `<i class="fa-solid fa-plus"></i>`;

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  newTaskContainer.append(newTaskTitle, checkButton, deleteButton);
  todoListEl.append(newTaskContainer);
  // Reset form input
  formInputEl.value = '';
}
