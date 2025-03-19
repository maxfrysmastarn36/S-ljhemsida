document.addEventListener("DOMContentLoaded", function () {
    const lista = document.querySelector(".product-list")
    const cartpage = document.querySelector(".cart-content")
    cartpage.style.display = "none";

    cartIcon.addEventListener("click", () => {
        cartpage.style.display = "block";
    });
});