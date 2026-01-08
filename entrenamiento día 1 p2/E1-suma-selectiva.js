/**Sumar solo los números mayores a 10 */
let numeros = [5, 12, 3, 20, 7];

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        suma = suma + numeros[i];
    }
}
/**Parecido al otro caso
 * cuando veo "suma = suma + numeros[i];"
 * también puede ser reemplazado por
 * "suma += numeros[i];"
 * usar el += nos permite ahorrarnos un poco de tiempo,
 * indica agregarle un valor específico a la variable
 */
console.log(suma);