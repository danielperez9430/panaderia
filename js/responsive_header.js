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


    /** Media Query en JS para modificar el DOM en este caso */
    var ventana = window;

    ventana.addEventListener('resize', function (mql) {
        var ancho_ventana = window.innerWidth; // Obtenemos el ancho actual de la ventana

        if (ancho_ventana > 830) {
            document.getElementById('hambMenu').setAttribute('class', 'hambMenu'); // Ocultamos el menu desplegable
        }
    });

});



