import { servicios } from "../servicios/servicios-productos.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let imgCargada =""
    imgCargada = document.querySelector("[data-cargarImagen]");
    const imgUrl = document.querySelector("[data-tipo='imagen']").value;
    const categoria = document.querySelector("[data-tipo='categoria']").value;
    const nombre = document.querySelector("[data-tipo='nombre']").value;
    const precio = document.querySelector("[data-tipo='precio']").value;
    const descripcion = document.querySelector("[data-tipo='descripcion']").value;
    let mensajeError = document.querySelector("[data-errorGuardar]");
    mensajeError.style.display = "none"
    let cargarImg = true;
    let img = "";
    console.log(imgCargada.files[0])
    imgCargada.files[0] == null ? img = imgUrl : cargarImg = false;
    console.log(cargarImg)
    cargarImg ? servicios.crearProducto(img, categoria, nombre, precio, descripcion).then(respuesta => {
        console.log(respuesta);
    }).catch(error => console.log(error)) : mensajeError.innerHTML = "Esta pagina utiliza una bd json, por lo tanto no es posible guardar la imagen, utilice por favor una url con la imagen."
    if (!cargarImg) {
        mensajeError.style.display = "block"
        imgCargada.value = null;
        console.log(imgCargada)
    }
})

