//------------------------------------------------------------------------------
// LET AND CONST VARIABLES
//------------------------------------------------------------------------------

// 0) VAR VS LET VS CONST

// |          | Scope           | Hoisting       | Re-Declaration | Mutable  |
// |----------|-----------------|----------------|----------------|----------|
// | var      | Function/Global | Hoisted        | Allowed        | Yes      |
// | let      | Block           | Not hoisted    | Not allowed    | Yes      |
// | const    | Block           | Not hoisted    | Not allowed    | No       |

// Scope: 'var' has function or global scope, 'let' and 'const' have block scope
//        (a block -> {}).
// Hoisting: 'var' variables are hoisted (moved to the top of their scope), while
//           'let' and 'const' variables are not hoisted.
// Re-Declaration: 'var' allows re-declaration within the same scope, 'let' and
//                 'const' do not.
// Mutable: 'var' and 'let' variables can be reassigned with a new value, whereas
//          'const' variables are read-only and cannot be reassigned.
//           NOTE: for objects and arrays assigned to const, their properties
//                 can be modified, but the assignment itself cannot be changed.

let modificable = 20;

modificable+=10;

console.log(modificable)

const VERSION = 11;
VERSION+=10;
console.log(VERSION);

function saludar(nombre){
    const SALUDO = "HOLA";

    console.log(SALUDO + nombre);
}
saludar("Pancho")

function getDatos(){
    const URL = "/api/pokemon";

}

var PASSWORD_BASE_DATOS = 1010;
var VERSION_2 = 11;
var nombre = "Francisco"

const PASSWORD_BASE_DATOS = 1011;

for (let i = 0; i < 10; i++){
    console.log(i);
}

async function getCoderData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const coderData = await response.json();
    console.log(coderData.sprites.back_default)
    console.log(coderData.name);
    console.log(coderData.moves);
    for (const movimiento of coderData.moves){
        console.log(movimiento.move.name)
    }
}
getCoderData();
