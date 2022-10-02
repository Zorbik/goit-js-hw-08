import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

fillTextareaForm();
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormText, 500));

function fillTextareaForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  console.table(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormText(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
