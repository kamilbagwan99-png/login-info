
// Get Login and Register boxes
let loginBox = document.getElementById("loginBox");
let registerBox = document.getElementById("registerBox");


// Show Registration Form
function showRegister() {

    loginBox.classList.add("hidden");
    registerBox.classList.remove("hidden");

}


// Show Login Form
function showLogin() {

    registerBox.classList.add("hidden");
    loginBox.classList.remove("hidden");

}


// Show / Hide Password
function showPassword(inputId, button) {

    let passwordInput = document.getElementById(inputId);

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        button.innerText = "Hide";

    } else {

        passwordInput.type = "password";
        button.innerText = "Show";

    }
}


// Registration Form
document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("registerMessage");


    // Check password
    if (password !== confirmPassword) {

        message.innerText = "Passwords do not match!";
        message.style.color = "red";

        return;
    }


    // Save user data in browser
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);


    message.innerText = "Registration successful!";
    message.style.color = "green";


    // Clear form
    document.getElementById("registerForm").reset();

});


// Login Form
document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let message = document.getElementById("loginMessage");


    // Get saved data
    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");


    // Check Login
    if (email === savedEmail && password === savedPassword) {

        message.innerText = "Login successful! Welcome 🎉";
        message.style.color = "green";

    } else {

        message.innerText = "Invalid email or password!";
        message.style.color = "red";

    }

});