import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

fillTextareaForm();
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormText, 500));

function fillTextareaForm() {
  const savedData = getLocalData();
  for (let key of Object.keys(savedData)) {
    if (savedData[key]) {
      form.elements[key].value = savedData[key];
    }
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  const savedData = getLocalData();
  console.table(savedData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormText(event) {
  const savedData = getLocalData();
  savedData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}

function getLocalData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}
