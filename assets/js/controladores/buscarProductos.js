import { servicios } from "../servicios/servicios-productos.js";

const buscador = document.querySelector(".search");
const productosEnPagina = document.querySelectorAll(".linea__item");
const productos = servicios.getProductos();

buscador.addEventListener("keyup",(event)=>{
    let productoABuscar = buscador.value;
    
   //console.log(productoABuscar)
    productosEnPagina.forEach((producto) => {
       // console.log(producto.querySelector(".item__nombre").innerHTML)
       let nombreProducto = producto.querySelector(".item__nombre").innerHTML.toLowerCase();
       
       
        if(!nombreProducto.includes(productoABuscar.toLowerCase())){
            producto.style.display="none";
        }else{
            producto.style.display="block";
        }
    });

    productos.forEach((producto) => {
        // console.log(producto.querySelector(".item__nombre").innerHTML)
        let nombreProducto = producto.querySelector(".item__nombre").innerHTML.toLowerCase();
        
        
         if(!nombreProducto.includes(productoABuscar.toLowerCase())){
             producto.style.display="none";
         }else{
             producto.style.display="block";
         }
     });
})