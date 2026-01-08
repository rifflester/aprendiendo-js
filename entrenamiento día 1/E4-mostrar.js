let usuarios = [
    {nombre: "Ana", edad: 25},
    {nombre: "Luis", edad: 17},
    {nombre: "Carlos", edad: 32},
    {nombre: "María", edad: 15}
];


for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >= 18) {
        console.log(usuarios[i].nombre);
    }
}


