import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('.feedback-form input');
const messageInput = form.querySelector('.feedback-form textarea');

const formData = {};

const saveFormState = throttle(event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

function fillFormFields() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  emailInput.value = savedData.email || '';
  messageInput.value = savedData.message || '';
}
const onFormSubmit = event => {
  event.preventDefault();
  console.log('Form submitted');
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  const submittedData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(submittedData);
};

form.addEventListener('input', saveFormState);
fillFormFields();
form.addEventListener('submit', onFormSubmit);

// mport throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');

// const saveFormState = throttle(() => {
//   const formData = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }, 500);

// const fillFormFields = () => {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//     const formData = JSON.parse(savedMessage);
//     emailInput.value = formData.email;
//     messageInput.value = formData.message;
//   }
// };
// const onFormSubmit = event => {
//   event.preventDefault();
//   const formData = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   console.log(formData);
//   form.reset();
//   localStorage.removeItem(STORAGE_KEY);
// };

// form.addEventListener('input', saveFormState);
// fillFormFields();
// form.addEventListener('submit', onFormSubmit);

// form.addEventListener('submit', onFormSubmit);
// emailInput.addEventListener('input', onTextareaMail);
// messageInput.addEventListener('input', onTextareaInput);

// pupulateTexteria();

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log('object');
//   event.target.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(event) {
//   const message = event.target.value;
//   localStorage.setItem(STORAGE_KEY, message);

//   function onTextareaMail(event) {
//     const mail = event.target.value;
//     localStorage.setItem(STORAGE_KEY, mail);
//   }
// }

// function pupulateTexteria() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     console.log(savedMessage);
//     messageInput.value = savedMessage;
//   }
// }

// const fillFormFields = () => {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     const formData = JSON.parse(savedMessage);
//     emailInput.value = formData.email;
//     messageInput.value = formData.message;
//   }
// };
// document.addEventListener('DOMContentLoaded', fillFormFields);

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   localStorage.removeItem('feedback-form-state');

//   emailInput.value = '';
//   messageInput.value = '';

//   const formData = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   console.log(formData);
// });
