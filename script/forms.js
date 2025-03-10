document.addEventListener("DOMContentLoaded", function () {
  // Login Form Validation
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = loginForm.querySelector("input[type='text']").value.trim();
      const password = loginForm.querySelector("input[type='password']").value.trim();

      if (username === "" || password === "") {
        alert("All fields are required!");
        return;
      }

      alert("Login Successful!");
      loginForm.submit();
    });
  }

  // Registration Form Validation
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault(); 

      const fullName = registerForm.querySelectorAll("input[type='text']")[0].value.trim();
      const email = registerForm.querySelector("input[type='email']").value.trim();
      const password = registerForm.querySelector("input[type='password']").value.trim();
      const age = registerForm.querySelectorAll("input[type='text']")[1].value.trim();
      const gender = registerForm.querySelector("select").value;
      const phone = registerForm.querySelectorAll("input[type='text']")[2].value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10}$/;

      if (!fullName || !email || !password || !age || !gender || !phone) {
        alert("All fields are required!");
        return;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
      }

      if (isNaN(age) || age < 10 || age > 100) {
        alert("Please enter a valid age (between 10 and 100)!");
        return;
      }

      if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 10 digits!");
        return;
      }

      alert("Registration Successful!");
      registerForm.submit();
    });
  }
});
