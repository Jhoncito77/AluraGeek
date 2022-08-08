export function validar(input) {
    input.setCustomValidity("");
    const tipoInput = input.dataset.tipo;
    if (validadores[tipoInput]) {
        validadores[tipoInput](input);
    }


    if (input.validity.valid) {
        input.parentElement.classList.remove("content__error");
        input.parentElement.querySelector(".mensaje__error").innerHTML = "";
    } else {
        input.parentElement.classList.add("content__error");
        input.parentElement.querySelector(".mensaje__error").innerHTML = mostrarMensajeDeError(tipoInput, input);
    }
}

const validadores = {
    nombre: (input) => validarNombre(input),
    mensaje: (input) => validarMensaje(input),

}

const mensajesError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "El nombre no puede estar vacio",
    },
    mensaje: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "El mensaje no puede estar vacio",
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "Ingrese una dirección de correo electronico valido",
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La contraseña debe contener al menos 8 caracteres, una letra mayuscula, una minuscula y un numero."
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

function mostrarMensajeDeError(tipoInput, input) {
    let mensaje = "";

    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesError[tipoInput][error];

        }

    });
    return mensaje;
}

function validarNombre(input) {
    const nombre = input.value;
    let mensaje = ""
    if (nombre.replace(/ /g, "") == "") {
        mensaje = "El nombre no puede estar vacio";

    }
    input.setCustomValidity(mensaje);
}

function validarMensaje(input) {
    const nombre = input.value;
    let mensaje = ""
    if (nombre.replace(/ /g, "") == "") {
        mensaje = "El mensaje no puede estar vacio";

    }
    input.setCustomValidity(mensaje);
}



const usuariosAutorizados = {
    admin: {
        email: "admin@gmail.com",
        password: "Aa1qwert",
    },
    dev: {
        email: "dev@gmail.com",
        password: "Wgs82n83q1",
    },
}
    
const usuarios = [
    "admin",
    "dev",
]    

export function validarUsuario(email, password) {
    let ingreso = false;
    usuarios.forEach(usuario => {
        
        if (usuariosAutorizados[usuario]["email"] == email && usuariosAutorizados[usuario]["password"] == password) {
            return ingreso = true;

        }
    })
    
    return ingreso;
}