import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const saveFormState = throttle(event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

function fillFormFields() {
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
}
const onFormSubmit = event => {
  event.preventDefault();
  console.log('Form submitted');
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};

  console.log(formData);
};

form.addEventListener('input', saveFormState);
fillFormFields();
form.addEventListener('submit', onFormSubmit);
