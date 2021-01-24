const navMenu = document.querySelector(".nav-menu");
const humbergerMenu = document.querySelector(".humberger-menu");
const navLink = document.querySelectorAll(".nav-link");
const navLists = document.querySelectorAll("li");
// event letseners
humbergerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    humbergerMenu.classList.toggle("animate");
});

// closing mobile-nav when clicking the links
navLists.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.add("close");
        humbergerMenu.classList.toggle("animate");
        setTimeout(() => {
            navMenu.classList.remove("close");
            navMenu.classList.remove("open");
        }, 100);
    });
});