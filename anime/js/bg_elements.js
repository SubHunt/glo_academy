const elements = document.querySelectorAll(".set-bg");

for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundImage =
        `url(${elements[i].getAttribute("data-setbg")})`;
}
