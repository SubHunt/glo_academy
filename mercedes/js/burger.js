const burger = document.querySelector(".humburger-menu");
const menuElem = document.querySelector(".menu");
const clickBtn = document.querySelector(".menu-list");

const toggleMenu = () => {
    menuElem.classList.toggle("menu-active");
    burger.classList.toggle("humburger-menu-active");
};

burger.addEventListener("click", () => {
    toggleMenu();
    // menuElem.classList.toggle("menu-active");
});

clickBtn.addEventListener("click", () => {
    menuElem.classList.remove("menu-active");
    burger.classList.remove("humburger-menu-active");
});
