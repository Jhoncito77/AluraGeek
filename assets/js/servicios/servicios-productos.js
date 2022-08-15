const crearProducto = (img,categoria,nombre,precio,descripcion)=>{
    return fetch("http://localhost:3000/Productos",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            id : uuid.v4(),
            img,
            categoria,
            nombre,
            precio,
            descripcion
        })
    })
}



export const servicios = {
    crearProducto
}