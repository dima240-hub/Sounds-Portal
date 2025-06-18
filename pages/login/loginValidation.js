import { validateEmail, validatePassword, clearError, showError } from '../../scripts/validationForm.js';
import { validateForm } from '../../scripts/formUtils.js';

const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValid = validateForm([
    { input: email, validator: validateEmail, errorMsg: "Invalid email. Must be at least 8 characters and contain '@' and '.'" },
    { input: password, validator: validatePassword, errorMsg: "Invalid password." },
  ]);

  if (isValid) {
    alert("Login successful!");
    form.reset();
  }
});

email.addEventListener("input", () => {
  if (validateEmail(email.value)) clearError(email);
});

password.addEventListener("input", () => {
  if (validatePassword(password.value)) clearError(password);
});


email.addEventListener("blur", () => {
  if (!validateEmail(email.value)) {
    showError(email, "Invalid email. Must be at least 8 characters and contain '@' and '.'");
  } else {
    clearError(email);
  }
});

password.addEventListener("blur", () => {
  if (!validatePassword(password.value)) {
    showError(password, "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.");
  } else {
    clearError(password);
  }
});
