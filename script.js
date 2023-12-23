// script.js
document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function(event) {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      // Email validation is already handled by the browser because of the 'type=email' attribute
  
      // Custom password validation
      if (!validatePassword(password)) {
        event.preventDefault(); // Stop the form from submitting
        alert('Password must contain at least one uppercase letter, one number, and only the @ character as a special character.');
      }
    });
  
    function validatePassword(password) {
      // Regex to check for at least one uppercase letter, one number, and only '@' as special character
      var passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
      return passwordPattern.test(password);
    }
  });
  