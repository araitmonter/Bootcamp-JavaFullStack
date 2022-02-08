//ciclos, bucles o loops

/*
while 

let condición = 1;    --> valor inicial, en el que queremos que comience nuestro ciclo
while(condición) {
    bloque de código
    modificación al valor inicial --> muy importante, sin ella el bucle sería infinito, error de cilcado
}

Mientras la condición sea verdadera, el ciclo seguirá ejecutándose

*/

//while: primero revisa la condición, si la condición se cumple, ejecuta

let condicion = 11;

while(condicion <= 10) { 
    console.log(condicion);
    //condicion = condicion + 1;
    condicion++;
}

//variable++  --> incrementar una unidad al valor de la variable --> variable + 1
//variable--  --> disminuir una unidad al valor de la variable --> variable - 1

//do while

let numero = 11;

do {
    console.log(numero);
    numero++;
} while (numero <= 10);

//for

for(let control = 1;control <= 10; control++){
    console.log("hola " + control);
}

const comidas = ["Pozole", "Tacos", "Tamales", "Tortas"];

for(let i = 0; i <= comidas.length; i++){
    console.log(comidas);
}

for(let i = 0; i <= comidas.length; i++){
    console.log(comidas[i]);
}