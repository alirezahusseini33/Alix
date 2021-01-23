const navMenu = document.querySelector(".nav-menu");
const humbergerMenu = document.querySelector(".humberger-menu");

// event letseners
humbergerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    humbergerMenu.classList.toggle("animate");
});