function login() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  if (!localStorage.getItem(username)) {
    alert("Username not found. Please sign up first.");
    return;
  }

  if (localStorage.getItem(username) === password) {
    alert("Login successful");
    window.location.href="home.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
  
}
function register() {
  var username = document.getElementById("signupUsername").value;
  var password = document.getElementById("signupPassword").value;

  if (localStorage.getItem(username)) {
    alert("Username already exists. Please choose a different one.");
    return;
  }

  localStorage.setItem(username, password);
  alert("Account created successfully. You can now log in.");
  window.location.href="login.html"
}
