const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// JavaScript to handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the form from submitting to a server

    // Get the email and confirm email values
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;

    // Check if the emails match
    if (email !== confirmEmail) {
      alert("The email addresses do not match. Please try again.");
    } else {
      // If emails match, show custom success message
      document.getElementById("success-message").style.display = "block";

      // Optionally, hide the form after submission
      document.getElementById("contact-form").style.display = "none";
    }
  });
