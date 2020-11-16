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

document.addEventListener('DOMContentLoaded', () => {
    menuManagement();
    createCarrousel();
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