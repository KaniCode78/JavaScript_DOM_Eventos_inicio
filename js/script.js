// querySelector 

const heading = document.querySelector('.header__texto h2'); // 0 o 1 elemento

heading.textContent = 'Nuevo Heading';

console.log(heading);


// //querySelectorAll

// const enlaces = document.querySelectorAll('.navegacion a');
// enlaces[0].textContent = 'Nuevo texto para enlace'
// enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');


// enlaces[0].href = 'http://google.com/search'


// const nuevoEnlace = document.createElement()

// const heading2 = document.getElementById('heading')
// console.log(heading2);


// const nuevoEnlace = document.createElement('A');

// // Agregar el href
// nuevoEnlace.href = 'nuevo-enlace.html';


// // agregar el texto
// nuevoEnlace.textContent = 'Un nuevo enlace'

// // agregar la clase

// nuevoEnlace.classList.add('navegacion__enlace');

/* <a href="nosotros.html" class="nuevo-enlace">Nosotros</a> */

// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace);


// // eventos

// console.log(1);

// window.addEventListener('load', function () { // load espera a que el js y los archivos que dependen del html esten listos
//     console.log(2);
// });


// window.onload = function(){
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { //solo espera por el html, pero no espera CSS o imagenes
//     console.log(4);

// });

// console.log(5);

// function imprimir() {
//     console.log(2);
// }


// window.onscroll = function(){
//     console.log('scrolling...');
// }

// seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click',function(evento){
//     console.log(evento.target);
//     evento.preventDefault();
//     //validar un formulario
//     console.log('enviando formulario');
// })






//eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}



const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// el evento submit

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');

        return; //corta la ejecucion del codigo
    }

    //crear aleta de enviar correctamente
    mostrarMensaje('Mensaje enviado correctamente');

    console.log('Enviando Formulario');
});


function leerTexto(e) {

    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

// muestra una alerta de que todo bien
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');

    formulario.appendChild(alerta);

    //desaparres
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

// muestra un error en pantalla

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    // desaparezca despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}

