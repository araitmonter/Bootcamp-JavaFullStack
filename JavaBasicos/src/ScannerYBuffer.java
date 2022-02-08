import java.util.Scanner;

public class ScannerYBuffer {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		//Scanner nuevosc = new Scanner(System.in); //No es recomendable ni necesario declarar otro scanner

		System.out.println("Introduce un número");
		int numero1 = sc.nextInt();
		sc.nextLine();
		
		System.out.println("Introduce tu nombre");
		String nombre = sc.nextLine();
				
		System.out.println("Tu nombre es: " + nombre + ". Tu número es: " + numero1);
		/*
		 * System.out.println("Número 1: " + numero1 + "\nNúmero 2: " + numero2);
		 */		
		
	}
	

}