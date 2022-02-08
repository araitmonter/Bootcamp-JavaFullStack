


class Pokemon {
    constructor(nombre, tipo) {
            this.nombre = nombre;
            this.tipo = tipo;
        }
        //metodos
    atacar() {
        return console.log(`${this.nombre} esta atacando`)
    }
}


class Pikachu extends Pokemon { //estamos hacienmdo herencia de las variables
    constructor(nombre, tipo, edad, Hp) {
        super(nombre, tipo) //no se pueden crear nuesvos atributos;
        this.edad = edad;
        this.hp = Hp;
    }
    evolucionar() {
        return console.log(`${this.nombre} esta evolucionando.`)
    }
    barraDeEstado() {
        return console.log(` Su barra de estado es de ${this.hp}`)
    }
}

class Electrico1 extends Pikachu {
    constructor(nombre, tipo, edad, color) {
        super(nombre, tipo, edad, Hp)
        this.color = color;
    }
}

const Pikachu1 = new Pikachu("Juan", "Electrico", 3, 1200); /// solo pertenec a Pikachi
console.log(Pikachu1);
Pikachu1.atacar();
Pikachu1.evolucionar();
Pikachu1.barraDeEstado();

const Pokemon2 = new Pokemon("Charmander", "Fuego")
Pokemon2.atacar();