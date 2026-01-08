let usuarios = [
    {nombre: "Ana", rol: "admin"},
    {nombre: "Luis", rol: "user"},
    {nombre: "Carlos", rol: "user"}
];

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].rol === "user") {
        console.log(usuarios[i].nombre);
    }
};
