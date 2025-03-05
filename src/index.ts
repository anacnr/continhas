document.addEventListener("DOMContentLoaded" , ()=>{
    function toSum(fisrt_parcel : number, second_parcel: number){
        let sum : number = fisrt_parcel + second_parcel 
        console.log("Resultado: " , sum);
    }
    toSum(10,2)//Função de soma

    function toSubtract(minuend : number, subtrahend: number){
        let change_over : number = minuend - subtrahend
        console.log("Resultado: ", change_over);
    }
    toSubtract(10,2)//Função de subtração

    function toMultiply(fisrt_factor : number, second_factor: number){
        let product : number = fisrt_factor * second_factor
        console.log("Resultado: ", product);
    }
    toMultiply(10,2)//Função de multiplicação

    function toDivide(dividend : number, divider: number){
        let quotient : number = dividend / divider
        console.log("Resultado: ", quotient);
    }
    toDivide(10,2)//Função de Divisão
});