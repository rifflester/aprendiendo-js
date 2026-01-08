let personas = [
    {nombre: "A", edad: 10},
    {nombre: "B", edad: 20},
    {nombre: "C", edad: 30}
];

let cargaEdad = 0;
let conteo = 0;
for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad >= 18) {
        /** 
         * OJO - MUY IMPORTANTE
         * no es lo mismo =+
         * que +=
         * el último modifica la variable, en otras palabras suma
         * el primero solo se queda con el último valor
         * u.u
         */
        cargaEdad += personas[i].edad;
        conteo++;
    }
};

let promedio = cargaEdad/conteo;

console.log(promedio);