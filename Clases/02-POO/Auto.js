class Auto {
    constructor(marca, patente, modelo, ruedas, puertas, combustible, kilometraje, color, chasis, caja_cambio) {
        this.marca = marca;
        this.patente = patente;
        this.modelo = modelo;
        this.ruedas = ruedas;
        this.puertas = puertas;
        this.combustible = combustible;
        this.kilometraje = kilometraje;
        this.color = color;
        this.chasis = chasis;
        this.caja_cambio = caja_cambio;
        this.encendido = false;
    }

    retrocede() {
        if (this.encendido) {
            console.log("El auto retrocede");
        } else {
            console.log("El auto no está encendido");
        }
    }

    avanza() {
        if (this.encendido) {
            console.log("El auto avanza");
        } else {
            console.log("El auto no está encendido");
        }
    }

    gira() {
        if (this.encendido) {
            console.log("El auto gira");
        } else {
            console.log("El auto no está encendido");
        }
    }

    detiene() {
        if (this.encendido) {
            console.log("El auto se detiene");
        } else {
            console.log("El auto no está encendido");
        }
    }

    enciende() {
        if (!this.encendido) {
            this.encendido = true;
            console.log("El auto se enciende");
        } else {
            console.log("El auto ya está encendido");
        }
    }

    apaga() {
        if (this.encendido) {
            this.encendido = false;
            console.log("El auto se apaga");
        } else {
            console.log("El auto ya está apagado");
        }
    }
}

const auto = new Auto("Toyota", "ABC123", "2020", 4, 5, "Gasolina", 0, "Negro", "Chasis", "Caja de cambios");

auto.detiene();