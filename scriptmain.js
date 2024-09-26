function validateSignupForm(event) {
    let isValid = true;
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    if (username.value.trim() === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        isValid = false;
    }

    if (email.value.trim() === '' || !validateEmail(email.value)) {
        document.getElementById('emailError').textContent = 'Valid email is required.';
        isValid = false;
    }

    if (password.value.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
