import { servicios } from "../servicios/servicios-productos.js";

const buscador = document.querySelector(".search");

const productos = servicios.getProductos();

buscador.addEventListener("keyup", (event) => {
    let productoABuscar = buscador.value;
    const productosEnPagina = document.querySelectorAll(".linea__item");
    //console.log(productoABuscar)
    productosEnPagina.forEach((producto) => {
        // console.log(producto.querySelector(".item__nombre").innerHTML)
        let nombreProducto = producto.querySelector(".item__nombre").innerHTML.toLowerCase();


        if (!nombreProducto.includes(productoABuscar.toLowerCase())) {
            producto.style.display = "none";
        } else {
            producto.style.display = "block";
        }
    });


});

// Funcion para opcion de ver todos los productos.
const categorias = document.querySelectorAll(".linea__productos");

if (categorias.length > 1) {
    categorias.forEach((categoria) => {

        let nombreCategoria = categoria.querySelector(".linea__titulo").innerHTML;
        let lista = categoria.querySelector(".linea__lista");
        let verTodo = categoria.querySelector(".link__text");
        let ocultos = categoria.querySelectorAll(".ocultar");
        verTodo.addEventListener("click", (event) => {
            ocultos.forEach(dato => {
                dato.style.display = "block";
            })

            listarProductosPorCategoria(productos, nombreCategoria, lista);
        });
    });
}


// productos.then(result => result.forEach(resp => console.log(resp.nombre)))

const listarProductosPorCategoria = (productos, categoria, lista) => {
    // console.log(productos, categoria, lista)

    productos.then(respuesta => {
        respuesta.forEach((producto) => {
            let dato = "";
            if (producto.categoria == categoria) {

                dato = document.createElement("li");
                dato.classList.add("linea__item");
                dato.innerHTML = `<img src="${producto.img}" class="img_new">
                    <p class="item__nombre">${producto.nombre}</p>
                    <p class="item__precio">R$ ${producto.precio}</p>
                    <a href="#" class="item__ver">Ver producto</a>`


                lista.appendChild(dato);
            }


        });
    }).catch(error => console.log(error))
}

export const listarProductos = (productos, lista) => {

    productos.then(respuesta => {
        respuesta.forEach((producto) => {
            let dato = "";


            dato = document.createElement("li");
            dato.classList.add("linea__item");
            dato.innerHTML = `<img src="${producto.img}" class="img_new">
                     <p class="item__nombre">${producto.nombre}</p>
                     <p class="item__precio">R$ ${producto.precio}</p>
                     <div class="opciones">
                     <a href="#" class="item__editar">Editar</a>
                     <a href="#" class="item__eliminar">Eliminar</a>
                     </div>`

            lista.appendChild(dato);
            const btnEliminar = dato.querySelector(".item__eliminar");
            btnEliminar.addEventListener("click",()=>{
                servicios.deleteProducto(producto.id).catch(error=>console.log(error))
            })


        });
    }).catch(error => console.log(error))
}

if (document.querySelectorAll(".linea__productos").length == 1) {
    let lista = document.querySelector(".linea__lista");
    listarProductos(productos, lista)

}
