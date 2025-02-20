let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
    let elemetoHTML = document.querySelector(elemento);
    elemetoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsurario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsurario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsurario);
    console.log(numeroDeUsurario === numeroSecreto);
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
    
}

asignarTextoElemento('h1','Juego de Número Secreto');
asignarTextoElemento('p','Escoge un numero entre el 1 y el 10')