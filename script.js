// Get elements
const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const toggleFormButton = document.getElementById('toggleFormButton');

// Event listener for form submission
signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission to handle validation

  // Reset error messages
  nameError.textContent = '';
  emailError.textContent = '';

  let valid = true;

  // Validate name
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  }

  // Validate email
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Please enter your email.';
    valid = false;
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // If validation passes, show success message
  if (valid) {
    alert('Thank you for signing up for our podcast updates!');
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

// Event listener for toggle button to show/hide the form
toggleFormButton.addEventListener('click', function() {
  const formContainer = document.getElementById('formContainer');
  if (formContainer.style.display === 'none') {
    formContainer.style.display = 'block';
  } else {
    formContainer.style.display = 'none';
  }
});
