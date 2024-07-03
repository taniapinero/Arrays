/**
 * Actividad Prupuesta 3.3
 * 
 * Crear un array con 100 valores aleatorios y mostrar solo los pares
 * Utilizar el recorrido con for-in
 */

let array=new Array(100);

//Para crear el array utilizamos el for
for (let i = 0; i < array.length; i++) {
    array[i]=parseInt(Math.random()*1000+1);
}
//Para mostrar el array y valorar si es par, utilizamos el for-in
for (let indice in array){ //Esto recorre el array con otro bucle (for in)
    if (array[indice]%2==0) {
        console.log(`Número par en el índice ${indice} con valor ${array[indice]}`);
    }
}
//
let arrayMascotas=["Perro", "Gato", "Tortuga"];
//recorrer el array mascotas con el for of
for(let mascota of arrayMascotas){
    console.log(mascota);
}
//for-in coge el índice y for-of coge el elemento



/**
 * 
 * 
 */

let matriz=[[5,58,9],[7,8,2],[5,7,9],[8,4,3]];
console.log(matriz.length);
console.log(matriz); // Esto para comprobar lo siguiente que se ve mejor
// Recorrer el Array bidimensional de otra forma
for (let f = 0; f < matriz.length; f++) { //Lo va a recorrer 4 veces

    for (let c = 0; c < matriz[f].length; c++) {
        console.log(`Valor de la fila ${f} y columna ${c} es ${matriz[f][c]}`);   
    } 
}

/*
ACTIVIDAD RESUELTA 3.2 (Página 87)
Crea una matriz de 3x3, rellénala con números enteros y muestra en pantalla aquellos elementos que forman parte de la diagonal principal* */

let arrayD=new Array(3);

for (let f = 0; f < arrayD.length; f++) {
    arrayD[f]=new Array(3);

    for (let c = 0; c < arrayD[f].length; c++) {
        arrayD[f][c]=Math.floor(Math.random()*100+1);
        if (f==c) {
            document.getElementById("diagonal" + [f]).innerHTML=arrayD[f][c];
        }
    }
}

console.log(arrayD);

