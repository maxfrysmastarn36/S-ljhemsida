document.addEventListener("DOMContentLoaded", function () {
    const lista = document.querySelector(".product-list")
    const cartpage = document.querySelector(".cart-content")
    const cartIcon = document.querySelector(".shopping-cart")
    cartpage.style.display = "none";

    cartIcon.addEventListener("click", () => {
        cartpage.style.display = "block";
    });
});