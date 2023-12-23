document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function(event) {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      
  
      // password validation
      if (!validatePassword(password)) {
        event.preventDefault(); // Stop the form from submitting
        alert('Password must contain at least one uppercase letter, one number, and only the @ character as a special character.');
      }
    });
  
    function validatePassword(password) {
      var passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
      return passwordPattern.test(password);
    }
  });
  