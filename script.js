// Add an event listener to the contact form for the 'submit' event
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission action

    // Retrieve values from input fields
    const name = document.getElementById("name").value; // Get the name input
    const email = document.getElementById("email").value; // Get the email input
    const mobile = document.getElementById("mobile").value; // Get the mobile input
    const errorMessage = document.getElementById("error-message"); // Reference to the error message display

    // Reset the error message to clear any previous messages
    errorMessage.textContent = "";

    // Validation checks
    // Check if any field is empty
    if (!name || !email || !mobile) {
        errorMessage.textContent = "Please fill in all fields."; // Display error if fields are empty
        return; // Stop further execution of the function
    }

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for valid email format
    // Check if the email is valid and not a Gmail address
    if (!emailRegex.test(email) || email.includes("@gmail.com")) {
        errorMessage.textContent = "Please enter a valid email (not a Gmail address)."; // Display error for invalid email
        return; // Stop further execution of the function
    }

    // Alert the user that the form was submitted successfully
    alert("Form submitted successfully!");
});
