// Clase Vehiculo
class Vehiculo {
    constructor(marca, patente, modelo, ruedas, combustible, kilometraje, color, chasis) {
        this.marca = marca;
        this.patente = patente;
        this.modelo = modelo;
        this.ruedas = ruedas;
        this.combustible = combustible;
        this.kilometraje = kilometraje;
        this.color = color;
        this.chasis = chasis;
    }

    avanza() {
        console.log(`El vehículo ${this.marca} ${this.modelo} avanza`);
    }

    gira() {
        console.log(`El vehículo ${this.marca} ${this.modelo} gira`);
    }

    detiene() {
        console.log(`El vehículo ${this.marca} ${this.modelo} se detiene`);
    }

    enciende() {
        console.log(`El vehículo ${this.marca} ${this.modelo} se enciende`);
    }

    apaga() {
        console.log(`El vehículo ${this.marca} ${this.modelo} se apaga`);
    }
}

// Clase Auto (hereda de Vehiculo)
class Auto extends Vehiculo {
    constructor(marca, patente, modelo, ruedas, combustible, kilometraje, color, chasis, puertas, caja_cambio) {
        super(marca, patente, modelo, ruedas, combustible, kilometraje, color, chasis);
        this.puertas = puertas;
        this.caja_cambio = caja_cambio;
    }

    retrocede() {
        console.log(`El auto ${this.marca} ${this.modelo} retrocede`);
    }
}

// Clase Moto (hereda de Vehiculo)
class Moto extends Vehiculo {
    constructor(marca, patente, modelo, ruedas, combustible, kilometraje, color, chasis) {
        super(marca, patente, modelo, ruedas, combustible, kilometraje, color, chasis);
    }

    enciende() {
        console.log(`La moto ${this.marca} ${this.modelo} se enciende`);
    }
}

const moto1 = new Moto("Yamaha", "ABC123", "YBR 125", 2, "Gasolina", 0, "Blanca", "YBR 125");
