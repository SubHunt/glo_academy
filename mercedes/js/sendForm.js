const form = document.querySelector(".form-test-drive");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let data = {};

    for (let { name, value } of form.elements) {
        if (name) {
            data[name] = value;
        }
    }
});
