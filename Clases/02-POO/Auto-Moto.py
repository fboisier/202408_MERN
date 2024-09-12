class Vehiculo:
    def __init__(self, marca, patente, modelo, ruedas, combustible, kilometraje, color, chasis):
        self.marca = marca
        self.patente = patente
        self.modelo = modelo
        self.ruedas = ruedas
        self.combustible = combustible
        self.kilometraje = kilometraje
        self.color = color
        self.chasis = chasis

    def avanza(self):
        print("El vehículo avanza")

    def gira(self):
        print("El vehículo gira")

    def detiene(self):
        print("El vehículo se detiene")

    def enciende(self):
        print("El vehículo se enciende")

    def apaga(self):
        print("El vehículo se apaga")


class Auto(Vehiculo):
    def __init__(self, marca, patente, modelo, ruedas, combustible, kilometraje, color, chasis, puertas, caja_cambio):
        super().__init__(marca, patente, modelo, ruedas, combustible, kilometraje, color, chasis)
        self.puertas = puertas
        self.caja_cambio = caja_cambio

    def retrocede(self):
        print("El auto retrocede")


class Moto(Vehiculo):
    def __init__(self, marca, patente, modelo, ruedas, combustible, kilometraje, color, chasis):
        super().__init__(marca, patente, modelo, ruedas, combustible, kilometraje, color, chasis)

    def enciende(self):
        print("La moto se enciende")


class Camion(Vehiculo):
    def __init__(self, marca, patente, modelo, ruedas, combustible, kilometraje, color, chasis):
        super().__init__(marca, patente, modelo, ruedas, combustible, kilometraje, color, chasis)