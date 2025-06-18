import { showError,clearError } from "./validationForm.js";

export function validateForm(fields) {
    let isValid = true;
    let firstInvalidInput = null;
  
    fields.forEach(({ input, validator, errorMsg }) => {
      if (!validator(input.value)) {
        showError(input, errorMsg);
        if (!firstInvalidInput) firstInvalidInput = input;
        isValid = false;
      } else {
        clearError(input);
      }
    });
  
    if (!isValid && firstInvalidInput) {
      firstInvalidInput.focus();
    }
  
    return isValid;
  }
  