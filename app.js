//varaiables
let numeroMaximoPosible=10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUser = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 5;

console.log(numeroSecreto)
while(numeroUser != numeroSecreto){
    let numeroUser = prompt(`Me indicas un numero entre el 1 y el ${numeroMaximoPosible}: `);

    //alert ('Hola mundo');
    //Cuerpo de programación
    console.log(numeroUser);
    if(numeroUser == numeroSecreto){
        alert(`Acertaste, el número es: ${numeroUser}, lo hiciste en ${intentos} ${intentos ==1 ? 'vez' : 'veces'}`);
    } else{
        if(numeroUser > numeroSecreto){
            alert("El número secreto es menor");
        }else{
            alert("El número secreto es mayor");
        }
        intentos ++;
       // palabraVeces = 'veces';
        if(intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos `);
            break;
        }
    /* alert("No acertaste del juego")*/
    }
}
