// Array de palabras
let palabras = ["Hola", "Mundo", "OpenAI"];

// Función que convierte todas las palabras a minúsculas
let convertirAMinusculas = (palabra) => {
    return palabra.toLowerCase();
};

let convertirAMayusculas = (palabra) => {
    return palabra.toUpperCase();
};

// Función de mapeo que aplica una función dada a cada elemento del array
let mapPalabras = (array, fn) => {
    for(let i = 0; i < array.length; i++){
        array[i] = fn(array[i])
    }

    return array;
};

// Mostrar el resultado de aplicar la función de mapeo a las palabras
console.log(mapPalabras(palabras, convertirAMayusculas));