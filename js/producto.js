
var producto = {
    nombre : "Magdalenas de chocolate",
    precio : "10",
    descripcion : "Lorem adddddddddd adda ad daad adada ad ererereretwerggwgww twrwt  ewwewe ewe e  e e erer ere e er tw  e",
    image : "/images/banner-1.webp"
}

let obtenerUrlActual = window.location;

var idURL = obtenerUrlActual.toString().split('?id=');

if(idURL.length === 2) {
    if(!isNaN(idURL[1])) {

        document.getElementById("name").innerText = producto.nombre;
        document.getElementById("descripcion_text").innerText = producto.descripcion;
        document.getElementsByClassName("precio_producto").item(0).innerHTML = "Precio: " + producto.precio + "€";
        document.getElementsByClassName("img_producto").item(0).src = producto.image;

    }
    
}
