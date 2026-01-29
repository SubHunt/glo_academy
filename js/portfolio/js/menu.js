const burger = document.querySelector(".humburger-menu");
const menu = document.querySelector(".menu");
const menulinks = document.querySelectorAll(".menu-list__item");
burger.addEventListener("click", () => {
    menu.classList.add("menu-active");
});

menulinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("menu-active");
    });
});

document.addEventListener("click", (event) => {
    // if (!(event.target === menu || event.target === burger)) {
    if (
        !(
            event.target.closest(".menu") ||
            event.target.closest(".humburger-menu")
        )
    ) {
        menu.classList.remove("menu-active");
    }
});
