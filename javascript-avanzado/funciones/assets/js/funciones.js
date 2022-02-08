/* Función
    Es un bloque de código reutilizable.
    Puede tener o no parámetros de entrada.
    Puede devolver o no un valor.
*/


function sumar(numero1, numero2) {
    // Operaciones o código a ejecutar
    return numero1 + numero2;
    console.log('Hola desde la función');
  }
  
  /* function restar(numero1, numero2) {
    document.write(`La resta de ${Numero1} y ${numero2} es ${numero1 - numero2} <br>`);
  } */
  
  let numero1 = parseInt(prompt('Número 1'));
  let numero2 = parseInt(prompt('Número 2'));
  
  let suma = sumar(numero1, numero2);
  // template string
  // ` backstick o comilla invertida: para combinar texto con código de JS
  
  document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);
  document.write('La suma de  ' + numero1 + ' y ' + numero2 + ' es ' + suma);