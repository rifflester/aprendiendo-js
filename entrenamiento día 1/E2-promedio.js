let suma = 0;
let notas = [14, 8, 11, 17];

for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
}

let promedio = suma / notas.length;
console.log(promedio);