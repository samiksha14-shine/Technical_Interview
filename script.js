document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const errorMessage = document.getElementById("error-message");

    // Reset the error message
    errorMessage.textContent = "";

    // Validation checks
    if (!name || !email || !mobile) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.includes("@gmail.com")) {
        errorMessage.textContent = "Please enter a valid email (not a Gmail address).";
        return;
    }

    alert("Form submitted successfully!");
});
