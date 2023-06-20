
    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault(); // Prevent the form from submitting and page reloading

      // Get the form values
      const username = event.target.elements.username.value;
      const password = event.target.elements.password.value;

      // Perform login validation
      // Add your own logic to validate the login credentials

      // Assuming the login is successful, redirect to the appropriate page
      if (username === 'admin' && password === 'password') {
        const page = 'admin'; // Set the desired page value
        window.location.href = `index.html?page=${page}`;
      } else {
        alert('Invalid username or password. Please try again.'); // Show an error message for an unsuccessful login
      }
    }

    // Add event listener to the form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleSubmit);
