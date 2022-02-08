/*
 * Ejercicio Variables en Java 26-01-2022
 * 
 * */
public class VariablesTiposDeDatos {
	public static void main(String[] args) {
		//   Javascript
		//		let numero = 1;
		//		let nombre = "Hola Mundo";
		
		// Permite String guardar cadenas de caracteres
		String nombre = "Arait Monter";
		
		// Caracter almacenado en char solo se puede almacenar uno 
		char inicial = 'A';
		// boolean almancena un valor logico, true o false
		boolean TieneCrush = true;
		
		//tipo byte para numeros peque�os -128 a 127
		byte edad = 21;
		short suma = 23 + 10;
		
		//short
		short corto  = 4;
		//int
		int numero  = 3444;
		//long
		long OtroNumero = 1_000_000;
		System.out.println(OtroNumero);
		
		//float
		float PI = 3.141598f;
		//double
		double numeroEuler = 2.711828; 
		
		System.out.println("El nombre es: " + nombre + ", el numero es: " + numero + " y el numero corto es: " + corto);
		
	}
}