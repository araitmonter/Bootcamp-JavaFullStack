// imprimir la tabla de multiplicar que pida el usuario
import java.util.Scanner;
public class Tabla {
	public static void main(String[] args) {
		/*
		 * Utilizando un bucle while
1.- Crea una nueva clase llamada Tabla
2.- Copia el siguiente codigo y verifica que funcione
	
	import java.util.Scanner;
	public class Table
	{
	    public static void main(String[] args)
	    {
	        Scanner console = new Scanner(System.in);
	        int num;
	        
	        System.out.print("Ingresa cualquier número positivo: ");
	        num = console.nextInt();
	                
	        System.out.println("Tabla de multiplicar de  " + num);
	        
	       //Implementa un bucle while que imprima el resultado
	    }
	}	
3.- Debe imprimir la tabla de multiplicar del número en cuestión (solo los primeros 10 números)
*/
		 Scanner console = new Scanner(System.in);
	     int num;
	        
	     System.out.print("Ingresa cualquier número positivo: ");
	     num = console.nextInt();               
	     System.out.println("Tabla de multiplicar de  " + num);
	        
	     //Implementa un bucle while que imprima el resultado
	     System.out.println("--------------------------------");
	     for(int i = 1; i <= 10 ; i++) {
	    	 System.out.println("\t" + i + " x " + num + " = " + (i*num));
	     }
	     System.out.println("--------------------------------");
	}
}