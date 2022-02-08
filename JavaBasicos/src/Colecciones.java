import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;

public class Colecciones {
	public static void main(String[] args) {
		
		//Las colecciones nos sirven para almacenar un conjunto de objetos
		//La diferencia entre colecciones y objetos es que las colecciones son dinámicas
		// las colecciones pueden cambiar el número de elementos agregados
		//Se tienen 3 tipos de colecciones: Set, List y Map
		
		// Set tiene 3 tipos de implementaciones para Set (HashSet, TreeSet, LinkedHashSet) 
		//En Set no pueden contener elementos repetidos
		//Los elemntos no mantienen un orden
		
		/*
		//HashSet						
		Set<String> frutas = new HashSet<String>(); 
		frutas.add("mango");
		frutas.add("granada");
		frutas.add("piña");
		frutas.add("sandia");
		frutas.add("mamey");
		frutas.add("fresa");
		*/
		
		/*
		//TreeSet		
		//Esta implementación va ordenando los valores alfabéticamente (o por mayúsculas), por lo que es la implementación más lenta
		Set<String> frutas = new TreeSet<String>(); 
		frutas.add("mango");
		frutas.add("granada");
		frutas.add("piña");
		frutas.add("sandia");
		frutas.add("mamey");
		frutas.add("fresa");
		*/
		
		/*
		//LinkedHashSet		
		//Esta implementación ordena los elementos de inserción 
		//es más costoso que 
		Set<String> frutas = new LinkedHashSet<String>(); 
		frutas.add("mango");
		frutas.add("granada");
		frutas.add("piña");
		frutas.add("sandia");
		frutas.add("mamey");
		frutas.add("fresa");
		*/
				
		/*
		//foreach puede recorrer una colección y en cada recorrido o vuelta recupera el valor y lo podemos almacenar en una variable
		//Sintaxis:
		//for(tipoDeDatoElemento variable : elementoARecorrer)
							
		/*
		for(String fruta : frutas) {
			System.out.println(fruta);
		}
		*/
		

		//List
		//se permiten elementos duplicados
		//permiten acceder a elementos específicos
		//permiten buscar elementos
		
		
		//ArrayList
		List<String> pokemones = new ArrayList<String>();
		pokemones.add("chikorita");
		pokemones.add("Eevee");
		pokemones.add("Psyduck");
		pokemones.add("Dragonite");
		pokemones.add("Charizard");
		pokemones.add("Gengar");
		pokemones.add("Flygon");
		
		pokemones.add(2, "Pikachu"); //se inserta etse elemento en la posición 2 y desplaza al resto de los elementos
		
		pokemones.remove(5);//remueve el elemento de la posición especificada
		
		pokemones.set(0, "Flareon"); //set reemplaza el elemento en la posición especificada
		
		for(String pokemon : pokemones) {
			System.out.println(pokemon);
		}
		
		System.out.println("************");
		System.out.println(pokemones.get(4)); //este me devuelve el elemento de la posición i en el array
		
		System.out.println(pokemones.indexOf("Gengar")); //indexOf busca el elemento en el array y devuelve la posición i. 
		//En elementos repetidos al usarindexOf este devuelve el índice del primer elemento que coincida
		
		
		//LinkedList 
		//es una lista doblemente enlazada
		//por ejemplo, el elemento no. 3 sabe que antes de él está el elemento 2 y después de él va el elemento 4
		//con esto es más rápido insertar y remover elementos
		List<String> digimones = new LinkedList<String>();
		digimones.add("Agumon");
		digimones.add("Patamon");
		digimones.add("Angemon");
		digimones.add("Andromon");
		digimones.add("Agumon");
		digimones.add("greymon");
		
		//Map
		//Asocia claves a valores (siempre van dos elementos)
		//No puede tener claves duplicadas 
		//Sólo puede tener un valor asociado
		
		//HashMap
		//Tiene un mejor rendimiento pero no garantiza un orden a la hora de hacer iteraciones 
		Map<Integer, String> usuarios = new HashMap<Integer, String>();
		usuarios.put(1123, "Carlos Eduardo");
		usuarios.put(2546, "Raúl");
		usuarios.put(3116, "Ro");
		
		System.out.println("************");
		System.out.println(usuarios.get(3116)); //al usar le get debo indicar la clave del elemento que busco
		
		//keySet
		//Nos permite recuperar el nombre de la clave			
		System.out.println(usuarios.keySet());
		
		//values
		//Nos permite recuperar el valor directamente
		System.out.println(usuarios.values());
		
		//TreeMap
		Map<String, String> tamales = new TreeMap<String, String>();
		tamales.put("Oaxaqueño", "Mole rojo");
		tamales.put("Torta", "Mole verde");
		tamales.put("Dulce", "Gansito");
		tamales.put("Salado", "Cochinita");		
		
		System.out.println("*********");
		System.out.println(tamales.keySet());
		System.out.println(tamales.values());
		
		System.out.println(tamales);
		
		tamales.entrySet().forEach(elemento -> {
			System.out.println(elemento.getKey());
			System.out.println(elemento.getValue());
		});
		
		//LinkedHashMap
		Map<Integer, String> carros = new LinkedHashMap<Integer, String>();
		carros.put(1, "Volvo");
		carros.put(567, "Mercedes Benz");
		carros.put(8, "Mustang");
		
		System.out.println("**************");
		System.out.println(carros.keySet());
		System.out.println(carros.values());
	}

}