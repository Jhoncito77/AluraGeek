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

    /* productos.then((respuesta) =>{
        respuesta.forEach((producto) => {
            // console.log(producto.querySelector(".item__nombre").innerHTML)
            let nombreProducto = producto.nombre.toLowerCase();
    
    
            if (!nombreProducto.includes(productoABuscar.toLowerCase())) {
                producto.style.display = "none";
            } else {
                producto.style.display = "block";
            }
        });
    }); */
});

// Funcion para opcion de ver todos los productos.
const categorias = document.querySelectorAll(".linea__productos");


categorias.forEach((categoria) => {
    
    let nombreCategoria = categoria.querySelector(".linea__titulo").innerHTML;
    let lista = categoria.querySelector(".linea__lista");
    let verTodo = categoria.querySelector(".link__text");
    let ocultos = categoria.querySelectorAll(".ocultar");
    verTodo.addEventListener("click", (event) => {
        ocultos.forEach(dato=>{
            dato.style.display="block";
        })
        
        listarProductos(productos, nombreCategoria, lista);
    });
});

   // productos.then(result => result.forEach(resp => console.log(resp.nombre)))

const listarProductos = (productos, categoria, lista)=>{
   // console.log(productos, categoria, lista)
    
    productos.then(respuesta =>{
        respuesta.forEach((producto) => {
            let dato = "";
            if(producto.categoria == categoria){
                
                dato = document.createElement("li");
                dato.classList.add("linea__item");
                dato.innerHTML = `<img src="${producto.img}" class="img_new">
                    <p class="item__nombre">${producto.nombre}</p>
                    <p class="item__precio">R$ ${producto.precio}</p>
                    <a href="#" class="item__ver">Ver producto</a>`
                
                console.log(dato)
                lista.appendChild(dato);
            }
            
            
        });
    }).catch(error=>console.log(error)) 
}