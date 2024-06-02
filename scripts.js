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
});
