//varaiables
let numeroSecreto = 6;
let numeroUser = prompt("Me indicas un numero entre el 1 y e 10: ");

//alert ('Hola mundo');
//Cuerpo de programación
console.log(numeroUser);
if(numeroUser == numeroSecreto){
    alert(`Acertaste, el número es: $(numeroUser)`);
} else{
    alert("No acertaste del juego")
}