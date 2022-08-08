import { validar, validarUsuario } from "./validacion-formularios.js";

const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");
const btnLogin = document.querySelector("[data-btn='login']");

inputs.forEach(input=>{
    input.addEventListener("blur",(input)=>{
        validar(input.target);
    });
});

textarea.addEventListener("blur",(input)=>{
    validar(input.target);
});

btnLogin.addEventListener("click",(event)=>{
    event.preventDefault();
    const error = document.querySelector("[data-error]");
    const email = document.querySelector("#email");
    validar(email);
    const password = document.querySelector("#password");
    validar(password);
    const login = validarUsuario(email.value, password.value);
    if(login){
        error.classList.add("error__login_display");
        window.location.assign("../../admin.html")
    }else{
        error.classList.remove("error__login_display");
    }
})

