//Ejercicio Manipular arreglo
public class ManipularArreglo {

	public static void main(String[] args) {
		/*
		 * Crea una clase llamara ManipularArreglo
		 * crea un array con los siguientes números enteros:
		 * 1, 6, 45, 53, 80, 102, 145, 326, 450, 892
		 * Crea un programa que use un ciclo que tome los números de arreglo 
		 * y devuelva la suma total, la suma de los números pares 
		 * y la suma de los números impares.
		 * */
		int array[];
		array = new int[] {1, 6, 45, 53, 80, 102, 145, 326, 450, 892};
		
		int suma = 0;
		int sumapar = 0;
		int sumaimpar = 0;
		
		for(int i = 0; i < array.length; i++) {
			suma = suma + array[i];
		}
		System.out.println("Valores en la suma es: " + suma);
		
		for(int i = 0; i <array.length; i++) {
			if(array[i] % 2 == 0) {
				sumapar = sumapar + array[i];
			}else {
				sumaimpar +=array[i];
			}
		}
		System.out.println("La suma de pares es: " + sumapar);
		System.out.println("La suma de impares es: " + sumaimpar);
	}

}