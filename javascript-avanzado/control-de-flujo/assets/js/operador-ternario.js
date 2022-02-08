/* Operador ternario */
/* Se llama así porque tiene 3 partes:
      1. Condición a evaluar
      2. Código que se ejecuta si es verdadero
      3. Código que se ejecuta si es falso
*/

/*
  (condición a evaluar)  ?  se ejecuta si es verdadero : se ejecuta si es falso;
*/

let edad1 = 19;


// si la condición es verdadera se ejecuta "console.log("Mayor de edad")"
// si la condición es falsa se ejecuta "console.log("Menor de edad")"

let pregunta = (edad1 >= 18)
    ? console.log("Mayor de edad")
    : console.log("Menor de edad");

    console.log(pregunta);

    let preguntaEdad = `Tengo ${edad1} años y soy 
    ${edad1 >= 18 ? "Mayor" : "Menor"} de edad`;

    console.log(preguntaEdad);



/*
Domingo - 0
Lunes - 1
Martes - 2
Miércoles - 3
Jueves - 4
Viernes - 5
Sábado - 6
*/

/* <<< ----------- Usando if else-------------------- >>> */

/* let dia = 5;
if(dia === 0) {
  console.log("Domingo");
} else if(dia === 1) {
  console.log("Lunes");
} else if(dia === 2) {
  console.log("Martes");
} else if(dia === 3) {
  console.log("Miércoles");
} else if(dia === 4) {
  console.log("Jueves");
} else if(dia === 5) {
  console.log("Viernes");
} else if(dia === 6) {
  console.log("Sábado");
} else {
  console.log("Ese no es un día");
} */


/* <<< ----------- Pero se puede usar switch -------------------- >>> */
/*
  < ------ Switch - case ------ >
  switch(variable a evaluar) {
    case valor: 
    - código a ejecutar -
    break;
    case valor:
    - código a ejecutar -
    default:
    - código a ejecutar si sale de las opciones -
    break;
  }
 */

let dia = 5;

  switch (dia) {
    case 0:
      console.log("Domingo");
    break;
    
    default:
      break;
  }