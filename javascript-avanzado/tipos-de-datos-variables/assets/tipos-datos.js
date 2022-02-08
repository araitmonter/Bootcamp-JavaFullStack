let nombre = 'Arait Monter';
let edad = 21;
let tienesTrabajo = true;
let variableNull = null;
let variableUndefined;

/* -------- TIPOS DE DATOS -------- */
9
// tyoeof --> para conocer el tipo de dato de una variable

console.log(typeof(nombre)); // String o cadenas
console.log(typeof(edad)); // Number o números
console.log(typeof(tienesTrabajo)); // Boolean o booleano
console.log(typeof(variableNull));
console.log(variableUndefined);

console.log(variableNull == variableUndefined); //true
console.log(variableNull === variableUndefined) // false;  
console.log(0 == false); // true

console.log(10 + 10); // number
console.log(typeof('10' + 10)); // string

console.log(parseInt('abc')); // NaN
console.log(parseInt('123abc')); // 123
console.log(parseInt('12')); // 12, convierte de string a número

let numero = 10;
console.log(numero.toString()); // convertir de número a string