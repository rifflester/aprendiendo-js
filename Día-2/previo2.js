let usuarios = [
    {nombre: "Brandon", rol: "admin"},
    {nombre: "Abril", rol: "user"},
    {nombre: "Branda", rol: "mid"}
];

function esAdmin(usuarios) {
    for ( let i= 0; i < usuarios.length; i++) {
        if(usuarios[i].rol === "admin") {
            return true;
        }
    }
    return false;
};

console.log(esAdmin(usuarios[0]));