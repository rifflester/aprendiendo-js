let usuarios = [
    {nombre: "Abril", edad: 25, mascota: "Mamal"},
    {nombre: "Luis", edad: 17, comida: "Tallarines verdes"},
    {nombre: "Brandon", edad:31, mascota: "Ruodoks"}
];

console.log(usuarios);

console.log(usuarios[0].mascota);
console.log(usuarios[2].edad);
console.log(usuarios[1].comida);

for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].nombre);
}

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >= 18) {
        console.log(usuarios[i].nombre + " es mayor de edad");
    } else {
        console.log(usuarios[i].nombre + " es menor de edad");
    }
}