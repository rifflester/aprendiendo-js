function saludar() {
    console.log("Hola");
}

saludar();
saludar();


function saludo(nombre) {
    console.log("Hola " + nombre);
}

saludo("Andrea");
saludo("Carlos");

function sumar(a, b) {
    console.log(a + b);
}

sumar(3, 4);
sumar(10, 5);

let x = 8;
let y = 9;

function operar(){
    z = x + y;
}

operar();

console.log(z);


function adicion(C, D) {
    return C + D;
}

let resultado = adicion(6, 8);
console.log(resultado);

let total = adicion(10, 5) * 2;
console.log(total);
