// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple alert for demo; in real app, send to server
        alert(`Thank you ${name}! Your message has been sent. We will get back to you soon.`);
        
        // Reset form
        form.reset();
    });
});