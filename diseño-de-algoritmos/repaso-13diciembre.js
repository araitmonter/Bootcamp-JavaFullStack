//Arrays

const comidas = ["Pozole", "Quesadillas", "Tacos"];

//Metodo: length

console.log(comidas.length);

/* Otros metodos:
push - agrega al final 
pop - quita un elemento del final 
unshift - agrega al inicio
shift - quita elemento del inicio
*/

comidas.push("Torta");
console.log(comidas);

comidas.unshift("Pancita");
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.shift();
console.log(comidas);

//forEach - sirve para realizar una acción por cada elemento de nuestro arreglo

console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);

comidas.forEach(function(el){ //"el" es corto para "elementos"
    console.log(el)

})

const numeros = [1, 4, 7, 8];
numeros.forEach(function (el){
    let suma = el + 1;
    console.log(suma);
})

//ejercicio

const arr = [];

function suma(num){
    let sumNum = num + 1;
    return arr.push(sumNum);
}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);


console.log(arr);