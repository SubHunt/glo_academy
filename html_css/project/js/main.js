// const swiper = new Swiper(".swiper", {
//     // Параметры слайдера
//     loop: true, // бесконечная прокрутка. Если true, то слайдер будет прокручиваться бесконечно.

//     // // Пагинация
//     // pagination: {
//     //     el: ".swiper-pagination",
//     // },

//     // // Стрелки навигации
//     // navigation: {
//     //     nextEl: ".swiper-button-next",
//     //     prevEl: ".swiper-button-prev",
//     // },
// });

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});

const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar-panel");
const menuCloseBtn = document.querySelector(".close-menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("is-open");
});

menuCloseBtn.addEventListener("click", () => {
    menu.classList.toggle("is-open");
});
