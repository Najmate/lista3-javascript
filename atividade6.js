const prompt = require('prompt-sync')();

let numero 
let totalNum=0
let multiplos=0

do{
    numero = Number(prompt('Digite um número: '));
    
    if(numero % 3 == 0 && numero != 0){
        multiplos += numero;
        totalNum++;
    }
}while(numero != 0);

const media = multiplos / totalNum;

console.log(`\nA média de números multiplos de 3 é: ${media.toFixed(1)}`);