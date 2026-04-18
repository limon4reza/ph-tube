function loadCategories() {
    // fetch the data

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json()) // convert promise to json
        .then(data => displayCategories(data.categories)) // send data to displayCategories function
}

// category_id":"1001","category":"Music

function displayCategories(categories) {
    const categoryContainer = document.getElementById('category-container');

    for (let category of categories) {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        <button class="btn btn-sm bg-[#25252515] hover:bg-[#FF1F3D] hover:text-white text-[#25252590]">${category.category}</button>
        `;
        categoryContainer.appendChild(categoryDiv);
    }
}

loadCategories();
