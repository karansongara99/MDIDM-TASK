document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });

    // Add fade-in animation when footer comes into view
    const footer = document.querySelector('.footer-wrapper');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });

    observer.observe(footer);
});