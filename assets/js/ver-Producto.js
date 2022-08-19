import { servicios } from "./servicios/servicios-productos.js";

const Productos = servicios.getProductos();
const url = new URL(window.location);
const id = url.searchParams.get("id");


const verProducto = (id) => {
    const seccion = document.querySelector(".producto");
    const img = document.createElement("img");
    img.classList.add("img__producto");
    seccion.appendChild(img);
   
    const producto = servicios.getProductoId(id);
    producto.then(respuesta => {
        img.src = respuesta.img;
       

        const datos = document.createElement("div");
        datos.classList.add("datos__producto");
        datos.innerHTML = `<p class="titulo__producto">${respuesta.nombre}</p>
    <p class="precio__producto">$ ${respuesta.precio}</p>
    <p class="descripcion__producto">${respuesta.descripcion}</p>`;

        seccion.appendChild(datos);
    });
}

const verProductosSimilares =(id)=>{
const listaProductosSimilares = document.querySelector(".otros_productos");

    servicios.getProductoId(id).then(productoActual =>{
        
        Productos.then((respuesta)=>{
            respuesta.forEach(producto => {
                if(producto.categoria == productoActual.categoria && producto.id != productoActual.id){
                    const contenedor = document.createElement("div");
                    contenedor.classList.add("otro__producto");
                    contenedor.innerHTML = `<img class="sw-1" src="${producto.img}">
                    <p class="titulo__otro-producto">${producto.nombre}</p>
                    <p class="precio__otro-producto">$ ${producto.precio}</p>
                    <a class="link__producto">Ver producto</a>`;

                    contenedor.querySelector(".link__producto").addEventListener("click",()=>{
                        window.location.href = `./producto.html?id=${producto.id}`;
                    });

                    listaProductosSimilares.appendChild(contenedor);
                }
            });
        })
    })
    
    
}



verProducto(id);
verProductosSimilares(id);