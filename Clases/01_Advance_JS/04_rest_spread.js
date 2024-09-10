const nombre = "Francisco";
nombre = "Pancho";

// ------

const persona = {
    nombre: "Francisco",
    apellido: "Boisier",
    edad: 30,
    direccion : {
        calle: "Calle 1",
        barrio: "Barrio 1"
    },
}

persona.nombre = "Pancho";

console.log(persona)


const persona2 = persona;
persona2.apellido = "Perez";
console.log("PERSONA", persona)
console.log("PERSONA 2", persona2)


const persona3 = {...persona};
persona3.edad = 40;
console.log("PERSONA", persona)
console.log("PERSONA 2", persona2)
console.log("PERSONA 3", persona3)
// -----

const animales = ["gato", "perro"];
animales.push("tigre")
console.log(animales)

const animales2 = [...animales, "tigre"];

