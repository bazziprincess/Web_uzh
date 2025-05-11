/**
 * Set the form control element to valid
 * @param {object} element - The DOM element
 */
function setValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

/**
 * Set the form control element to invalid with the error message
 * @param {object} element - The DOM element
 */
function setInvalid(element, message = '') {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');

    const feedback = element.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = message;
    }
}

/**
 * Remove validation information from the element
 * @param {object} element - The DOM element
 */
function removeValidation(element) {
    element.classList.remove('is-valid');
    element.classList.remove('is-invalid');
}

/**
 * Validate the login form and try to log the user in
 * @param {object} event - The DOM event
 */
function login(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email,'Please enter an email address');
    } else if (email.validity.valueMissing) {
        setInvalid(email,'Please enter an email address');
        hasError = true;
    } else {
        setInvalid(email,'Please enter an email address');
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    if (password.value.trim().length == 0) {
        setInvalid(password,'Please enter a password');
        hasError = true;
    } else {
        setValid(password,'Please enter a password');
    }

    const loginErrorBox = document.getElementById('login-error');
    loginErrorBox.innerHTML = '';
    if (hasError) {
        const alertText = document.createElement('div');
        alertText.textContent = 'Please correct the error(s)';
        loginErrorBox.appendChild(alertText);
    } else {
        loginErrorBox.innerHTML = '';
    }}

/**
 * Validate the login form and try to retrieve the password
 * @param {object} event - The DOM event
 */
function forgot(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
    } else {
        setInvalid(email);
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    removeValidation(password);

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to register the new user
 * @param {object} event - The DOM event
 */
function register(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var firstName = document.getElementById('register-first-name-control');
    if (firstName.value.trim().length == 0) {
        setInvalid(firstName, 'Please enter your first name');
        hasError = true;
    } else if (firstName.validity.valid) {
        setValid(firstName,'Please enter an email address');
    }

    var lastName = document.getElementById('register-last-name-control');
    if (lastName.value.trim().length == 0) {
        setInvalid(lastName);
        hasError = true;
    } else if (lastName.validity.valid) {
        setValid(lastName);
    }

    var email = document.getElementById('register-email-control');
    if (email.validity.valid) {
        setValid(email,'Please enter an email address');
    } else if (email.validity.valueMissing) {
        setInvalid(email,'Please enter an email address');
        hasError = true;
    } else {
        setInvalid(emai,'Please enter an email address');
        hasError = true;
    }

    var password = document.getElementById('register-password-control');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        setInvalid(password,'Password must be at least 8 characters');
        hasError = true;
    } else if (passwordValue.length > 16) {
        setInvalid(password),'Password must be at least 8 characters';
        hasError = true;
    } else if (passwordValue.match(/[a-zA-Z]+/) == null) {
        setInvalid(password,'Password must be at least 8 characters');
        hasError = true;
    } else if (passwordValue.match(/[0-9]+/) == null) {
        setInvalid(password,'Password must be at least 8 characters');
        hasError = true;
    } else {
        setValid(password,'Password must be at least 8 characters');
    }

    var programme = document.getElementById('register-programme-control');
    if (programme.validity.valueMissing) {
        setInvalid(programme,'Please select a programme');
        hasError = true;
    } else if (!programme.validity.valid) {
        setInvalid(programme,'Please select a programme');
        hasError = true;
    } else {
        setValid(programme,'Please select a programme');
    }

    const registerErrorBox = document.getElementById('register-error');
    if (hasError) {
        registerErrorBox.innerHTML = '';
        const alertText = document.createElement('div');
        alertText.textContent = 'Please correct the error(s)';
        registerErrorBox.appendChild(alertText);
    } else {
        registerErrorBox.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('login-login-button')
        .addEventListener('click', login, false);

    document
        .getElementById('login-forgot-button')
        .addEventListener('click', forgot, false);

    document
        .getElementById('register-register-button')
        .addEventListener('click', register, false);
}, false);

// Font size scaling functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons
    const increaseButton = document.getElementById('font-increase-button');
    const decreaseButton = document.getElementById('font-decrease-button');

    // Set default font size (in px) if not already set
    if (!document.documentElement.style.fontSize) {
        document.documentElement.style.fontSize = '16px';
    }

    // Get current font size
    function getCurrentFontSize() {
        const currentSize = window.getComputedStyle(document.documentElement).fontSize;
        return parseFloat(currentSize);
    }

    // Increase font size
    increaseButton.addEventListener('click', function() {
        const currentSize = getCurrentFontSize();
        const newSize = currentSize * 1.1; // Increase by 10%
        document.documentElement.style.fontSize = `${newSize}px`;
    });

    // Decrease font size
    decreaseButton.addEventListener('click', function() {
        const currentSize = getCurrentFontSize();
        const newSize = currentSize * 0.9; // Decrease by 10%
        document.documentElement.style.fontSize = `${newSize}px`;
    });

    // Optional: Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + Plus to increase font size
        if ((e.ctrlKey || e.metaKey) && e.key === '+') {
            e.preventDefault();
            increaseButton.click();
        }

        // Ctrl/Cmd + Minus to decrease font size
        if ((e.ctrlKey || e.metaKey) && e.key === '-') {
            e.preventDefault();
            decreaseButton.click();
        }
    });
});