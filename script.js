document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let open = false
    const lista = document.querySelector(".product-list")
    const cartpage = document.querySelector(".cart-content")
    const cartIcon = document.querySelector(".shopping-cart")
    const cartButtons = document.querySelectorAll(".cart-button")
    const close = document.querySelector("#close-button")
    cartpage.style.display = "none";

    cartIcon.addEventListener("click",() => {
        if (open == false) {
            open = true;
            cartpage.style.display = "block";
            update();
        } 
        else {cartpage.style.display = "none"; open = false};
    });

    close.addEventListener("click",() => {
        cartpage.style.display = "none";
        open = false;
    });

    function update() {

        while(lista.firstChild) {
            lista.removeChild(lista.firstChild);
        };
        

        const productamount = {};
        cart.forEach(item => {
            if (productamount[item.name]) {
                productamount[item.name].quantity += 1;
            } else {
                productamount[item.name] = { ...item, quantity: 1 };
            }
        });

        Object.values(productamount).forEach(function(item) {
            const newproduct = document.createElement("li")
            newproduct.textContent = `${item.name} x${item.quantity}`;

            const remove = document.createElement("button");
            remove.textContent = "Ta Bort";
            remove.addEventListener("click", () => {
                removefromcart(item.name);
            });
            newproduct.appendChild(remove);
            lista.appendChild(newproduct);
        });

        function removefromcart(productName) {
            const index = cart.findIndex(item => item.name === productName)

            if (index != -1) {
                cart.splice(index, 1)
                localStorage.setItem("cart", JSON.stringify(cart));
                update();
            }
        }
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
            update();
        });
    });
});
