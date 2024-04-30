const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Digite o primeiro numero:"));
let num2 = parseInt(prompt("Digite o segundo numero:"));
let operador= prompt("Digite o operador(+,-,*,/)?");
let resultado;

if(operador === '+'){
    resultado = num1 + num2;
    console.log("O Resultado é " + resultado);
}else if(operador === '-'){
    resultado = num1 - num2;
    console.log("O Resultado é " + resultado);
    
}else if(operador === '*'){
    resultado = num1 * num2;
    console.log("O Resultado é " + resultado);
}else if(operador === '/'){
    resultado = num1 / num2;
    console.log("O Resultado é " + resultado);
}else{
    console.log("não sei");
}   