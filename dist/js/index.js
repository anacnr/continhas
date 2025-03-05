"use strict";
document.addEventListener("DOMContentLoaded", () => {
    function toSum(fisrt_parcel, second_parcel) {
        let sum = fisrt_parcel + second_parcel;
        console.log("Resultado: ", sum);
    }
    toSum(10, 2); //Função de soma
    function toSubtract(minuend, subtrahend) {
        let change_over = minuend - subtrahend;
        console.log("Resultado: ", change_over);
    }
    toSubtract(10, 2); //Função de subtração
    function toMultiply(fisrt_factor, second_factor) {
        let product = fisrt_factor * second_factor;
        console.log("Resultado: ", product);
    }
    toMultiply(10, 2); //Função de multiplicação
    function toDivide(dividend, divider) {
        let quotient = dividend / divider;
        console.log("Resultado: ", quotient);
    }
    toDivide(10, 2); //Função de Divisão
});
