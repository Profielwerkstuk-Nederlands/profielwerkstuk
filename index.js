const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const arrow = entry.target.querySelector('.scroll-arrow');

        if (!arrow) return;

        if (entry.isIntersecting) {
            arrow.classList.add('visible');
        } else {
            arrow.classList.remove('visible');
        }
    });
}, {
    threshold: 1
});


document.querySelectorAll('.box-centraal').forEach(section => {
    observer.observe(section);
});