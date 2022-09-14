let pares =0 
let impar =0
let numeros = []

for (let i=0 ; i<10; i++){
    numeros[i] = parseInt(prompt(`Digite os 10 números`));
    if(numeros[i] % 2 == 0){
        pares++
    }
    else{
        impar++
    }
}
document.write(`<br>${pares} são números pares`);
document.write(`<br>${impar} são números impares`);