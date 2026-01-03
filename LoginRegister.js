cconst loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");

function showRegister() {
  loginContainer.style.display = "none";
  registerContainer.style.display = "block";
}

function showLogin() {
  registerContainer.style.display = "none";
  loginContainer.style.display = "block";
}

// Modal Control Functions
function openTerms() {
  document.getElementById("terms-modal").style.display = "block";
}

function closeTerms() {
  document.getElementById("terms-modal").style.display = "none";
}

function register() {
  const username = document.getElementById("register-username").value.trim();
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const termsCheckbox = document.getElementById("register-terms"); // New Reference
  const message = document.getElementById("register-message");

  if (!username || !password) {
    message.style.color = "#ff5555";
    message.textContent = "Please fill all fields.";
    return;
  }

  if (password !== confirmPassword) {
    message.style.color = "#ff5555";
    message.textContent = "Passwords do not match.";
    return;
  }

  // Mandatory Terms Check
  if (!termsCheckbox.checked) {
    message.style.color = "#ff5555";
    message.textContent = "You must agree to the Terms & Conditions.";
    return;
  }

  if (localStorage.getItem(username)) {
    message.style.color = "#ff5555";
    message.textContent = "Username already exists.";
    return;
  }

  localStorage.setItem(username, password);
  message.style.color = "#4caf50";
  message.textContent = "Registration successful!";
  setTimeout(() => {
    showLogin();
    message.textContent = "";
    termsCheckbox.checked = false; // Reset checkbox for next use
  }, 1500);
}

function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;
  const message = document.getElementById("login-message");

  const storedPassword = localStorage.getItem(username);

  if (!storedPassword) {
    message.style.color = "#ff5555";
    message.textContent = "User not found.";
    return;
  }

  if (storedPassword !== password) {
    message.style.color = "#ff5555";
    message.textContent = "Incorrect password.";
    return;
  }

  message.style.color = "#4caf50";
  message.textContent = "Login successful!";
  setTimeout(() => {
    window.location.href = "home.html"; // Redirect to homepage
  }, 1000);
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
  const modal = document.getElementById("terms-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
