<p>
CheckMissing() verifies that all required fields are filled in.
If any are empty, it updates the missing-count span and blocks submission.
</p>

function checkMissing() {
    const requiredFields = document.querySelectorAll(".required");
    let missingCount = 0;

    requiredFields.forEach(field => {
        if (field.value.trim() === "") {
            missingCount++;
        }
    });
    
    if (missingCount > 0) {
        span.textContent = `You still have ${missingCount} required field(s) missing.`;
    } else {
        span.textContent = "";
    }
    return missingCount;
}
<p>
ValidateEmail() checks if the email input has at least 8 characters.
If invalid, the email input gets a red border; if valid, revert to required styling.
</p>
function validateEmail() {
    const emailField = document.getElementById("email");
    if (emailField.value.length < 8) {
        emailField.classList.add("invalid");
        return false;
    } else {
        emailField.classList.remove("invalid");
        return true;
    }
}
<p>
RunValidation() runs both checkMissing() and validateEmail().
If errors exist, an alert message is shown and submission is blocked.
</p>
function runValidation() {
    const missing = checkMissing();
    const emailValid = validateEmail();

    if (missing > 0 || !emailValid) {
        alert("Form submission blocked: Please complete all required fields correctly.");
        return false;
    } else {
        alert("Form submitted successfully!");
        return true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit-btn").addEventListener("click", runValidation);
});
