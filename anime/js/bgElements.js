const bgElements = () => {
    const elements = document.querySelectorAll(".set-bg");

    elements.forEach((elem) => {
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
    });

    // for (let i = 0; i < elements.length; i++) {
    //     elements[i].style.backgroundImage =
    //         `url(${elements[i].getAttribute("data-setbg")})`;
    // }
};

bgElements();
