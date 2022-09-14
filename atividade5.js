const prompt = require('prompt-sync')();

let num=0
let soma=0

do{
    num = Number(prompt('Digite um número: '));
    soma += num;
}while(num != 0);

console.log(`\nA soma de todos os números é: ${soma}`);