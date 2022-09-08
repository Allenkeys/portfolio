const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-link-container');
const toolBar = document.querySelector('.top-level');
const navLinks = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function activate() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  toolBar.classList.toggle('active');
  logo.classList.toggle('active');
  body.classList.toggle('lock-scroll');
}

hamburger.addEventListener('click', () => {
  activate();
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    activate();
  });
});
