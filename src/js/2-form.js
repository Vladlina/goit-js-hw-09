const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;

form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleFormSubmit);

reloadPage();

function handleFormInput(event) {
  dataForm = { email: email.value.trim(), message: message.value.trim() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Fill please all fields');
  }

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  dataForm = {};
}
