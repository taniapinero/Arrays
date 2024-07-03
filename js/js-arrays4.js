/*Para insertar al final del array un elemento
push -> nombreArray.push(elementoNuevo) */

// let equipos = ["R. Madrid", "Girona", "Barcelona", "Atlético", "Villarreal", "Athletic", "Real Sociedad", "Betis", "Sevilla", "Celta"];

// equipos.push("Tomelloso");
// console.log(equipos);

//Para insertarlo al principio
// equipos.unshift("Alcázar de San Juan");

/*
Coger del 0 al 100 10 números aleatorios que sean múltiplos de 5. 
El primer elemento no puede ser menor que 50 y el último mayor que 50* */

let lista=new Array(10);

for (let i = 0; i < lista.length ; i++) {
    let multiplo=parseInt(Math.random()*21)*5;

    lista[i]=multiplo;
}
console.log(lista);


while (lista[0]<50) {
    let nuevoMultiplo=parseInt(Math.random()*21)*5;

    //Una opción indicando directamente la posición:
    //lista[0] = nuevo Multiplo;

    lista.shift();
    lista.unshift(nuevoMultiplo);
}
console.log(lista);

while (lista[9]>50) {
    let nuevoMultiplo=parseInt(Math.random()*21)*5;

    lista.pop();
    lista.push(nuevoMultiplo);
}

console.log(lista);











