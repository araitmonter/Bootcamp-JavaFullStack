
public class Ciclos {
	public static void main(String[] args) {
		/*
		 * Ciclo While
		 * 
		 * */
		/*
		 * int control = 0;
		while(control < 10) {
			System.out.println( "[" + control +"] Hola Mundo " );
			control +=1;
		}
		 */
		// ciclo do-while
		/*
		int control = 0;
		
		do {
			System.out.println("Control = " + control);
			control ++;
		}while(control < 3);
		*/
		
		//ciclo for
		for(int i = 0; i < 10; i++) {
			if(i %2 == 0) {
				//con continue termina una ejecucion del ciclo
				continue;
			}
			System.out.println("Control = " + i);
		}
		
		
		
	}
}