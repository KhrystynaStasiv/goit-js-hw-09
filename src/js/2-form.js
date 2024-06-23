const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name = "email"]');
const messageInput = form.querySelector('textarea[name = "message"]');

form.addEventListener('input', () => {
  const formData = new FormData(form);
  const email = formData.get('email');
  const message = formData.get('message');
  saveToLS('email', email);
  saveToLS('message', message);
  saveToLS('formData', data);
});
======================================!
function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem('feedback-form-state', jsonData);
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
