let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

let nota = 14;
if (nota >= 11) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}


function evaluarNota(nota) {
    if (nota >= 11) {
        return "Apronado";
    } else {
        return "Desaprobado";
    }
}

console.log(evaluarNota(14));
console.log(evaluarNota(8));

console.log(evaluarNota(11));
console.log(evaluarNota(10));