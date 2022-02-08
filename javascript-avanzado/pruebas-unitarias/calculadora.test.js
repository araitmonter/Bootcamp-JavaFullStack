const { sumar, restar, multiplicar, dividir } = require('./calculadora');
/* 
describe('Pruebas eb el componente calculadora', () => {
PUEDE TENER DOS DESCRIBE PERO NO ES RECOMENDABLE YA QUE EL DESCRUBE HACE REFERENCIA AL ARCHIVO CALCULADORA.JS  Y LOS TEST SERIA LAS FUNCIONES QUE UIQERO COMPROBAR
}); */


describe('Pruebas  del componente calculadora', () => {
    test('Pruebas en la funcion restar', () => {
        expect(restar(6, 5)).toBe(1);
    })
    test('Pruebas en la funcion dividir', () => { /// esta es la otra forma de realiza r un test donde se ponde describe y despues todos los test que queremos realizar para comprobar nuestara funcion
        expect(dividir(4, 2)).toBe(2);
    })
    test('Pruebas en la funcion multiplicar', () => {
        expect(multiplicar(3, 2)).toBe(6);
    })
    test('Pruebas en la funcion sumar', () => {
        expect(sumar(3, 5)).toBe(8);
    })
});
