// const main = document.querySelector(".main > div");
// const main = document.querySelectorAll("section");
// // const main = document.querySelectorAll("section")[1];
// console.log(main);

// // for (let i = 0; i < main.length; i++) {
// //     console.log(main[i]);
// // }

// main.forEach((element, index, array) => {
//     console.log(element);
//     console.log(index);
//     console.log(array);
// });
const tabButtons = document.querySelectorAll(".design-list__item");
const tabDescriptions = document.querySelectorAll(".design__descr");
const tabImages = document.querySelectorAll(".design-images");

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove("hidden");
        } else {
            elem.classList.add("hidden");
        }
    });
};
tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("click", (event) => {
        const dataValue = tabButton.dataset.tabsHandler;
        // console.dir(event.target);
        // console.log(index);
        // tabDescriptions.forEach((descr) => {
        //     if (descr.dataset.tabsField === dataValue) {
        //         descr.classList.remove("hidden");
        //     } else {
        //         descr.classList.add("hidden");
        //     }
        // });

        // tabImages.forEach((image, indexImage) => {
        //     if (index === indexImage) {
        //         image.classList.remove("hidden");
        //     } else {
        //         image.classList.add("hidden");
        //     }
        // });

        changeContent(tabDescriptions, dataValue);
        changeContent(tabImages, dataValue);

        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add("design-list__item_active");
            } else {
                btn.classList.remove("design-list__item_active");
            }
        });
    });
});
