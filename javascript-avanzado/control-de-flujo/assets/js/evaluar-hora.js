/*
  Buenos dias 6 - 11
  Buenas tardes 12 - 18
  Buenas noches 19 - 23
  Dejame dormir 0 - 5
*/

let hora = parseInt(prompt('Introduce la hora en número usando del 0 al 23 // ej: 12')); 

/* El formato de hora es de 0 a 23 */
/* Simplifiqué líneas de código para que solamente quedaran 5 en lugar de 10 */

if (hora >= 0 && hora <= 5  ) document.write('¡Déjame dormir!');
    else if(hora >= 6 && hora <= 11) document.write('¡Buenos días!');
    else if(hora >= 12 && hora <= 18) document.write('¡Buenas tardes!');
    else if(hora >= 19 && hora <= 23) document.write('¡Buenas noches!');
    else document.write('ERROR, introduce nuevamente una hora del 0 al 23');

    

/* if(hora >= 0 && hora <= 5  ) {
  document.write('¡Déjame dormir!');
} else if(hora >= 6 && hora <= 11) {
  document.write('¡Buenos días!');
} else if(hora >= 12 && hora <= 18) {
  document.write('¡Buenas tardes!');
} else if(hora >= 19 && hora <= 23) {
  document.write('¡Buenas noches!');
} else {
  document.write('ERROR, introduce nuevamente una hora');
} */