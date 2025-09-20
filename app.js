// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


// Arreglo para almacenar los nombres, variable global.
let amigos = [];


// Función para agregrar los amigos al arreglo global y deficiones para el ingreso de los nombres.
function agregarAmigo() {

    let amigo = document.getElementById('amigo').value;
    let lista = document.getElementById('listaAmigos');

    // Expresión regular: solo letras, sin espacios ni caracteres especiales
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+( [A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/;
    const nombre = amigo.trim();
    const existe = amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());

    // Validar: campo no vacío, sin espacios, sin caracteres especiales y no case sensitive.  
    if (!amigo.trim()) {
     alert("Por favor, inserte un nombre.");
     return;
    }
    if (!regex.test(nombre)) {
     alert("Ingrese nombres sin caracteres especiales, ni numeros");
     return;
    }
    if (existe) {
      alert (`El nombre "${nombre}" ya fue ingresado.`);
     return;
    } 
    
    // Límite de participantes    
    if (amigos.length >= 20) {
     alert("Haz alcanzado el limite de participantes.");
     return; 
    }
    
    // Agrega el nombre del amigo
    amigos.push(nombre); 
    
    // Crear y agregar el nuevo nombre a la lista visual
    const nuevoItem= document.createElement('li');
    nuevoItem.textContent= nombre;
    lista.appendChild(nuevoItem); 
    
    // Limpiar el nombre anterior
    limpiarCaja();

}      


function sortearAmigo() {
    if (amigos.length < 3) {
       alert("Ingresa al menos 3 amigos para realizar el sorteo"); 
       return;
    }
    let indicador= Math.floor (Math.random() * amigos.length);    
    let elegido=amigos[indicador];
    document.getElementById('resultado').innerHTML = `<li>El amigo secreto es: <strong>${elegido}</strong></li>`;
        
}


function limpiarCaja() {
    document.querySelector(`#amigo`).value='';
  }
  