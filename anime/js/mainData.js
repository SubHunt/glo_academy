const mainData = () => {
    fetch("./db.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const ganres = new Set();
            renderTopAnime(
                data.anime.sort((a, b) => b.views - a.views).slice(0, 5),
            );

            data.anime.forEach((item) => {
                ganres.add(item.ganre);
            });
            renderAnimeList(data.anime, ganres);
        });

    function processData(data) {
        const ganres = new Set();
        data.forEach((item) => {
            ganres.add(item.ganre);
        });
        renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));
        renderAnimeList(data, ganres);
        renderGanreList(ganres);
    }

    function renderTopAnime(array) {
        const wrapper = document.querySelector(".filter__gallery");

        array.forEach((element) => {
            wrapper.insertAdjacentHTML(
                "beforeend",
                `
      <div
        class="product__sidebar__view__item set-bg mix"
        data-setbg="${element.image}"
      >
        <div class="ep">${element.rating} / 10</div>
        <div class="view"><i class="fa fa-eye"></i> ${element.views}</div>
        <h5>
          <a href="/anime-details.html"
            >${element.title}</a
          >
        </h5>
      </div>
      `,
            );
            wrapper.querySelectorAll(".set-bg").forEach((element) => {
                element.style.backgroundImage = `url(${element.dataset.setbg})`;
            });
        });
    }
    function renderAnimeList(array, ganres) {
        const wrapper = document.querySelector(".product .col-lg-8");
        const preloader = document.querySelector(".preloder");

        ganres.forEach((ganre) => {
            const productBlock = document.createElement("div");
            productBlock.classList.add("mb-5");
            const listBlock = document.createElement("div");
            const list = array.filter((item) => item.ganre === ganre);

            listBlock.classList.add("row");

            productBlock.insertAdjacentHTML(
                "beforeend",
                `<div class="row">
        <div class="col-lg-8 col-md-8 col-sm-8">
          <div class="section-title">
            <h4>${ganre}</h4>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="btn__all">
            <a href="/categories.html?ganre=${ganre}" class="primary-btn"
              >View All <span class="arrow_right"></span
            ></a>
          </div>
        </div>
      </div>`,
            );

            list.forEach((item) => {
                const tagsBlock = document.createElement("ul");
                item.tags.forEach((tag) => {
                    tagsBlock.insertAdjacentHTML(
                        "beforeend",
                        `<li>${tag}</li>`,
                    );
                });

                listBlock.insertAdjacentHTML(
                    "beforeend",
                    `<div class="col-lg-4 col-md-6 col-sm-6">
      <div class="product__item">
        <div
          class="product__item__pic set-bg"
          data-setbg="${item.image}"
        >
          <div class="ep">${item.rating} / 10</div>
          <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
        </div>
        <div class="product__item__text">
        ${tagsBlock.outerHTML}
          <h5>
            <a href="/anime-details.html?itemId=${item.id}"
              >${item.title}</a
            >
          </h5>
        </div>
      </div>`,
                );
            });

            productBlock.append(listBlock);
            wrapper.append(productBlock);
            wrapper.querySelectorAll(".set-bg").forEach((element) => {
                element.style.backgroundImage = `url(${element.dataset.setbg})`;
            });
        });
        setTimeout(() => {
            preloader.classList.remove("active");
        }, 500);
    }

    function renderGanreList(ganres) {
        const dropdownBlock = document.querySelector(".header__menu .dropdown");

        ganres.forEach((ganre) => {
            dropdownBlock.insertAdjacentHTML(
                "beforeend",
                `<a href="/categories.html?ganre=${ganre}">${ganre}</a>`,
            );
        });
    }
};

mainData();
