
function checkMissing() {
    const requiredFields = document.querySelectorAll(".required");
    let missingCount = 0;

    requiredFields.forEach(field => {
        if (field.value.trim() === "") {
            missingCount++;
        }
    });

    const span = document.getElementById("missing-count");
    if (missingCount > 0) {
        span.textContent = `You still have ${missingCount} required field(s) missing.`;
    } else {
        span.textContent = "";
    }
    return missingCount;
}

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
