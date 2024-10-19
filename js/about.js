function validateForm(event) {
  const name = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message-box").value.trim();

  // Custom validations
  if (!name || name.length < 3) {
    alert("Name must be at least 3 characters long.");
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!message || message.length < 10) {
    alert("Message must be at least 10 characters long.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
