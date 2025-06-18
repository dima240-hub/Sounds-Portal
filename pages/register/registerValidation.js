import {
  validateEmail,
  validatePassword,
  showError,
  clearError,
} from '../../scripts/validationForm.js';
import { validateForm } from '../../scripts/formUtils.js';

const form = document.getElementById('register-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isValid = validateForm([
    {
      input: email,
      validator: validateEmail,
      errorMsg:
        "Invalid email. Must be at least 8 characters and contain '@' and '.'",
    },
    {
      input: password,
      validator: validatePassword,
      errorMsg:
        'Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.',
    },
    {
      input: repeatPassword,
      validator: (val) => val === password.value,
      errorMsg: 'Passwords do not match.',
    },
  ]);

  if (isValid) {
    alert('Registration successfully completed!');
    form.reset();
  }
});

email.addEventListener('input', () => {
  if (validateEmail(email.value)) clearError(email);
});

password.addEventListener('input', () => {
  if (validatePassword(password.value)) clearError(password);
});

repeatPassword.addEventListener('input', () => {
  if (repeatPassword.value === password.value) clearError(repeatPassword);
});

email.addEventListener('blur', () => {
  if (!validateEmail(email.value)) {
    showError(
      email,
      "Invalid email. Must be at least 8 characters and contain '@' and '.'"
    );
  } else {
    clearError(email);
  }
});

password.addEventListener('blur', () => {
  if (!validatePassword(password.value)) {
    showError(
      password,
      'Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.'
    );
  } else {
    clearError(password);
  }
});

repeatPassword.addEventListener('blur', () => {
  if (repeatPassword.value !== password.value) {
    showError(repeatPassword, 'Passwords do not match.');
  } else {
    clearError(repeatPassword);
  }
});
