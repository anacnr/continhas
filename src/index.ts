/*document.addEventListener("DOMContentLoaded" , ()=>{
});
*/
console.log("Calculo no console");

function toSum(fisrt_parcel : number, second_parcel: number){
    let sum : number = fisrt_parcel + second_parcel 
    console.log("Resultado da soma: " , sum);
}
toSum(10,1)//Função de soma

function toSubtract(minuend : number, subtrahend: number){
    let change_over : number = minuend - subtrahend
    console.log("Resultado da subtração: ", change_over);
}
toSubtract(10,2)//Função de subtração

function toMultiply(fisrt_factor : number, second_factor: number){
    let product : number = fisrt_factor * second_factor
    console.log("Resultado da multiplicação: ", product);
}
toMultiply(10,2)//Função de multiplicação

function toDivide(dividend : number, divider: number){
    let quotient : number = dividend / divider
    console.log("Resultado da divisão: ", quotient);
}
toDivide(10,2)//Função de Divisão

function toExp(x : number, y : number){
    let potency = (x ** y) //Ou Math.pow(x,y)
    console.log("Resultado da potenciação: " , potency);
   
}
toExp(3,2)//Função de exponenciação

function toSquareRoot(x:number){
    let result = Math.sqrt(x)
    console.log("Resultado da raiz quadrada: " , Math.round(result));   
}
toSquareRoot(49)//Função de Raiz Quadrada

function toPercents(x:number, y:number){
    let result = (x/100) * y
    console.log(`${x}% de ${y} é igual a ${Math.round(result)}`);  
}
toPercents(9,275)