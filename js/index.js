const modalProduct = document.querySelector(".modal_product");
const catalogList = document.querySelector(".catalog__list");

const product = {
    title: "Бургер Макс",
    price: "10000",
    weight: "5000",
    calories: "5000",
    description: "Огромный бергер, который для компании.",
    image: "img/megaburger.jpg",
    ingredients: [
        "Пшеничная булочка",
        "Котлета из говядины",
        "Много сыра",
        "Листия салата",
    ],
};

const modalProductTitle = document.querySelector(".modal-product__title");
const modalProductImage = document.querySelector(".modal-product__image");
const modalProductDescription = document.querySelector(
    ".modal-product__description"
);
const modalProductIngredients = document.querySelector(
    ".modal-product__ingredients"
);
const modalProductPriceCount = document.querySelector(
    ".modal-product__price-count"
);

const ingredientsList = document.querySelector(".ingredients__list");

const ingredientsListItems = product.ingredients.map((el) => {
    const li = document.createElement("li");
    li.classList.add("ingredients__item");
    li.textContent = el;
    return li;
});

ingredientsList.innerHTML = "";
ingredientsList.append(...ingredientsListItems);

modalProductTitle.textContent = product.title;
modalProductImage.src = product.image;
modalProductDescription.textContent = product.description;

catalogList.addEventListener("click", function (e) {
    const target = e.target;

    if (target.closest(".product__detail"))
        modalProduct.classList.add("modal_open");
});

modalProduct.addEventListener("click", function (e) {
    const target = e.target;

    if (target.closest(".modal__close") || target == modalProduct) {
        this.classList.remove("modal_open");
    }
});
