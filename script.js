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
    function copyTextToClipboard() {
            // Get the text to copy
            var textToCopy = document.getElementById("textToCopy");

            // Create a text area element to hold the text
            var textArea = document.createElement("textarea");
            textArea.value = textToCopy.textContent;

            // Append the text area to the document
            document.body.appendChild(textArea);

            // Select the text inside the text area
            textArea.select();

            // Copy the selected text to the clipboard
            document.execCommand("copy");

            // Remove the text area from the document
            document.body.removeChild(textArea);

            // Provide feedback to the user
            alert("Text has been copied to the clipboard.");
        }