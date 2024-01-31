'use strick';

//home scrolling : opacity change & arrow-up botton disapears when it's on the home screen
const homeContainer = document.querySelector('.home__container');
const homeHeight = homeContainer.offsetHeight;

const arrow = document.querySelector('.arrow');
arrow.style.opacity =  scrollY > homeHeight / 2 ? 1 : 0;

document.addEventListener('scroll', () => {
    homeContainer.style.opacity = 1 - scrollY / homeHeight;   
    arrow.style.opacity =  scrollY > homeHeight / 2 ? 1 : 0;
});


// toggle button
const navMenu = document.querySelector('.navbar__menus');
const navTogle = document.querySelector('.navbar__toggle');

navTogle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

navMenu.addEventListener('click', () => {
    navMenu.classList.remove('open');
});
