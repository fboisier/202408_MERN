

function saludar(nombre){
    return "hola " + nombre;
}

const saludar2 = function(nombre){
    return "hola " + nombre;
}

const saludar3 = (nombre) => {
    return "hola " + nombre;
}

const saludar4 = nombre => "hola " + nombre;


const respuesta = saludar("FRANCISCO");
console.log(respuesta);
const respuesta2 = saludar2("FRANCISCO");
console.log(respuesta2);
const respuesta3 = saludar3("FRANCISCO");
console.log(respuesta3);
const respuesta4 = saludar4("FRANCISCO");
console.log(respuesta4);



function sayHello2(name) {
    const greeting = `Hello ${name}`;
    console.log("We have created the following greeting: " + greeting);
    return greeting;
}

const sayHello2 = (name) => {
    const greeting = `Hello ${name}`;
    console.log("We have created the following greeting: " + greeting);
    return greeting;
}

function haceralgo(){
    sayHello2("francisco")
}

setTimeout(haceralgo, 2000);

setTimeout(()=>sayHello2("francisco"), 2000);

setInterval(()=> console.log("hola"), 1000);


const square2 = function (x) {
    return x * x;
}
console.log(square2(5));

const square = x => x * x;
console.log(square(5));


const helloInVariable2 = function (name) {
    return `Hello ${name}`;
}
console.log(helloInVariable2("Billy"));

const helloInVariableArrow = (name) => `Hello ${name}`;
console.log(helloInVariableArrow("Billy"));
