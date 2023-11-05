 const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-button");
    const products = document.querySelectorAll(".product");

    searchButton.addEventListener("click", handleSearch);
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            handleSearch();
        }
    });

    function handleSearch() {
        const query = searchInput.value.trim().toLowerCase();

        // Hide all products by default
        products.forEach(product => {
            product.style.display = "none";
        });

        // Show the product with the matching name
        products.forEach(product => {
            const productName = product.getAttribute("data-name").toLowerCase();
            if (productName.includes(query)) {
                product.style.display = "block";
            }
        });

    }

    // Open the lightbox and display the clicked image
function openLightbox(imageSrc) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "block";
    lightboxImg.src = imageSrc;
}

// Close the lightbox
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

// Attach click event handlers to your product images
var productImages = document.getElementsByClassName("img");

for (var i = 0; i < productImages.length; i++) {
    productImages[i].addEventListener("click", function() {
        openLightbox(this.src);
    });
}
