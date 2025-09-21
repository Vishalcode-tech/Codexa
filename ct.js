document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const feedback = document.getElementById('feedback');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!name || !email || !message) {
        feedback.style.color = '#e74c3c';
        feedback.textContent = 'Please fill in all fields.';
        return;
    }
    // Email format check
    if (!/^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email)) {
        feedback.style.color = '#e74c3c';
        feedback.textContent = 'Please enter a valid email address.';
        return;
    }

    // Animate button
    btn.classList.add('sending');
    feedback.style.color = '#2980b9';
    feedback.textContent = 'Sending...';

    setTimeout(() => {
        btn.classList.remove('sending');
        feedback.style.color = '#27ae60';
        feedback.textContent = 'Thank you for contacting us! We will get back to you soon.';
        document.getElementById('contactForm').reset();
    }, 1200);
});