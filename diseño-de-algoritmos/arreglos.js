//Arrays (Arreglos): Colección de elementos. Tienen métodos o funciones que nos permiten ordenar o manipular los datos almacendos.


//manera 1
const arreglo1 = [4, "hola", true, [1, 2, 3]]; //se pueden poner arreglos dentro de arreglos
console.log(arreglo1);


//manera 2
const arreglo2 = Array.of(1, "Hola", true);
console.log(arreglo2);

//manera 3 (no se usa tanto)
const arreglo3 = new Array(3, true, "adiós");
console.log(arreglo3);

const frutas = ["manzanas", "naranjas", "uvas", "sandías", [1, 2, 3, 4, 5, ["A", "B", "C"]]];
//notación de corchetes
console.log(frutas[0]);
console.log(frutas[3]);
console.log(frutas[3]);
console.log(frutas[3][1]);//sandías,a
console.log(frutas[4][1]);//2
console.log(frutas[4][5][1]);//B

// Metodos:

// length = longitud del arreglo
const letras = ["A", "B", "C", "D"];
console.log(letras.length); //4

// push = añade un elemento al final de nuestro array
letras.push("E");
console.log(letras); //["A", "B", "C", "D", "E"]

// pop = elimina el ultimo elemento
letras.pop();
console.log(letras); //["A", "B", "C", "D"]

// unshift = agrega un elemento al inicio
letras.unshift(1);
console.log(letras); //[1, 'A', 'B', 'C', 'D']

// shift = elimina el primer elemento
letras.shift();
console.log(letras); //["A", "B", "C", "D"]
