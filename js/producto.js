// Producto por defecto
var producto = {
    nombre: "Magdalenas de chocolate",
    precio: "10",
    descripcion: "Lorem adddddddddd adda ad daad adada ad ererereretwerggwgww twrwt  ewwewe ewe e  e e erer ere e er tw  e",
    image: "/images/banner-1.webp"
}

let obtenerUrlActual = window.location;

var idURL = obtenerUrlActual.toString().split('?id=');

if (idURL.length === 2) {
    if (!isNaN(idURL[1])) {

        fetch('/data/productos.json')
            .then(response => response.json())
            .then(data => {
                console.log(data.products[idURL[1]].price);

                if(data.products.length >= idURL[1]) {
                    
                    producto.nombre = data.products[idURL[1]].productName;
                    producto.precio = data.products[idURL[1]].price;
                    producto.descripcion = data.products[idURL[1]].description;
                    producto.image = data.products[idURL[1]].image;
                }

                document.getElementById("name").innerText = producto.nombre;
                document.getElementById("descripcion_text").innerText = producto.descripcion;
                document.getElementsByClassName("precio_producto").item(0).innerHTML = "Precio: " + producto.precio + "€";
                document.getElementsByClassName("img_producto").item(0).src = producto.image;

            });



    }

}

