import java.util.Scanner;
/*
 * Escribe un programa que pida al usuario ingresar su nombre y que entonces imprima cada una de las letras de su nombre.

*/
public class EjercicioDeletreaNombre {
	public static void main(String[] args) {
		
		Scanner nom = new Scanner(System.in);
		 System.out.println("Escribe tu nombre:");
		 String nombre = nom.nextLine();
		 
		 nom.close();
		 
		 System.out.println("Tu nombre deletreado es:\n");
		 
		 for(int i = 0; i < nombre.length(); i++) {
			 System.out.println(nombre.charAt(i));
		 }		
	}
}