document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get form data
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    try {
        // Send POST request to your server's signup endpoint
        const response = await fetch('http://localhost:5000/api/user/signupUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const result = await response.json(); // Parse the JSON response
        console.log('Signup Response:', result);

        if (response.ok) {
            // Show a success message
            //alert(result.msg || 'Signup successful!');

            // Navigate to the main page (index.html)
            window.location.href = 'index.html';
        } else {
            // Handle errors
            alert(result.msg || 'Signup failed. Please try again.');
        }
    } catch (error) {
        console.error('Signup Error:', error);
        alert('An error occurred during signup. Please try again later.');
    }
});

// Handle Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get form data
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        // Send POST request to your server's login endpoint
        const response = await fetch('http://localhost:5000/api/user/loginUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json(); // Parse the JSON response
        console.log('Login Response:', result);

        if (response.ok) {
            // Show a success message
            //alert(result.msg || 'Login successful!');

            // Optionally, save the user token to localStorage (for persistent sessions)
            localStorage.setItem('token', result.token); 

            // Navigate to the main page (index.html)
            window.location.href = 'index.html';
        } else {
            // Handle errors
            alert(result.msg || 'Login failed. Please try again.');
        }
    } catch (error) {
        console.error('Login Error:', error);
        alert('An error occurred during login. Please try again later.');
    }
});




