document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('main section');

    // Function to handle active link highlighting
    function changeActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Use clientHeight for more accurate height calculation
            const sectionHeight = section.clientHeight;
            // Adjust offset to trigger highlight when section is more in view
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Initial check on page load
    changeActiveLink();

    // Add event listener for scroll
    window.addEventListener('scroll', changeActiveLink);
});
