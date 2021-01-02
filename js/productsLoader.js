$(document).ready(function () {
    const thisPage = window.location.pathname;
    console.log(thisPage)
    switch (thisPage) {
        case '/index.html':
            getProducts('home');
            break;
    
        default:
            break;
    }
});

const getProducts = async (page) => {
    switch (page) {
        case 'home':
            const result = await axios.get('https://panaderia-4d3b2-default-rtdb.firebaseio.com/home.json');
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
                document.getElementById('productsSection').appendChild(categoryDiv);
                // $('#productsContainer').append(`<div class="productContainer"><span class="productTitle">${result.data[i].name}</span><img src="${result.data[i].picture}"></div>`)
            }
            break;
    
        default:
            break;
    }
}