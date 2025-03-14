document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const signupLink = document.getElementById("signup-link");

    // Toggle between login and signup forms
    signupLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

    // Form validation (basic)
    function validateForm(event, formType) {
        event.preventDefault();
        let email, password;

        if (formType === "login") {
            email = document.getElementById("email").value;
            password = document.getElementById("password").value;
        } else {
            email = document.getElementById("new-email").value;
            password = document.getElementById("new-password").value;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }
        
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        alert(`${formType === "login" ? "Logged in" : "Account created"} successfully!`);
    }

    loginForm.addEventListener("submit", (event) => validateForm(event, "login"));
    signupForm.addEventListener("submit", (event) => validateForm(event, "signup"));
});
