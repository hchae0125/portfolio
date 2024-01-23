
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

//home scrolling : opacity change
const homeContainer = document.querySelector('.home__container');
const homeHeight = homeContainer.offsetHeight;

document.addEventListener('scroll', () => {
    homeContainer.style.opacity = 1 - scrollY / homeHeight;
});

