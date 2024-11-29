// Select the form element
const contactForm = document.querySelector('form');

// Add an event listener for form submission
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the form field values
    const fullName = document.querySelector('input[name="fullName"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Validate the form fields
    if (!fullName || !email || !phone || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Display a success message or perform form submission logic
    alert(`Thank you, ${fullName}! Your message has been submitted successfully.`);
    contactForm.reset(); // Reset the form fields
});
