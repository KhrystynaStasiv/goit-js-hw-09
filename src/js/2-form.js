'use strict';

const LS_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };

const formElem = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name = "email"]');
const messageInput = form.querySelector('textarea[name = "message"]');

formElem.addEventListener('input', () => {
  const formData = new FormData(formElem);
  const email = formData.get('email');
  const message = formData.get('message');
  saveToLS('email', email);
  saveToLS('message', message);
});

formElem.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  e.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  saveToLS('email', email);
  saveToLS('message', message);
  saveToLS('formData', data);

  if (email === '' || message === '') {
    alert('Fill please all fields');
  } else {
    console.log({ email, message });
    form.reset();
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
saveToLS();
loadFromLS();
