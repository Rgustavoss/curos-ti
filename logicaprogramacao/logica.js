/*

// Aula 5
 imprimir+ Meu nome e x e estou na aula 5 do professor Jaques

let nome ="Renatto Gustavo";

console.log('Meu nome e '+ nome + ' e estou na aula 5 do professor Jaques');

// operadores 

let num1 = 10;
let num2 =5;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1**num2);

let nunTest = "5.5";
let nunTest2 = parseInt(nunTest);
console.log(nunTest*num2);
console.log(nunTest-num2);
console.log(nunTest2+num2);
console.log(nunTest2-num2); 

const prompt = require('prompt-sync')();
let teste = prompt("Digite seu nome:");
console.log(teste); */

//Aula 6

// exercicio tentando descubri se um numero e impar ou par 

const prompt = require('prompt-sync')();
let numero = prompt("digite um numero:");
if (numero%2 == 0) {
    console.log("O numero e par !");
    
} else {
    console.log("O numero e impar !");
}
