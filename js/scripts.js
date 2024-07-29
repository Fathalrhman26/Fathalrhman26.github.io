document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(query)) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
