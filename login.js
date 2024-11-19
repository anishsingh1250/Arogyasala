// Toggle between Login and Sign Up forms
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("signupTab").classList.remove("active");
}

function showSignUp() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("signupTab").classList.add("active");
    document.getElementById("loginTab").classList.remove("active");
}

// Initial load: Show Login form by default
window.onload = showLogin;

// Form validation
function validateLoginForm() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Please fill out all fields.");
        return false;
    }
    return true;
}

function validateSignUpForm() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill out all fields.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
