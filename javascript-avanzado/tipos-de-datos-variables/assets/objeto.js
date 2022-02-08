
let nombre = 'Arait';
let edad = 21;
let direccion = 'Narnia';
let numero = 12345678;

console.log(nombre);



// OBJETO: colección de información

let persona = {
  /* nombre --> objeto --> usa { clave : valor} */
  nombre: {
      apellidoPaterno: 'Monter',
      apellidoMaterno: 'Corona',
      nombre: 'Araiit'
    },
  edad: 21,
    /* direccion --> objeto --> usa { clave : valor} */
  direccion: {
      ciudad: 'CDMX',
    },
    /* numero --> arreglo --> usa [ valor1 , valor2 ] */
  numero: [
    12345678,
    22233584
  ]
};

console.log(persona.nombre);

console.log(persona.nombre.apellidoPaterno); 