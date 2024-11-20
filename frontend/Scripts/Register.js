document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const emailValidation = document.getElementById("email-validation");

    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    const lengthValidation = document.getElementById("length-validation");
    const numberValidation = document.getElementById("number-validation");
    const specialValidation = document.getElementById("special-validation");
    const matchValidation = document.getElementById("match-validation");

    const togglePasswordButton = document.getElementById("toggle-password");
    const toggleConfirmPasswordButton = document.getElementById("toggle-confirm-password");

    function validateEmail() {
        const email = emailInput.value;
        emailValidation.style.display = email.includes("@") ? "none" : "block";
    }

    function validatePassword() {
        const password = passwordInput.value;
        lengthValidation.classList.toggle("text-success", password.length >= 8);
        lengthValidation.classList.toggle("text-danger", password.length < 8);

        numberValidation.classList.toggle("text-success", /\d/.test(password));
        numberValidation.classList.toggle("text-danger", !/\d/.test(password));

        specialValidation.classList.toggle("text-success", /[!@#$%^&*(),.?":{}|<>]/.test(password));
        specialValidation.classList.toggle("text-danger", !/[!@#$%^&*(),.?":{}|<>]/.test(password));
    }

    function validatePasswordMatch() {
        const passwordsMatch = passwordInput.value === confirmPasswordInput.value && confirmPasswordInput.value !== "";
        matchValidation.style.display = "block";
        if (passwordsMatch) {
            matchValidation.style.color = "green";
            matchValidation.textContent = "Passwords match";
        } else {
            matchValidation.style.color = "red";
            matchValidation.textContent = "Passwords must match";
        }
    }

    emailInput.addEventListener("input", validateEmail);

    passwordInput.addEventListener("input", function () {
        validatePassword();
        validatePasswordMatch();
    });

    confirmPasswordInput.addEventListener("input", validatePasswordMatch);

    function togglePasswordVisibility(inputField, isVisible) {
        inputField.type = isVisible ? "text" : "password";
    }

    togglePasswordButton.addEventListener("mousedown", () => togglePasswordVisibility(passwordInput, true));
    togglePasswordButton.addEventListener("mouseup", () => togglePasswordVisibility(passwordInput, false));
    togglePasswordButton.addEventListener("mouseleave", () => togglePasswordVisibility(passwordInput, false));

    toggleConfirmPasswordButton.addEventListener("mousedown", () => togglePasswordVisibility(confirmPasswordInput, true));
    toggleConfirmPasswordButton.addEventListener("mouseup", () => togglePasswordVisibility(confirmPasswordInput, false));
    toggleConfirmPasswordButton.addEventListener("mouseleave", () => togglePasswordVisibility(confirmPasswordInput, false));

    window.handleRegister = function (event) {
        event.preventDefault();
        if (passwordInput.value === confirmPasswordInput.value && passwordInput.value !== "") {
            window.location.href = "RegisterComplete.html";
        } else {
            alert("Please ensure all fields are valid before submitting.");
        }
    };
});