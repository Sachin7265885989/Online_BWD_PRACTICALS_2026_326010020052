let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cartBtn").textContent =
        "Cart (" + cartCount + ")";

    alert("Perfume added to your cart!");
}
function searchProducts() {
    let input = document.getElementById("searchBox")
        .value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        let name = product.querySelector("h3")
            .textContent.toLowerCase();

        product.style.display =
            name.includes(input) ? "block" : "none";
    });
}