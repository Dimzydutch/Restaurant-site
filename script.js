    document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('mode-toggle');
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
        });

        // Hamburger menu
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });

        // Close menu on link click (mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    })