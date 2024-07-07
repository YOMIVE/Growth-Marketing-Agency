// gsap.from('.header-logo', {duration: 1, y: -100})
// gsap.from('#Hh1', {duration: 1, x: -100})
// gsap.from('#Hp', {duration: 1, x: -100})
// gsap.from('#Hlinks', {duration: 1, x: -100})

// gsap.from('#SOh1', {duration: 1, x: -100})
// gsap.from('.text__sec__one', {duration: 1, x: -100})


document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.el');

    const checkVisibility = () => {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        el.classList.add('visible');
        } else {
        }
    });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});