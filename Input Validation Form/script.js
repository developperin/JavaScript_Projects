const form = document.getElementById('designerForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;

            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            if (passwordInput.value.trim() === '') {
                passwordError.textContent = 'Password is required';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            if (isValid) {
                alert('Form submitted successfully!');
                // Here you can submit the form or perform any other actions
                // form.submit();
            }
        });
