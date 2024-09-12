
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const comenzarCodigo = (a, b, callback) => {
    return callback(a,b);
}

const resultado = comenzarCodigo(10, 5, multiplicar);
console.log(resultado)
