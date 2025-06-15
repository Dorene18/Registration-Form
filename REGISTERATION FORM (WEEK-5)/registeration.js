const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');

    // Error spans
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const charCount = document.getElementById('charCount');
    const charWarning = document.getElementById('charWarning');

    function validateForm() {
      let isValid = true;

      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
      } else {
        nameError.textContent = '';
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Enter a valid email address';
        isValid = false;
      } else {
        emailError.textContent = '';
      }

      if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
      } else {
        passwordError.textContent = '';
      }

      submitBtn.disabled = !isValid;
    }

    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    // Character Counter
    messageInput.addEventListener('input', () => {
      const length = messageInput.value.length;
      charCount.textContent = `${length} / 200 characters`;

      if (length >= 200) {
        charWarning.textContent = 'Character limit reached!';
      } else {
        charWarning.textContent = '';
      }
    });

    // Submit handler
    document.getElementById('registrationForm').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Form submitted successfully!');
    });