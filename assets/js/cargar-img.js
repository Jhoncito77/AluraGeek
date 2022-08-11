export function cargarImagen(){
    document.querySelector("[data-cargarImagen]").click();
}

export function nombreImg (){
    const inputImg = document.querySelector("[data-tipo='imagen']");
    inputImg.value = document.querySelector("[data-cargarImagen]").files[0].name;
}
    
