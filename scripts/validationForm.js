export const validateEmail = (value) => {
  return /^[a-zA-Z0-9_\-.]+@{1}[a-zA-Z]+\.{1}[a-zA-Z]{2,5}$/.test(value); // TODO: Get a more proven and tested regex for the email from the internet
};

export const validatePassword = (value) => {
  return (
    value.length >= 8 &&
    /[A-Z]/.test(value) &&
    /[a-z]/.test(value) &&
    /\d/.test(value) &&
    /[^A-Za-z0-9]/.test(value)
  );
};

export const showError = (input, message) => {
  let error = input.nextElementSibling;
  if (!error?.classList.contains('error')) {
    error = document.createElement('p');
    error.classList.add('error');
    input.insertAdjacentElement('afterend', error);
  }
  error.textContent = message;
  input.classList.add('input-error');
};

export const clearError = (input) => {
  const error = input.nextElementSibling;
  error?.classList.contains('error') && error.remove();
  input.classList.remove('input-error');
};
