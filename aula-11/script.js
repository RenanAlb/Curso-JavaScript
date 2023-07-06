let num = [5, 8, 2, 9, 3];
num.push(1); //coloca o 1 no final
num.sort(); //coloca em ordem crescente
console.log(num);
console.log(`Nosso vetor tem ${num.length} posições`); //mostra o comprimento do vetor
// Aqui let guarda [5, 8, 2, 9, 3];
console.log(`O primeiro valor do vetor é ${num[0]}`);//como mostrar vetores
let pos = num.indexOf(4);
if (pos == -1) {
    console.log('O valor não foi encontrado!');
} else {
    console.log(`O valor está na posição ${pos}`);
}

//console.log(`O valor 8 está na posução ${pos}`);
