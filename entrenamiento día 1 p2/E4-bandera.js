/** DETERMINAR SI EXISTE AL MENOS UN ADMIN */
let usuarios = [
    {nombre: "Ana", rol: "Admin"},
    {nombre: "Luis", rol: "user"},
    {nombre: "Carlos", rol: "user"}
];

let hayAdmin = false;
/** 
 * a veces es bueno almacenar los datos de validación afuer
 * buscando un cambio de estado
 * en este caso inicialmente no se me ocurría que hacer
 * pero al declarar la variable "hayAdmin" y almacenando un valor booleano
 * puedo luego de mi comprobación con el FOR
 * cambiar el estado de la variable con una condicional
 * es una manera ingeniosa de jugar
 */

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].rol === "Admin") {
        hayAdmin = true;
    }
};

console.log(hayAdmin);