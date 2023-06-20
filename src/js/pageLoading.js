
    // Function to extract the value from the URL
    function getValueFromURL() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('page'); // Assuming the value is stored as 'page' parameter in the URL
    }

    // Function to update the content based on the value
    function updateContent(value) {
      const mainContent = document.getElementById('mainContent');

      // Add your logic to determine what content to display based on the value
      if (value === 'admin') {
        mainContent.innerHTML = '<h1>Welcome to the Home Page for admins</h1>';
      } else if (value === 'about') {
        mainContent.innerHTML = '<h1>About Us</h1><p>Some information about the company...</p>';
      } else if (value === 'contact') {
        mainContent.innerHTML = '<h1>Contact Us</h1><p>Here are our contact details...</p>';
      } else if (value === null){
        mainContent.innerHTML = 'login page should be here';
      }
      else{
        mainContent.innerHTML = '<h1>404 Not Found</h1><p>The requested page was not found.</p>'
      }
    }

    // Call the functions to update the content based on the URL value
    const value = getValueFromURL();
    updateContent(value);
