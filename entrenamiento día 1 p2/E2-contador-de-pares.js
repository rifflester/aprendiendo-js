/**
 * CONTAS CUÁNTOS SON NÚMEROS PARES
 */

let numeros = [5, 12, 3, 20, 7];
let conteo = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]%2 == 0) {
        conteo++;
    }
}
/** 
 * En adelante cuando se hace una comparación, no usar
 * ==
 * En cambio usar un triple signo de igual
 * ===
 * Es más recomendable en JavaScript
 */
console.log("Hay ", conteo, " números pares");