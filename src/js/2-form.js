'use strict';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name = "email"]');

const messageInput = form.querySelector('textarea[name = "message"]');

const savetoLocalStorage = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const saveForm = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageInput.value = message;
    formData.email = email;
    formData.message = message;
  }
};
document.addEventListener('DOMContentLoaded', saveForm);

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  savetoLocalStorage();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!emailInput.value.trim() || !messageInput.value.trim()) {
    alert('Fill please all fields');
    return;
  }
  console.log('Form data:', formData);
  localStorage.removeItem('feedback-form-state');

  form.reset();
});

// let formData = { email: '', message: '' };

// const form = document.querySelector('.feedback-form');
// const emailInput = document.querySelector('input[name="email"]');
// const messageInput = document.querySelector('textarea[name="message"]');

// const saveToLocalStorage = () => {
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// };

// const saveForm = () => {
//   const savedData = localStorage.getItem('feedback-form-state');
//   if (savedData) {
//     const { email, message } = JSON.parse(savedData);
//     emailInput.value = email;
//     messageInput.value = message;
//     formData.email = email;
//     formData.message = message;
//   }
// };
// document.addEventListener('DOMContentLoaded', saveForm);

// form.addEventListener('input', () => {
//   const { name, value } = e.target;
//   formData[name] = value.trim();
//   saveToLocalStorage();
// });

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   if (!emailInput.value.trim() || !messageInput.value.trim()) {
//     alert('Fill please all fields');
//   } else {
//     console.log(formData);

//     localStorage.removeItem('feedback-form-state');
//     formData = { email: '', message: '' };
//     form.reset();
//   }
// });
