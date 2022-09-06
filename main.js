const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-link-container");
const toolBar = document.querySelector(".top-level");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    toolBar.classList.toggle("active");
    logo.classList.toggle("active");
})