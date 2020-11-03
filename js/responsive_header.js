document.addEventListener('DOMContentLoaded', () => {
    var menuStatus = 'hidden';
    document.getElementById('hambButton').addEventListener('click', () => {
        if (menuStatus == 'hidden') {
            document.getElementById('hambMenu').setAttribute('class', 'hambMenu displayHambMenu');
            menuStatus = 'display';
        }
        else if (menuStatus == 'display') {
            document.getElementById('hambMenu').setAttribute('class', 'hambMenu');
            menuStatus = 'hidden';
        }
    });
});
