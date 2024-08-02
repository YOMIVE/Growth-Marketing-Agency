// gsap.from('.header-logo', {duration: 1, y: -100})
// gsap.from('#Hh1', {duration: 1, x: -100})
// gsap.from('#Hp', {duration: 1, x: -100})
// gsap.from('#Hlinks', {duration: 1, x: -100})

// gsap.from('#SOh1', {duration: 1, x: -100})
// gsap.from('.text__sec__one', {duration: 1, x: -100})


// document.addEventListener('DOMContentLoaded', function() {
//     const elements = document.querySelectorAll('.el');
//     const visibilityThreshold = 0.5; // 10% видимости элемента

//     const checkVisibility = () => {
//         elements.forEach(el => {
//             const rect = el.getBoundingClientRect();
//             const elementHeight = rect.bottom - rect.top;
//             const elementVisible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
//             const visiblePercentage = elementVisible / elementHeight;
    
//             if (visiblePercentage > visibilityThreshold) {
//                 el.classList.add('visible');
//             }
//         });
//     };

//     window.addEventListener('scroll', checkVisibility);
//     window.addEventListener('resize', checkVisibility);

//     // Initial check
//     checkVisibility();
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const elements = document.querySelectorAll('.el');
//     let visibilityThreshold = window.innerWidth <= 450 ? 0.1 : 0.5; // 10% видимости элемента для ширины <= 450px, иначе 50%

//     const checkVisibility = () => {
//         elements.forEach(el => {
//             const rect = el.getBoundingClientRect();
//             const elementHeight = rect.bottom - rect.top;
//             const elementVisible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
//             const visiblePercentage = elementVisible / elementHeight;
    
//             console.log(`Element: ${el.className}, Visible Percentage: ${visiblePercentage}, Threshold: ${visibilityThreshold}`);
    
//             if (visiblePercentage > visibilityThreshold && rect.top < window.innerHeight && rect.bottom > 0) {
//                 el.classList.add('visible');
//                 console.log(`Element ${el.className} is now visible.`);
//             } else {
//                 el.classList.remove('visible');
//                 console.log(`Element ${el.className} is not visible enough.`);
//             }
//         });
//     };
    

//     const updateVisibilityThreshold = () => {
//         visibilityThreshold = window.innerWidth <= 450 ? 0.1 : 0.5;
//         checkVisibility();
//     };

//     window.addEventListener('scroll', checkVisibility);
//     window.addEventListener('resize', updateVisibilityThreshold);

//     // Initial check
//     checkVisibility();
// });

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.el');
    let visibilityThreshold = window.innerWidth <= 450 ? 0.1 : 0.5; // 10% видимости элемента для ширины <= 450px, иначе 50%

    const updateVisibilityThreshold = () => {
        visibilityThreshold = window.innerWidth <= 450 ? 0.1 : 0.5;
    };

    const observerOptions = {
        threshold: Array.from({length: 101}, (_, i) => i * 0.01) // массив порогов от 0 до 1 с шагом 0.01
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const visiblePercentage = entry.intersectionRatio;

            console.log(`Element: ${entry.target.className}, Visible Percentage: ${visiblePercentage}, Threshold: ${visibilityThreshold}`);

            if (visiblePercentage > visibilityThreshold) {
                entry.target.classList.add('visible');
                console.log(`Element ${entry.target.className} is now visible.`);
            } else {
                entry.target.classList.remove('visible');
                console.log(`Element ${entry.target.className} is not visible enough.`);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach(el => {
        observer.observe(el);
    });

    window.addEventListener('resize', () => {
        updateVisibilityThreshold();
        elements.forEach(el => {
            observer.unobserve(el);
            observer.observe(el);
        });
    });

    // Initial threshold update
    updateVisibilityThreshold();
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


function openNavPanel() {
    var element = document.getElementById("phone-panel");
    var el = document.getElementById('btn-close');
    element.classList.add('is__active');
    el.classList.add('is__active');
    console.log('start');
}
function closeNavPanel() {
    var element = document.getElementById("phone-panel");
    var el = document.getElementById('btn-close');
    element.classList.remove('is__active');
    el.classList.remove('is__active');
    console.log('remove');
}







