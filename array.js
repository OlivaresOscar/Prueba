// Prueba 

// Ejercicio #1.

let numeros = [];

for(let i=0; i<=8; i++){
    numeros = prompt("Ingrese 1 - 0");
    if(numeros == 0){
        console.log("Estado: Inactivo");
        console.log("El total de dias es 8");
    }
    else if(numeros == 1){
            console.log("Estado: Activo");
            console.log("El total de dias es 8");
    }
    else{
        console.log("Número incorrecto, únicamente 1 ó 0");
        break;
    }

    console.log(numeros);

}