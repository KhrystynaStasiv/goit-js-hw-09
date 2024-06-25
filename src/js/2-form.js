'use strict';

const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

form.addEventListener('input', () => {
  formData.email = e.currentTarget.email.value.trim();
  formData.message = e.currentTarget.message.value.trim();
  saveToLS('feedback-form-state', formData);
});

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  e.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

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
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
