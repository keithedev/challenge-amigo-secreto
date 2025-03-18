// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Obtiene el valor alojado en el Input y lo almacena en el arreglo amigos
function agregarAmigo() {
    let nombre = document.getElementById('amigo');

    if (nombre.value) {
        amigos.push(nombre.value);
    } else {
        alert('Por favor, inserte un nombre.')
    }

    nombre.value = '';

    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;        
    }
}

// Se obtiene un indice aleatorio con la ayuda de las funciones floor y random, 
// limitando los valores al maximo del largo del arreglo.
function sortearAmigo() {
    if (amigos.length != 0) {
        let indice = Math.floor(Math.random() * amigos.length);
        
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = `${amigos[indice]}`;
    }
}