'use strict';
// active menu

let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.6, 0.98],
};

const observer = new IntersectionObserver(handleIntersection, options);
const sections = document.querySelectorAll('section');
sections.forEach(section => observer.observe(section));

function handleIntersection (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let id = entry.target.id;
            let targetMenuItem = document.querySelector(`a[href='#${id}']`);
            
            let removeTarget = document.querySelector('.navbar__menu__item.active');
            if (removeTarget) {
                removeTarget.classList.remove('active');
            }
            targetMenuItem.classList.add('active')
        } 
    });
}