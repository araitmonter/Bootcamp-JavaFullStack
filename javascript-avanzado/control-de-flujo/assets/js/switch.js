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

  let dia = 5; // imprime "Jueves"

  switch (dia) {
    case 0:
      console.log("Domingo");
      break;
    case 1:
      console.log("Lunes");
      break;
    case 3:
      console.log("Martes");
      break;
    case 4:
      console.log("Miércoles");
      break;
    case 5:
      console.log("Jueves");
      break;
    case 6:
      console.log("Viernes");
      break;
    default:
      console.log("No es un día válido");
      break;
  }


/* <-------------------------------------------------------> */
// Ejemplo de cupones de descuento con switch

let cuponDescuento = "Oro"; // Imprime descuento de "15"
let descuento;

switch(cuponDescuento) {
  case "Bronce":
    descuento = 5;
    break;
  case "Plata":
    descuento = 10;
    break;
  case "Oro":
    descuento = 15;
    break;
  default: 
    console.log("Cupón erróneo");
    break;
}

console.log(descuento);