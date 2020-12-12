window.onload = function () {

  /**
   * Función Jquery para el popover
   */
  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  /**
   * Función Jquery para el tooltip
   */
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  /** Función que cambia el tamaño del texto dependiendo de la posición de la barra de desplazamiento */
  if (document.getElementById('barra-progreso') != null) {
    document.getElementById('barra-progreso').addEventListener('mouseup', (msg) => {

      var valor_actual = document.getElementById('barra-progreso').value;

      var parrafos = document.getElementsByClassName('texto_post');

      switch (valor_actual) {
        case '0':
          Object.keys(parrafos).forEach(parrafo => {

            parrafos[parrafo].style = "";

          });
          break;
        case '50':
          Object.keys(parrafos).forEach(parrafo => {

            parrafos[parrafo].style = "font-size: 18px";

          });
          break;
        case '100':
          Object.keys(parrafos).forEach(parrafo => {

            parrafos[parrafo].style = "font-size: 20px";

          });
          break;
        default:
          console.log('Valor no contemplado');
          break;
      }


    });
  }

  /** Funcionalidad para el menu desplegable */

  $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
      $('.dropdown-submenu .show').removeClass("show");
    });


    return false;
  });

  /** Función Submenu desplegable */

  function ocultarMostrarSubmenus(soloOcultar) {
    var elementos = document.getElementsByClassName('item-desplegable');
    console.log(soloOcultar)
    Object.keys(elementos).forEach(elemento => {

      if (soloOcultar) {
        elementos[elemento].setAttribute("hidden", "true");
      } else {
        if (elementos[elemento].hidden) { // Si el elemento esta oculto lo mostramos
          elementos[elemento].removeAttribute("hidden");
        } else {
          elementos[elemento].setAttribute("hidden", "true");
        }
      }

    });
  }

  if (document.getElementById('desplegable') != null) {
    document.getElementById('desplegable').addEventListener("click", (evento) => {
      ocultarMostrarSubmenus(false);
    });
  }

  if (document.getElementById('hambButton') != null) {
    document.getElementById('hambButton').addEventListener("click", (evento) => {
      ocultarMostrarSubmenus(true);
    });
  }

  /** Animacion Canvas */

  if (document.getElementById('canvas_animacion') != null) {

    var lienzo = document.getElementById('canvas_animacion');
    const ctx = lienzo.getContext('2d');
    var x = 0;

    function pintarLienzo(ctx, x) {

      ctx.fillStyle = "#fff"; //Ponemos el color blanco al lienzo
      ctx.fillRect(0, 0, lienzo.width, lienzo.height); //Dibujamos el lienzo
      ctx.fillStyle = 'teal'; // Le ponemos un color al elemento que queremos dibujar
      ctx.fillRect(x, 0, 2, 2); // Dibujamos cuestra figura, en este caso un cuadrado
      ctx.fillStyle = 'red'; // Le ponemos un color al elemento que queremos dibujar
      ctx.fillRect(x + 4, 0, 2, 2); // Dibujamos cuestra figura, en este caso un cuadrado
      ctx.fillStyle = 'blue'; // Le ponemos un color al elemento que queremos dibujar
      ctx.fillRect(x + 8, 0, 2, 2); // Dibujamos cuestra figura, en este caso un cuadrado

    }

    for (let x = 1; x <= lienzo.width; x += 1) {

      setTimeout(function () {
        pintarLienzo(ctx, x);
      }, x * 10);

    }

  }
}
