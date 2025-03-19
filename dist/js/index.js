"use strict";
/*document.addEventListener("DOMContentLoaded" , ()=>{
});
*/
console.log("Calculo no console");
function toSum(fisrt_parcel, second_parcel) {
    let sum = fisrt_parcel + second_parcel;
    console.log("Resultado da soma: ", sum);
}
toSum(10, 1); //Função de soma
function toSubtract(minuend, subtrahend) {
    let change_over = minuend - subtrahend;
    console.log("Resultado da subtração: ", change_over);
}
toSubtract(10, 2); //Função de subtração
function toMultiply(fisrt_factor, second_factor) {
    let product = fisrt_factor * second_factor;
    console.log("Resultado da multiplicação: ", product);
}
toMultiply(10, 2); //Função de multiplicação
function toDivide(dividend, divider) {
    let quotient = dividend / divider;
    console.log("Resultado da divisão: ", quotient);
}
toDivide(10, 2); //Função de Divisão
function toExp(x, y) {
    let potency = (x ** y); //Ou Math.pow(x,y)
    console.log("Resultado da potenciação: ", potency);
}
toExp(3, 2); //Função de exponenciação
function toSquareRoot(x) {
    let result = Math.sqrt(x);
    console.log("Resultado da raiz quadrada: ", Math.round(result));
}
toSquareRoot(49); //Função de Raiz Quadrada
function toPercents(x, y) {
    let result = (x / 100) * y;
    console.log(`${x}% de ${y} é igual a ${Math.round(result)}`);
}
toPercents(9, 275);
