$(document).ready(function () {
    const thisPage = window.location.pathname;
    console.log(thisPage)
    switch (thisPage) {
        case '/index.html':
            getProducts('home');
            break;

        case '/panaderia.html':
            getProducts('panaderia');
            break;
    
        default:
            break;
    }
});

const getProducts = (page) => {
    switch (page) {
        case 'home':
            insertProducts('https://panaderia-4d3b2-default-rtdb.firebaseio.com/home.json', 'productsSectionHome');
            break;

        case 'panaderia':
            insertProducts('https://panaderia-4d3b2-default-rtdb.firebaseio.com/bread.json', 'productsSectionBread');
            break;
    
        default:
            break;
    }
}

const insertProducts = async (url, divId) => {
    const result = await axios.get(url);
    for (var i in result.data) {
        const categoryDiv = document.createElement('div');
        categoryDiv.setAttribute('class', 'category');
        const title = document.createElement('h3');
        title.setAttribute('class', 'categoryTitle');
        const titleText = document.createTextNode(result.data[i].title);
        title.appendChild(titleText);
        categoryDiv.appendChild(title);
        const productsContainer = document.createElement('div');
        productsContainer.setAttribute('class', 'productsContainer');

        for (var j in result.data[i].products) {
            $(productsContainer).append(`<div class="productContainer"><span class="productTitle">${result.data[i].products[j].name}</span><img src="${result.data[i].products[j].picture}"></div>`);
        }

        categoryDiv.appendChild(productsContainer);
        document.getElementById(divId).appendChild(categoryDiv);
    }
}