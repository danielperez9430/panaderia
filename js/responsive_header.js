const carrousel = {
    items: [
        {
            picture: 'assets/picture1.jpg',
            destinationURL: ''
        },
        {
            picture: 'assets/picture2.jpg',
            destinationURL: ''
        },
        {
            picture: 'assets/picture3.jpg',
            destinationURL: ''
        },
    ]
}

const homepageProducts = {
    categories: [
        {
            title: 'Ultimos productos',
            products: [
                {
                    name: 'Pan 1',
                    picture: 'assets/pan1.jpg',
                    url: ''
                },
                {
                    name: 'Pan 2',
                    picture: 'assets/pan2.jpg',
                    url: ''
                },
                {
                    name: 'Pan 3',
                    picture: 'assets/pan3.jpg',
                    url: ''
                },
                {
                    name: 'Pan 4',
                    picture: 'assets/pan1.jpg',
                    url: ''
                },
                {
                    name: 'Pan 5',
                    picture: 'assets/pan2.jpg',
                    url: ''
                },
                {
                    name: 'Pan 6',
                    picture: 'assets/pan3.jpg',
                    url: ''
                },
            ]
        },
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    menuManagement();
    createCarrousel();
    createProducts();
});

function menuManagement() {
    var menuStatus = 'display';
    document.getElementById('hambButton').addEventListener('click', () => {
        if (menuStatus == 'hidden') {
            $('#hambMenu').removeClass('hideHambMenu');
            $('#bodyContainer').removeClass('mainContentHiddenMenu');
            menuStatus = 'display';
        }
        else if (menuStatus == 'display') {
            $('#hambMenu').addClass('hideHambMenu');
            $('#bodyContainer').addClass('mainContentHiddenMenu');
            menuStatus = 'hidden';
        }
    });
}

function createCarrousel() {
    for (let i = 0; i < carrousel.items.length; i++) {
        $('#carouselPictures').append(
            `<div class="carousel-item ${i === 0 ? 'active' : ''}"> <img class="d-block w-100" src="${carrousel.items[i].picture}"> </div>`
        );
    }
}

function createProducts() {
    homepageProducts.categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.setAttribute('class', 'category');
        const title = document.createElement('h3');
        title.setAttribute('class', 'categoryTitle');
        const titleText = document.createTextNode(category.title);
        title.appendChild(titleText);
        categoryDiv.appendChild(title);
        const productsContainer = document.createElement('div');
        productsContainer.setAttribute('class', 'productsContainer');

        category.products.forEach(product => {
            $(productsContainer).append(`<div class="productContainer"><span class="productTitle">${product.name}</span><img src="${product.picture}"></div>`);
        });

        categoryDiv.appendChild(productsContainer);
        document.getElementById('productsSection').appendChild(categoryDiv);
    });
}