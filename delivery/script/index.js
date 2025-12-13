const modalFunc = () => {
    const modal = document.querySelector(".cart-modal__overlay");
    const cartBtn = document.querySelector("#cart-button");

    const openModal = () => {
        modal.classList.add("open");
    };

    const closeModal = () => {
        modal.classList.remove("open");
    };

    cartBtn.addEventListener("click", () => {
        openModal();
    });

    modal.addEventListener("click", (event) => {
        if (
            event.target.classList.contains("cart-modal__overlay") ||
            event.target.closest(".cart-modal__header--close")
        ) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });
};

const restsFunc = () => {
    const container = document.querySelector("#rests-container");

    const restArray = [
        {
            id: 0,
            title: "Пицца плюс",
            time: 50,
            rating: 4.5,
            price: 900,
            type: "Пицца",
            image: "pizza+.jpg",
        },
    ];

    const loading = () => {
        container.innerHTML =
            '<p style="width:1000; text-align:center;>Loading...</p>';
    };

    const randerRests = (array) => {
        container.innerHTML = "";

        array.forEach((card) => {
            container.insertAdjacentHTML(
                "beforeend",
                `
            <a href="./goods.html?id='${card.id}" class="products-card">
              <div class="products-card__image">
                <img src="/images/rests/${card.image}" alt="${card.image}">
              </div>
              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h4 class="products-card__description--title">${card.title}</h4>
                  <div class="products-card__description--badge">${card.time}</div>
                </div>
                <div class="products-card__description-row">
                  <div class="products-card__description-info">
                    <div class="products-card__description-info--raiting">
                      <img src="images/icons/star.svg" alt="star">
                      ${card.rating}
                    </div>
                    <div class="products-card__description-info--price">
                      ${card.price}
                    </div>
                    <div class="products-card__description-info--group">
                      ${card.type}
                    </div>
                  </div> 
                </div>
              </div>
            </a>
            `
            );
        });
    };

    if (container) {
        loading();

        setTimeout(() => {
            randerRests(restArray);
        }, 1000);
    }
};

modalFunc();
restsFunc();
