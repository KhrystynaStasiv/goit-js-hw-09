'use strict';

const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

form.addEventListener('input', event => {
  formData.email = emailInput.value.trim();
  formData.message = messageInput.value.trim();
  saveToLS('feedback-form-state', formData);
});

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
  } else {
    console.log({ email, message });
    form.reset();
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    console.log(formData);
  }
}

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}
function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}
