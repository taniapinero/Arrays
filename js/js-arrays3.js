/*
ACTIVIDAD PROPUESTA 3.4 Página 88

Crear una estructura de datos que almacene la tabla de clasificación de una liga local de fútbol con estos datos:
- La liga la disputan 10 equipos
- Para cada equipo necesitas estos datos
    · Nombre
    · Puntos
    · Partidos jugados, ganados, empatados y perdidos
    · Goles a favor y goles en contra
    
Crea la estructura de datos que consideres más últil, rellénala con datos coherentes y muestra en pantalla toda la información de la clasificación del equipo ganador. */

// let equipos=["R. Madrid", "Girona","Barcelona","Atlético","Villarreal","Athletic","Real Sociedad","Betis","Sevilla","Celta"];

// let datosEquipo=[
//     [87,26,598,368,67,4],
//     [85,46,484,406,75,1],
//     [79,44,595,412,85,2],
//     [70,43,481,438,82,5],
//     [65,65,469,488,102,8],
//     [61,37,463,511,75,5],
//     [51,39,461,604,98,2],
//     [48,45,492,429,85,3],
//     [48,54,490,477,108,4],
//     [46,57,472,462,62,5]
// ];

// let equipoGanador=0;

// for (let i = 0; i < datosEquipo.length; i++) {
//     if (datosEquipo[i]>datosEquipo[equipoGanador][0]) { // Se comparan los datos de la columna 0 que es la de los puntos de cada uno de los equipos y se almacena los puntos más altos en la variable equipoGanador

//         equipoGanador=i;
//     }
// }

// //Una vez definido todo, lo muestro en una tabla en el front
// let tabla=document.querySelector("table");

// for (let index = 0; index < equipos.length; index++) {
//     let fila=document.createElement("tr");
//     fila.setAttribute("id", String("fila" + index) )
//     tabla.appendChild(fila);

//     for (let c = 0; c < datosEquipo[index].length+1; c++) {
//         let columna=document.createElement("td");
//         columna.setAttribute("id", String("columna" + c) )
//         fila.appendChild(columna);

//     //     if (c!=0){
//     //     document.getElementById(`columna ${columna[index]}${[c]}`).innerHTML=equipoGanador[index][c];
//     // }
//     }
// }







// public static int maximo(int t[]){
//     int max=t[0]; // Asumimos que al menos hay 1 elemento
//     for (int elemento:t){ // Recorremos el array pasado por parámetros
//         if (elemento>max){ // Validamos cada elemento y comparamos con el máximo acumulado
//             max=elemento;
//         }
//     }
//     return max;
// }











// Datos de los equipos y sus estadísticas
let equipos = ["R. Madrid", "Girona", "Barcelona", "Atlético", "Villarreal", "Athletic", "Real Sociedad", "Betis", "Sevilla", "Celta"];
let datosEquipo = [
    [87, 598, 368, 67, 4, 0],
    [85, 484, 406, 75, 1, 0],
    [79, 595, 412, 85, 2, 0],
    [70, 481, 438, 82, 5, 0],
    [65, 469, 488, 102, 8, 1],
    [61, 463, 511, 75, 5, 0],
    [51, 461, 604, 98, 2, 0],
    [48, 492, 429, 85, 3, 0],
    [48, 490, 477, 108, 4, 0],
    [46, 472, 462, 62, 5, 0]
];

// Encontrar el equipo ganador (el que tiene más puntos)
let equipoGanador = 0;

for (let i = 1; i < datosEquipo.length; i++) {
    if (datosEquipo[i][0] > datosEquipo[equipoGanador][0]) { // Comparar los puntos de cada equipo
        equipoGanador = i;
    }
}

// Mostrar todos los equipos y sus datos en una tabla en el front
let tabla = document.querySelector("table");

// Crear filas para cada equipo
for (let index = 0; index < equipos.length; index++) {
    let fila = document.createElement("tr");
    
    if (index === equipoGanador) {
        fila.style.fontWeight = "bold"; // Resaltar el equipo ganador
    }
    tabla.appendChild(fila);

    // Agregar nombre del equipo
    let columnaNombre = document.createElement("td");
    columnaNombre.textContent = equipos[index];
    fila.appendChild(columnaNombre);

    // Agregar estadísticas del equipo
    for (let c = 0; c < datosEquipo[index].length; c++) {
        let columna = document.createElement("td");
        columna.textContent = datosEquipo[index][c];
        fila.appendChild(columna);
    }
}

// Mostrar la información del equipo ganador en el elemento con id "equipoGanador"
let equipoGanadorElemento = document.getElementById("equipoGanador");
equipoGanadorElemento.textContent = equipos[equipoGanador];
