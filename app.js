let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto)
function asignarTextoElemento(elemento, texto){
    let elemetoHTML = document.querySelector(elemento);
    elemetoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsurario = parseInt(document.getElementById('valorUsuario').value);
   console.log(intentos)
   
    if(numeroDeUsurario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero Secreto! en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    }else{
       if(numeroDeUsurario>numeroSecreto){
        asignarTextoElemento('p','El numero secreto es mayor')
       }else{
        asignarTextoElemento('p','El numero secreto es menor')
       }

       intentos++;
    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
    
}

asignarTextoElemento('h1','Juego de Número Secreto');
asignarTextoElemento('p','Escoge un numero entre el 1 y el 10')