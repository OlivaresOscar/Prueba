// Prueba 

// Ejercicio #2.

function permutacionesCadena(cadena, tamaño){
    caracteres = String(cadena);
    permutaciones = [];

    for(const propiedad in caracteres){
        console.log(`${propiedad}: ${caracteres[propiedad]}`);

    }
}
let texto, tamaño
console.log(permutacionesCadena(texto, tamaño))
console.log(permutacionesCadena("texto", 2));