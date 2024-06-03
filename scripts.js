document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Check the local storage for theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggleBtn.textContent = 'Switch to Light Mode';
        }
    }

    // Theme toggle function
    window.toggleTheme = function() {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = 'Switch to Light Mode';
            localStorage.setItem('theme', 'dark-mode');
        } else {
            themeToggleBtn.textContent = 'Switch to Dark Mode';
            localStorage.setItem('theme', '');
        }
    };

    // Form submission handler
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        fetch('https://formspree.io/f/mpzvgrjj', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.name.value,
                email: this.email.value,
                message: this.message.value
            })
        }).then(response => {
            if (response.ok) {
                alert('Your message has been sent!');
                this.reset();
            } else {
                alert('Failed to send message. Please try again later.');
            }
        }).catch(error => {
            alert('Failed to send message. Please try again later.');
        });
    });
});
