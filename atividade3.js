const prompt = require('prompt-sync')();

let idade=0
let menos21=0
let mais50=0

while(idade != -99){
    idade = Number(prompt(`Digite sua idade: `));
    if(idade < 21 && idade != -99){
        menos21++;
    }
    else if(idade > 50){
        mais50++;
    }
}