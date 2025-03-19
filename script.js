document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    const lista = document.querySelector(".product-list")
    const cartpage = document.querySelector(".cart-content")
    const cartIcon = document.querySelector(".shopping-cart")
    const cartButtons = document.querySelectorAll(".cart-button")
    const close = document.querySelector("#close-button")
    cartpage.style.display = "none";

    cartIcon.addEventListener("click",() => {
        cartpage.style.display = "block";
        update();
    });

    close.addEventListener("click",() => {
        cartpage.style.display = "none";
        while(lista.firstChild) {
            lista.removeChild(lista.firstChild);
        };
    });

    function update() {
        cart.forEach(function(item) {
            const newproduct = document.createElement("li")
            newproduct.textContent = item.name;
            lista.appendChild(newproduct);
        });
    }

    cartButtons.forEach(button => {
        button.addEventListener("click", function(){
            const product = this.closest(".product");
        
            const productNameElement = product.querySelector("p");
            const productPriceElement = product.querySelector(".price2");
            const productName = productNameElement.textContent;
            const productPrice = productPriceElement.textContent;
        
            cart.push({
                name: productName,
                price: productPrice
            });
            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });
});
