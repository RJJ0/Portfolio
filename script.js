const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('#header-navigation');
const mobileViewport = window.matchMedia('(max-width: 600px)');

const setMenuOpen = (open) => {
    navLinks.classList.toggle('active', open);
    menuIcon.setAttribute('aria-expanded', String(open));
    menuIcon.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
};

menuIcon.addEventListener('click', () => {
    setMenuOpen(!navLinks.classList.contains('active'));
});

navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('header')) setMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navLinks.classList.contains('active')) {
        setMenuOpen(false);
        menuIcon.focus();
    }
});

mobileViewport.addEventListener('change', () => setMenuOpen(false));
