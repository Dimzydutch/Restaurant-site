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

        // Close menu on outside click (mobile)
        document.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('show');
            }
        });
        // Close menu on escape key (mobile)
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                navLinks.classList.remove('show');
            }
        });
        // Close menu on link click (desktop)
        document.querySelectorAll('.nav-links a').forEach(link => { 
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Adjust for mobile view
                    navLinks.classList.remove('show');
                }
            });
        });

        // Close menu on link click (mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    })