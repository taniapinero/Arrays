//Variables -> nombre, utiliza un espacio de memoria para guardar un valor

let alumno1="Juan Perez";
let alumno2="Marina Torres";
//...... para estructura de datos -> se guardan en memoria como las variables
// se utilizan ARRAYS


//Cómo declarar un nuevo Array
let alumnos=["Juan Rodriguez", "Marina Torres", "Dani Lopez", "Tania Pinero", "Sergio Castro"]; //Juan estaría en la posición 0. Recordar que empieza siempre por 0

//Para añadir un nuevo alumno en posición 5
alumnos[5]="Arantxa Gonzalez";

console.log(alumnos[3]);
console.log(alumnos);

//Para reemplazar un valor en una posición específica, con invocarlo se puede cambiar
alumnos[5]="Arantxa González García";
console.log(alumnos);


/*
ACTIVIDAD RESUELTA 3.1 
Crear un array que almacene el nombre de 6 localidades y mostrar las que ocupen posiciones impares*/
let localidades=["Alcázar", "Argamasilla de Alba", "Tomelloso", "Mota", "Cinco Casas", "Quintanar"];
let indice=0;

//Para conocer en JS la longitud (Número de elementos) de un Array utilizamos el nombre del Array.lenght.

while (indice<localidades.length) {
    if (indice%2!=0) { //Si índice dividido entre 2, el resto es diferente a 0, el índice es impar
        console.log(localidades[indice]);
    }
    indice++;
}

/*
Recorrer todo el Array de localidades
 */
for (let index = 0; index < localidades.length; index++) {
     console.log(`Localidad ${index+1} ->  ${localidades[index]}`);
}

//Crear un Array Bidimensional con valores random del 1 al 10 (notas)
//Crear 5 filas y 4 columnas
let arrayFC=new Array(5); //Crea 5 filas. El 5 indica la longitud del Array que estamos definiendo

for (let i = 0; i < 5; i++) { //Recorremos la fila
    arrayFC[i]=new Array(4); // en este punto se crean las columnas a la fila i

    for (let y = 0; y < 4; y++) { // Se recorren las columnas de cada fila
        arrayFC[i][y]=parseInt(Math.random()*10); //Crea un valor aleatorio y asignarlo a la fila y columna [fila][columna]
    }
}
console.log(arrayFC);


/**
 * Crear un cuadro (div) y un desplegable, este desplegable indica los colores, y según seleccione... va al array y cambia el color
 */

let coloresRGB=["#f39c12", "#c0f312", "#12f3e5", "#f312af", "#f31212"];
let nombreRBG=["Naranja", "Lima", "Turquesa", "Rosa", "Rojo"];
let colores=document.querySelector("#colores"); //Esto lo trata como un array porque si

for (let i = 0; i < nombreRBG.length; i++) {
    let opcion=document.createElement("option"); //Creamos el option del select que tenemos en el html
    //Le indico con textContent qué muestra en el select por cada option
    opcion.textContent=nombreRBG[i];
    opcion.setAttribute("value", i); //Esto es para agragarle atributos (al option)
    

    colores.appendChild(opcion);
}

let contenedor=document.querySelector(".container");
//Escuchamos el evento de cambio dentro del select para que cambie el color de fondo
colores.addEventListener("change", function(){
    contenedor.style.backgroundColor="";
    contenedor.style.borderRadius="";


   

    //Si se selecciona el option de value=""... dale color y forma

        if (colores.value=="") {
            contenedor.style.backgroundColor="rgb(81, 81, 81)";
            contenedor.style.borderRadius="100px";
            
        }else{
            contenedor.style.backgroundColor=coloresRGB[colores.value];
            contenedor.style.borderRadius="35px";
        }
});






//Puedes crear un Array sin pasarle datos
// let profesores=new Array(); // Aquí estamos declarando la estructura del Array sin valores

