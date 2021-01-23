const navMenu = document.querySelector(".navMenu");
const humberger = document.querySelector(".humberger-menu");

// event letseners
humberger.addEventListener("click", () => {
    navMenu.classList.add(".open");
});

// functions