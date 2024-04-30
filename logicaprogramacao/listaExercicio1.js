const prompt = require('prompt-sync')();

/*//ex1 celsius p/ fahrenheit
let graus = parseInt(prompt("digite um numero:"));

reposta = (graus * 9/5)+32;

console.log(reposta);*/

//ex2 calulo de percentual

/*
let eleitores =parseInt(prompt("Digite o numero de eleitores?      "));
let validos =parseInt(prompt("Digite o numero de votos validos?  "));
let nulos =parseInt(prompt("Digite o numero de votos nulos?     "));
let brancos =parseInt(prompt("Digite o numero de votos Brancos?   "));

let pvalido= (validos/eleitores)*100;
let pbranco= (brancos/eleitores)*100;
let pnulos= (nulos/eleitores)*100;
let nvota = (((validos+brancos+nulos)-eleitores)/eleitores)*100;

console.log("==============================");
console.log('Foram '+ pvalido + '% Validos!');
console.log('Foram '+ pnulos + '% Nulos!');
console.log('Foram '+ pbranco + '% em Brancos!');
console.log('Foram '+ nvota + '% e não Compareceram!');
console.log("==============================");
*/
//criando um arry para os quatros valores
/*let valores = [];
let numero1 =parseInt(prompt("Digite o 1° numero de 4:"));
valores.push(numero1);
let numero2 = parseInt(prompt("Digite o 2° numero de 4:"));
valores.push(numero2);
let numero3 = parseInt(prompt("Digite o 3° numero de 4:"));
valores.push(numero3);
let numero4 = parseInt(prompt("Digite o 4° numero de 4:"));
valores.push(numero4);

console.log (valores[0]+25);
console.log (valores[1]*3);
console.log ((valores[2]*12)/100 + '%') ;
console.log (valores.reduce((total,valor)=>total+valor,0));*/

//calcular duas notas e imprimir media execicios (4 e 5)
/*
let nota1 = parseInt(prompt("digite a 1° primeira nota!" ));
let nota2 = parseInt(prompt("digite a 2° nota! "));
let media = (nota1 + nota2)/2;
if (media>= 6) {
        console.log('PARABÉNS!vc foi aprovado com a nota; ' + media );
} else {
        console.log('Vc foi REPROVADO! sua nota foi ' + media + ' Estude mais');
}*/
 // Leia tres lados de um triangulo e quasifique seu tipo! questão 6
 /*let a = parseInt(prompt('Digite o primeior valor?'));
 let b = parseInt(prompt('Digite o primeior valor?'));
 let c = parseInt(prompt('Digite o primeior valor?'));

 
 if (a<b+c && b<a+c && c<a+b) {
        if ((a===b && a!==c)||(a===c && a!==b)||(b===c && b!==a)){
                console.log("Isso e um triangulo, isósceles");
                
        }else if (a==b && b==c){
                console.log("Isso e um triangulo, equilátero");

        }else{
                console.log("Isso e um triangulo, escaleno");
        }
        
 } else {
        console.log('Não e um triangulo');
 }


 console.log(a+' , '+b+' , '+c);

*/
// exercico 7 - COMPRA DE MAÇAS
/*let maca = parseInt(prompt("Digite a quantidade de Maças?"));
if(maca>=12){

        console.log('Voce comprou ' + maca +' ao preco de 0,25 centavos ficando um total de ' + maca* 0.25);
}else{
        
        console.log('Voce comprou ' + maca +' ao preco de 0,30 centavos ficando um total de ' + maca* 0.30);
}*/
//lEIA 2 VALORES E IMPRIMAS ELES EM ORDEM CRESENTE! ex 08
/*
let num1 = parseInt(prompt("Digite o primeiro valor?"));
let num2 = parseInt(prompt("Digite o segundo valor ?"));
if (num1>num2) {
        console.log(num2 +', '+num1);
} else if(num2>num1){
        console.log(num1+', '+num2);
}else{
        console.log("os numeros são iguais");
}*/
//Exercicio: 9 busque o nome dentro do codigo da lista
/*let numero = parseInt(prompt('Digite o seu numero!'));
switch (numero) {
        case 1:
                console.log("Sul");              
                break;
        case 2:
                console.log("Norte");              
                break;
        case 3:
                console.log("Leste");              
                break;
        case 4:
                console.log("Oeste");              
                break;
        case 5:
        case 6:
                console.log("Nordeste");
                break;
        case 7:
        case 8:
        case 9:
                console.log("Sudeste");              
                break;
        default:
              
}
if (numero => 10 && numero <= 20){
        console.log("Centro-Oeste");
        }else{
        console.log("numero não cadastrado");
        }*/
//Exercicio: 10 imprima dez mumero
/*let numero =parseInt(prompt("Digite um numero"))        
for (let index = 0; index < 10; index++) {
        console.log(index +"," + numero);
        
}*/

//questao 11 mostra se o numero e par ou impar e encerra a logica quando for null ou negativo
/*while (true) {
        let numero=parseInt(prompt("Escolha um numero:"));
        if (numero<=0) {
                console.log("O numero"+ numero + " e menor que zero ");
           
                
        }else if(numero % 2 == 0){
                console.log('O numero e par');
                
        }else{
                console.log("o numero e impar")
        }
        
}*/
// questão 12 testa os numero de 1000 a 1999 
/*let index= 1000;
for(;index >=1000 && index <= 1999; index++) {
        if (index % 11 == 5) {
                console.log(index);
        } else {
               
        }
}
//exercicio 13
let numero = parseInt(prompt("Digite o numero inicial!"));
contador = numero + 5;
for(;numero<=contador;numero++){
        for(tab= 1; tab <= 10; tab++){
                resp=numero*tab;
                console.log(tab + ' x ' + numero + ' = '+ resp);    
        }
          console.log("==========================")      
}*/
//exercicio 14
/*let soma = 0;
let quantidade = 0;
let numero;

do {
  numero = parseFloat(prompt("Digite um número decimal (digite 0 para encerrar):"));

  if (numero !== 0) {
    soma += numero;
    quantidade++;
  }
} while (numero !== 0);

if (quantidade > 0) {
  const media = soma / quantidade;
  console.log("A média dos números digitados é: " + media.toFixed(2));
} else {
  console.log("Nenhum número foi digitado.");
}*/
//execicio 15
//exercicio 16

let c =1;
/*while (c <=6) {
        console.log('esta tudo bem');
        c++;
        console.log(c);
}*/
var n = 1
do{
 let primo = 100;
        if (primo%) {
                
        } else {
                
        }


        n++;
        console.log(n);
}while(n<=50)