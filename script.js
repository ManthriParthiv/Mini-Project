function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting the usual way

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Error message elements
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Clear previous errors
    usernameError.textContent = '';
    passwordError.textContent = '';
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    let isValid = true;

    // Example correct credentials (for demonstration purposes)
    const correctUsername = 'user';
    const correctPassword = 'pass123';

    // Username validation
    if (username === '') {
        usernameError.textContent = 'Username is required';
        usernameError.style.display = 'block';
        isValid = false;
    }

    // Password validation
    if (password === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        isValid = false;
    }

    // Redirect if valid credentials
    if (isValid && username === correctUsername && password === correctPassword) {
        window.location.href = 'tripplanner.html'; // Redirect to tripplanner.html
    } else if (isValid) {
        // Show an error if credentials are incorrect
        usernameError.textContent = 'Invalid username or password';
        usernameError.style.display = 'block';
        passwordError.style.display = 'none'; // Clear password error if it was shown
    }
}
