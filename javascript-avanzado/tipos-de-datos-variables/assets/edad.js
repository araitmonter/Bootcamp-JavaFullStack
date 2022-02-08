let anioActual = 2022;
let edad = document.getElementById('edad');

function calcularEdad() {
  año = prompt('¿En qué año naciste?');
  let edadUsuario = anioActual - año;
  edad.textContent = 'Tienes ' + edadUsuario + ' años.';
}