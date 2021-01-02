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

$(document).ready(function () {
    for (let i = 0; i < carrousel.items.length; i++) {
        $('#carouselPictures').append(
            `<div class="carousel-item ${i === 0 ? 'active' : ''}"> <img class="d-block w-100" src="${carrousel.items[i].picture}"> </div>`
        );
    }
});