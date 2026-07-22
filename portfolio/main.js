document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize EmailJS with your public key
  emailjs.init({
    publicKey: "CYrd5eCt2wB0o1QFS"
  });

  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submitBtn");
  const formAlert = document.getElementById("formAlert");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // UI: Set loading state on button
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Sending...
      `;

      // Reset alert state
      formAlert.classList.add("d-none");
      formAlert.classList.remove("alert-success", "alert-danger");

      // 2. Send email via EmailJS
      emailjs
        .sendForm("service_uojr7mf", "template_mjczb8x", this)
        .then(() => {
          // Success Feedback
          showAlert(
            "success",
            "<strong>Success!</strong> Your message has been sent. We'll get back to you within 24 hours."
          );
          contactForm.reset();
        })
        .catch((error) => {
          // Error Feedback
          console.error("EmailJS Error:", error);
          const errorMsg = error.text || error.message || "Failed to send message. Please try again later.";
          showAlert("danger", `<strong>Error:</strong> ${errorMsg}`);
        })
        .finally(() => {
          // Restore button state
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        });
    });
  }

  // Helper function to render bootstrap alert
  function showAlert(type, message) {
    formAlert.className = `alert alert-${type} rounded-3 mb-4`;
    formAlert.innerHTML = message;
    formAlert.classList.remove("d-none");
  }

  // 3. Auto-close mobile navbar menu on link click
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });
});