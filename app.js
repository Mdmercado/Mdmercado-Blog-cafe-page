// Formas de seleccionar contenido
// querySelector

const tittleHead = document.querySelector(".header__texto h2"); // retorna 0 o 1 elementos
tittleHead.textContent = "Un blog para leer acompañado de un café";
console.log(tittleHead);

// querySelectorAll

const enlaces = document.querySelectorAll(".navegacion a"); // retorna todos los elementos con dicho selector
// console.log(enlaces);
//console.log(enlaces[1]); Para seleccionar solo un elemento de todos se indica el index como si fuera un arreglo
enlaces[1].textContent = "Listado"; //Ej de cambiarle el texto como si fuera arrelgo

//EVENTOS
// console.log(1);

// window.addEventListener('load', function(){ // load espera a que js y los archivos esten listos css img
//     console.log(2);
// });

// console.log(3);

// document.addEventListener('DOMContentLoaded', function(){ // Este actua antes que load porque solo espera que se descargue el html no el css img etc
//     console.log(4);
// });

// EVENTOS onclick
// selecciono elementos y asocio eventos

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('enviando formulario...');
// });

// EVENTOS de inputs y TextArea

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};
const nombreInput = document.querySelector("#nombre");
const nombreEmail = document.querySelector("#email");
const nombreMensaje = document.querySelector("#mensaje");
const form = document.querySelector(".formulario");

nombreInput.addEventListener("change", leerTexto);
nombreEmail.addEventListener("change", leerTexto);
nombreMensaje.addEventListener("change", leerTexto);

// El evento Submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // VALIDAR  formulario

  const { nombre, email, mensaje } = datos;
  if ((nombre === "") | (email === "") | (mensaje === "")) {
    MostrarAlerta("Todos los campos son obligatorios", true);
    return;
  }

  MostrarAlerta("Los datos fueron enviados correctamente");
  console.log("Enviando Formulario");
});

// FUNCIONES
function leerTexto(e) {
  // console.log(e.target.value);
  datos[e.target.id] = e.target.value; // Empleo esta solucion porque mis objetos tienen el mismo nombre que mis id en html
  // console.log(datos);
}

function MostrarAlerta(mensaje, error = null) {
  // le paso 2 parametros
  const alerta = document.createElement("p");
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }

  form.appendChild(alerta);

  //Alerta desaparece luego de x segs
  setTimeout(() => {
    alerta.remove();
  }, 5000);
}
