// gsap.from('.header-logo', {duration: 1, y: -100})
// gsap.from('#Hh1', {duration: 1, x: -100})
// gsap.from('#Hp', {duration: 1, x: -100})
// gsap.from('#Hlinks', {duration: 1, x: -100})

// gsap.from('#SOh1', {duration: 1, x: -100})
// gsap.from('.text__sec__one', {duration: 1, x: -100})


document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.el');
    const visibilityThreshold = 0.5; // 10% видимости элемента

    const checkVisibility = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elementHeight = rect.bottom - rect.top;
            const elementVisible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
            const visiblePercentage = elementVisible / elementHeight;
    
            if (visiblePercentage > visibilityThreshold) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});




function scrollToStart() {
    var element = document.getElementById("main-page");
    if (element) {
        element.scrollIntoView();
    }
}
function scrollToContacts() {
    var element = document.getElementById("contacts");
    if (element) {
        element.scrollIntoView();
    }
}
function scrollToAbout() {
    var element = document.getElementById("about-me");
    if (element) {
        element.scrollIntoView();
    }
}
function scrollToMasterGroup() {
    var element = document.getElementById("master-group");
    if (element) {
        element.scrollIntoView();
    }
}
function scrollToServices() {
    var element = document.getElementById("services");
    if (element) {
        element.scrollIntoView();
    }
}
function scrollToMarketingForEveryone() {
    var element = document.getElementById("marketing-for-everyone");
    if (element) {
        element.scrollIntoView();
    }
}







