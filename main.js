
// Navbar change the backgroud color when scrolling
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//home scrolling : opacity change & arrow-up botton disapears when it's on the home screen
const homeContainer = document.querySelector('.home__container');
const homeHeight = homeContainer.offsetHeight;

const arrow = document.querySelector('.arrow');
arrow.style.opacity =  scrollY > homeHeight / 2 ? 1 : 0;

document.addEventListener('scroll', () => {
    homeContainer.style.opacity = 1 - scrollY / homeHeight;   
    arrow.style.opacity =  scrollY > homeHeight / 2 ? 1 : 0;
});

