const navMenu = document.querySelector(".nav-menu");
const humbergerMenu = document.querySelector(".humberger-menu");
const navLink = document.querySelectorAll(".nav-link");

// event letseners
humbergerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    humbergerMenu.classList.toggle("animate");
});

// closing mobile-nav when clicking the links
navLink.forEach((link) => {
    link.addEventListener("click", () => {
        link.classList.remove("open");
    });
});