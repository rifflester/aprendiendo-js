/*Calcular cuantos mayores de edad hay
EJERCICIO DE CONTEO*/

let usuarios = [
    {nombre: "Ana", edad: 25},
    {nombre: "Luis", edad: 17},
    {nombre: "Carlos", edad: 32},
    {nombre: "María", edad: 15}
];

let conteo = 0;
for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].edad > 18) {
            conteo = conteo + 1;
        } else {

        }
}
/* En lugar de "conte = conteo +1" también se puede usar "conteo++" */
console.log(conteo);