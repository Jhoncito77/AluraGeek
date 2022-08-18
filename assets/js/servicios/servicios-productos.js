const crearProducto = (img, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/Productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: uuid.v4(),
            img,
            categoria,
            nombre,
            precio,
            descripcion
        })
    })
}

const getProductos = () => {
    return fetch("http://localhost:3000/Productos").then(respuesta => {
        return respuesta.json();
    }).catch(error => console.log(error));
}

const deleteProducto = (id) => {
    return fetch(`http://localhost:3000/Productos/${id}`, {
        method: "DELETE"
    });
}

const getProductoId = (id) => {
    return fetch(`http://localhost:3000/Productos/${id}`).then(resp => {
        return resp.json();
    }).catch(error => console.log(error));
}

const editarProducto = (id, img, categoria, nombre, precio, descripcion) => {
    return fetch(`http://localhost:3000/Productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            img,
            categoria,
            nombre,
            precio,
            descripcion
        })
    });
}


export const servicios = {
    crearProducto,
    getProductos,
    deleteProducto,
    getProductoId,
    editarProducto
}