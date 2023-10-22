document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const emailAddress = document.getElementById('emailAddress');
    const address = document.getElementById('address');

    // Restore input values from localStorage on page load
    firstName.value = localStorage.getItem('firstName') || '';
    lastName.value = localStorage.getItem('lastName') || '';
    emailAddress.value = localStorage.getItem('emailAddress') || '';
    address.value = localStorage.getItem('address') || '';

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (validateInputs()) {
            // The form is valid; we can submit it to the server or take other actions.
            // For demonstration purposes, we'll just show an alert.
            clearInputs();
            alert('Form submitted successfully!');

        }
    });

    function validateInputs() {
        let isValid = true;

        // Reset previous error states
        clearErrors();


        if (!isValidEmail(emailAddress.value.trim())) {
            isValid = false;
            showError(emailAddress, 'Invalid email address');
        }

        return isValid;
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorDiv = formGroup.querySelector('.error');
        formGroup.classList.add('error');
        errorDiv.innerText = message;
        errorDiv.style.color = '#FF0000';

        emailAddress.style.color = '#FF0000';
    }

    function clearErrors() {
        const errorFields = document.querySelectorAll('.form-group.error');
        errorFields.forEach(function (field) {
            field.classList.remove('error');
            field.querySelector('.error').innerText = '';
        });
    }

    function clearInputs() {
        // Clear all input fields
        firstName.value = '';
        lastName.value = '';
        emailAddress.value = '';
        address.value = '';
    }

    function isValidEmail(email) {
        // Implement a regular expression to validate the email format.
        // This is a robust pattern.
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailPattern.test(email);
    }
});
