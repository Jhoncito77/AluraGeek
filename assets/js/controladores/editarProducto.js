import { servicios } from "../servicios/servicios-productos.js";


const url = new URL(window.location)
const id = url.searchParams.get("id");
const producto = await servicios.getProductoId(id);
let imagen = document.querySelector("[data-tipo='imagen']");
imagen.value = producto.img;
let categoria = document.querySelector("[data-tipo='categoria']");
categoria.value = producto.categoria;
let nombre = document.querySelector("[data-tipo='nombre']");
nombre.value = producto.nombre;
let precio = document.querySelector("[data-tipo='precio']");
precio.value = producto.precio;
let descripcion = document.querySelector("[data-tipo='descripcion']");
descripcion.value = producto.descripcion;
const btnEditar = document.querySelector(".addProducto");


btnEditar.addEventListener("click", (event) => {
    event.preventDefault();
    servicios.editarProducto(id, imagen.value, categoria.value, nombre.value, precio.value, descripcion.value).catch(error => console.log(error))
})