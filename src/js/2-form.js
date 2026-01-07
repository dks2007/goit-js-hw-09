const formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

window.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);

    form.elements.email.value = parsedData.email || '';
    form.elements.message.value = parsedData.message || '';
    // Оновлюємо локальний об'єкт formData
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
});


form.addEventListener('input', (event) => {
  const target = event.target;
  if (target.name === 'email' || target.name === 'message') {

    formData[target.name] = target.value.trim();
    // Зберігаємо в localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();


  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ ...formData });

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
