//variable let es una variable de contexto, solo vive en un bloque de codigo.
// variable var es global y puede ser llamada desde cualquier parte del codigo

var numero = 40;
console.log(numero);//40

if(true) {
    var numero = 50;
    console.log(numero);//50
}

console.log(numero); //50

var texto = "Bootcamp Java";
console.log(texto);//Bootcamp Java

if(true) {
    let texto = "Cohorte 8";
    console.log(texto);//Cohorte 8 (como es "let", es local y solo funciona dentro del bloque de codigo)
}

console.log(texto);//Bootcamp Java