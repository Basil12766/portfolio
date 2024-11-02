function validateForm() {
    const form = document.forms[0];
    const email = form.email.value;
    const message = form.message.value;

    if (!email || !message) {
        alert("Please fill in all required fields.");
        return false;
    }

    return true;
}
