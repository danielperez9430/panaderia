document.addEventListener('DOMContentLoaded', () => {
    var menuStatus = 'display';
    document.getElementById('hambButton').addEventListener('click', () => {
        if (menuStatus == 'hidden') {
            $('#hambMenu').removeClass('hideHambMenu');
            $('#mainContent').removeClass('mainContentHiddenMenu');
            menuStatus = 'display';
        }
        else if (menuStatus == 'display') {
            $('#hambMenu').addClass('hideHambMenu');
            $('#mainContent').addClass('mainContentHiddenMenu');
            menuStatus = 'hidden';
        }
    });
});
