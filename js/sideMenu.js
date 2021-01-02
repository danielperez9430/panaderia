$(document).ready(function () {
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
});