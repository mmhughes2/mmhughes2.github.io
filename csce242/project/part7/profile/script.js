const contactForm = document.getElementById("contactForm");
const contactSubmit = document.getElementById("contactSubmit");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      formStatus.textContent = "Please complete every field with a valid email address.";
      formStatus.className = "form-status error";
      return;
    }

    const formData = new FormData(contactForm);
    contactSubmit.disabled = true;
    contactSubmit.textContent = "Sending...";
    formStatus.textContent = "Submitting your message...";
    formStatus.className = "form-status";

    try {
      const response = await fetch("https://formsubmit.co/ajax/kenhughes925@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      formStatus.textContent = "Message sent successfully. Check your inbox for the FormSubmit verification email if this is the first submission.";
      formStatus.className = "form-status success";
      contactForm.reset();
    } catch (error) {
      formStatus.textContent = "There was a problem sending your message. Please try again in a moment.";
      formStatus.className = "form-status error";
    } finally {
      contactSubmit.disabled = false;
      contactSubmit.textContent = "Send Message";
    }
  });
}
