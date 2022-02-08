/*  Arrow function
    Función de flecha
      Es un bloque de código reutilizable.
      Puede tener o no parámetros de entrada.
      Puede devolver o no un valor.
      ** Antes de usar las funciones de flecha DEBEN DE ESTAR DECLARADAS
      ** Se declara con "constante" porque se deduce que la estructura de la función ya no va a cambiar.
*/


/* ---- Ambas escrituras de funciones realizan lo mismo ------- */

/* <<< ---- ES5 ---- >>> */

/* function sumar(numero1, numero2) {
    // Operaciones o código a ejecutar
    return numero1 + numero2; 
} */



/* <<< ---- ES6 ---- >>> */
/* ---- Función de flecha ---------- */

const sumar = (numero1, numero2) => {
    return numero1 + numero2;
  }
  
  let numero1 = parseInt(prompt('Número 1'));
  let numero2 = parseInt(prompt('Número 2'));
  let suma = sumar(numero1, numero2);
  
  document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);