  btnResults.addEventListener('click', () => {

            // Get all checked brands
            const selectedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked'))
                .map(checkbox => checkbox.value.toLowerCase()); // Convert values to lowercase

            console.log("Selected brands:", selectedBrands);